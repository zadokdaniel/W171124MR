const http = require("node:http");

// const server = http.createServer((req, res) => {
//   console.log("method", req.method);
//   console.log("url", req.url);
//   console.log("httpVersion", req.httpVersion);
//   console.log("rawHeaders", req.rawHeaders);

//   res.statusCode = 200;
//   res.setHeader("serverheader1", "value1");
//   res.end("hello");
// });

const data = ["A1", "A2"];

const server = http.createServer((req, res) => {
  if (req.url === "/hello") {
    res.end("Daniel");
    return;
  }

  if (req.method === "GET" && req.url === "/cards") {
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(data));
    return;
  }

  if (req.method === "GET" && req.url === "/home") {
    res.setHeader("Content-Type", "text/html");
    res.end(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Document</title>
        </head>
        <body>
            <h1>hello</h1>
        </body>
        </html>
    `);
    return;
  }

  res.statusCode = 404;
  res.end("Page Not Found");
});

server.listen(3000, () => {
  console.log("listening on port 3000");
});

/**
 * 
1. create a server just like mine
2. change the server so when the url is /name it will return your name any other url will return "not found"
 */
