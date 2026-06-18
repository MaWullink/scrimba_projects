export function sendResponse(res, status, type, content) {
  res.statusCode = status;
  res.setHeader("Content-Type", type);
  res.end(content);
}
