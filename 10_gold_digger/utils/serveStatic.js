import fs from "node:fs/promises";
import path from "node:path";
import { sendResponse } from "./sendResponse.js";
import { getContentType } from "./getContentType.js";

export async function serveStatic(req, res, baseDir) {
  try {
    // Convert URL → file path
    let filePath = path.join(baseDir, "public", req.url);

    // Default to index.html if root is requested
    if (req.url === "/") {
      filePath = path.join(baseDir, "public", "index.html");
    }

    const ext = path.extname(filePath);
    const contentType = getContentType(ext);

    const content = await fs.readFile(filePath);

    sendResponse(res, 200, contentType, content);
  } catch (err) {
    const file = path.join(baseDir, "public", "404.html");
    const content = await fs.readFile(file);

    sendResponse(res, 404, "text/html", content);
  }
}
