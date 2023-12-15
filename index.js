const http = require("http");

const PORT = 3001

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("rjmacarthy.xyz");
});

server.listen(PORT);
