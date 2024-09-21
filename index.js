const http = require("http");
const pug = require("pug");
const fs = require("fs");
const path = require("path");

const PORT = 3001;

const server = http.createServer((req, res) => {
  const templatePath = path.join(__dirname, "index.pug");
  
  fs.readFile(templatePath, "utf8", (err, pugTemplate) => {
    if (err) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("Internal Server Error");
      return;
    }

    try {
      const compiledFunction = pug.compile(pugTemplate);
      const renderedHtml = compiledFunction();

      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(renderedHtml);
    } catch (error) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("Error rendering template");
    }
  });
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
