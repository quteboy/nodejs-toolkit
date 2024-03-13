const http = require("http");
const fs = require("fs"); // allow to work with file system
const server = http.createServer((req, res) => {
  console.log("req", req.url, req.method, req.headers);
  let url = req.url;
  if (url === "/") {
    res.setHeader("Content-Type", "text/html"); // set headers in request
    res.write("<html>");
    res.write("<head><title>Enter Detail</title></head>");
    res.write(
      '<body><form action="/message" method="POST"><input name="message" type="text"/><button type="submit">Submit</button></form></body>'
    );
    res.write("</html>");
    return res.end();
  }
  if (url === "/message" && req.method === "POST") {
    fs.writeFileSync("message.txt", "Dummy Text");
    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  }
  res.setHeader("Content-Type", "text/html"); // set headers in request
  res.write("<html>");
  res.write("<head><title>Page title</title></head>");
  res.write("</html>");
  res.end();
  //process.exit();
});
server.listen(4000);
/**
 * ? Bare minimum code to create a nodejs server and make it listen to on localhost:4000
 * ! process.exit() hard exit nodejs event loop
 */
