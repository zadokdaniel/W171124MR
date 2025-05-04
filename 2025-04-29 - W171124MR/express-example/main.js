const express = require("express");
const path = require("path");

const app = express();

app.all("*a", (req, res) => {
  console.log(req.method, req.path);
});

app.get(["/home", "/", /^\/[a-c]{2,4}[hg]$/], (req, res) => {
  res.send("home");
});

app.get(
  "/a",
  (req, res, next) => {
    if (req.query.password === "1234") {
      next();
      return;
    }

    res.status(401);
    res.send("unauthorized");
  },
  (req, res, next) => {
    next();
  }
);

app.get("/somefile", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./index.html"));
});

app.get("/a", (req, res) => {
  res.send("a2");
});

const PORT = 3000;
app.listen(PORT, () => console.log(`listening on port ${PORT}`));
