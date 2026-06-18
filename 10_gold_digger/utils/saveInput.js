import { sendResponse } from "./sendResponse.js";
import fs from "node:fs/promises";

export async function saveInput(req, res) {
  let body = "";

  for await (const chunk of req) {
    body += chunk;
  }

  const data = JSON.parse(body);

  const ouncesGold = Number((data.value / 2307.69).toFixed(2));

  await fs.appendFile(
    "output.txt",
    `Paid: £${data.value}  Bought: ${ouncesGold} troy ounces of 24k gold.\n`,
    "utf8",
  );

  sendResponse(
    res,
    200,
    "application/json",
    JSON.stringify({
      paid: data.value,
      ouncesGold: ouncesGold,
    }),
  );
}
