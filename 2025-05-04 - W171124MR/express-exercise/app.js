const path = require("node:path");

const express = require("express");
const morgan = require("morgan");

const messages = ["message 1", "message 2"];

const app = express();

// app.use("/a/b/c/d/e", (req, _, next) => {
//   console.log(req.path);
//   next();
// });

// function createLogger({ method, path, httpVersion } = {}) {
//   return (req, res, next) => {
//     const log = [];

//     log.push(method ? req.method : "");
//     log.push(path ? req.path : "");
//     log.push(httpVersion ? req.httpVersion : "");

//     if (log.filter((elem) => Boolean(elem)).length) {
//       console.log(log.join(" "));
//     }

//     next();
//   };
// }

app.use(morgan("dev"));
app.use(express.json());

app.get(["/home", "/"], (_, res) => {
  res.sendFile(path.resolve(__dirname, "./index.html"));
});

app.get("/messages", (_, res) => {
  res.json(messages);
});

app.post("/messages", (req, res) => {
  messages.push(req.body.text);
  res.end();
});

app.all("*pageNotFound", (_, res) => {
  res.status(404);
  res.json({
    error: "page not found",
  });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`listening on port ${PORT}`));
