const http = require("node:http");
const path = require("node:path");
const fs = require("node:fs");

const email = require("./contorollers/email");

console.log(email.sendMessage("avi", "shalom", "hello"));
console.log(email.sendMessage("shalom", "avi", "how are you doing?"));
console.log(email.sendMessage("avi", "shalom", "I am well, how are the kids?"));
console.log(email.sendMessage("shalom", "avi", "They are fine"));

function getBody(req) {
  return new Promise((resolve, reject) => {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk;
    });

    req.on("end", () => {
      req.body = body;
      resolve();
    });
  });
}

// const filePath = path.resolve(__dirname, "./index.html");

// const data = fs.readFileSync(filePath);

// fs.readFile(filePath, { encoding: "utf8" }, (err, data) => {
//   console.log(data);
// });

// const rs = fs.createReadStream(filePath);
// rs.on("data", (chunk) => {
//   console.log(chunk);
// });
// rs.on("end", () => {
//   console.log("end");
// });

async function serverEndPoints(req, res) {
  await getBody(req);

  if (req.method === "GET" && req.path === "/messages") {
    res.setHeader("Content-Type", "application/json");

    res.end(JSON.stringify(email.getMessages(req.query.to)));
    return;
  }

  if (req.method === "POST" && req.path === "/messages") {
    if (req.headers["content-type"] === "application/json") {
      const { from, to, message } = JSON.parse(req.body);
      const newMessage = email.sendMessage(from, to, message);

      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify(newMessage));
      return;
    } else {
      res.end("you must give json body");
      return;
    }
  }

  res.statusCode = 404;
  res.setHeader("Content-Type", "text/html");

  const filePath = path.resolve(__dirname, "./index.html");
  const rs = fs.createReadStream(filePath);

  //   rs.on("data", (chunk) => {
  //     res.write(chunk);
  //   });
  //   rs.on("end", () => {
  //     res.end();
  //   });

  rs.pipe(res);
}

const server = http.createServer();

server.on("request", require("./utils/logger"));
server.on("request", require("./utils/parseUrl"));
server.on("request", serverEndPoints);

const PORT = 3000;
server.listen(PORT, () => console.log(`listening on port ${PORT}`));
