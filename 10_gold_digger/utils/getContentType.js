const types = {
  ".js": "text/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
};

export function getContentType(ext) {
  return types[ext.toLowerCase()] || "text/html"; // If no matching MIME type is found, assume HTML as a safe default for the browser
}
