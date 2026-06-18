import fs from "node:fs/promises";
import PDFDocument from "pdfkit";

export async function printPdf(req, res) {
  const text = await fs.readFile("output.txt", "utf8");

  const doc = new PDFDocument();

  res.setHeader("Content-Type", "application/pdf");
  res.setHeader("Content-Disposition", "attachment; filename=investment.pdf");

  doc.pipe(res);

  doc.text(text, 10, 10);

  doc.end();
}
