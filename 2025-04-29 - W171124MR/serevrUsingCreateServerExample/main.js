const path = require("node:path");

const express = require("express");

const email = require("./contorollers/email");

const server = express();

server.use(express.json());

server.get("/messages", (req, res) => {
  res.json(email.getMessages(req.query.to));
});

server.post("/messages", (req, res) => {
  email.sendMessage(req.body.from, req.body.to, req.body.message);
});

server.all("/*notFound", (req, res) => {
  const filePath = path.resolve(__dirname, "./index.html");
  res.sendFile(filePath);
});

server.listen(3000, () => console.log("listening on port 3000"));
