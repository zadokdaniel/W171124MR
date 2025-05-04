const http = require("node:http");
const url = require("node:url");

const server = http.createServer((req, res) => {
  // show some log to know when a request is received and how it is filled so we can easily debug
  console.log(req.method, req.url);

  // break down the url so we have the path and query parameters separately
  // see https://nodejs.org/docs/latest-v22.x/api/url.html#url-strings-and-url-objects
  const parsed = new URL(req.url, "http://localhost");
  req.path = parsed.pathname; // add to the request a property with only the path part of the url
  req.query = Object.fromEntries(parsed.searchParams); // add to the request a property with the query parameters as objects

  // now we can access the following parts of the request easily
  // run the first request in 'test.http' file to see an example
  console.log("method", req.method);
  console.log("all the url", req.url);
  console.log("the url path only", req.path);
  console.log("the query parameters as object", req.query);
  console.log("the request headers", req.headers);

  /** lines 15-21 are for easy debug and receiving the information from the request with ease you can remove the logs if you understood it until here */

  // ****** responding *********

  // only if GET /home.html. we check using the path we took out of the url and not the url it self as the path is only the part saying what resource we need while the url contains custom values
  // for example GET /home.html?name=shalom should still return the html of the home page maybe with little change (the named in the query)
  if (req.method === "GET" && req.path === "/home.html") {
    res.statusCode = 201; // change the status code default 200
    res.setHeader("Content-Type", "text/html"); // notify the client of the body's format
    // end the respond with some body value
    res.end(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <title>Document</title>
        </head>
        <body>
            <h1>NOICEEE!</h1>
        </body>
        </html>
    `);
    return; // make sure the function ends so the end will not accidentally run twice
  }

  // making sure that even if no if was triggered we still end with a response
  res.statusCode = 404; /// change status code
  res.setHeader("Content-Type", "application/json"); // set header this time the body will be json so application/json
  res.end(JSON.parse({ error: "page not found" })); // ending the response with a json string
});

server.listen(3000, () => console.log("listening on port 3000"));
