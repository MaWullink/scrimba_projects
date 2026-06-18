// server.js is responsible for handling HTTP requests.
// All business logic is delegated to separate modules to keep this file clean and focused on routing.
import http from "node:http";
import { serveStatic } from "./utils/serveStatic.js";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { saveInput } from "./utils/saveInput.js";
import { printPdf } from "./utils/printPdf.js";

const PORT = 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = http.createServer((req, res) => {
  if (req.url === "/save" && req.method === "POST") {
    return saveInput(req, res);
  } else if (req.url === "/pdf" && req.method === "GET") {
    return printPdf(req, res);
  } else {
    serveStatic(req, res, __dirname);
  }
});

server.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
