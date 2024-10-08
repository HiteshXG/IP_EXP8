const http = require("http");
const fs = require("fs").promises;
const path = require("path");

const PORT = 3001; // Using 3001 as Create React App typically uses 3000

const server = http.createServer(async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");

  if (req.url === "/read-file" && req.method === "GET") {
    try {
      const fileContent = await fs.readFile(
        path.join(__dirname, "sample.txt"),
        "utf8"
      );
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ content: fileContent }));
    } catch (error) {
      res.writeHead(500, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: "Error reading file" }));
    }
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Not Found" }));
  }
});

console.log("End");

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
