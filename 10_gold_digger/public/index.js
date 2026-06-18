import { getGoldPrice } from "./getGoldPrice.js";

//Display gold prices
const priceDisplay = document.getElementById("price-display");

setInterval(function updatePrice() {
  let price = getGoldPrice();
  priceDisplay.textContent = price;
}, 2000);

//Handle post request
const form = document.getElementById("invest-form");
const input = document.getElementById("investment-amount");
const summary = document.getElementById("investment-summary");
const dialog = document.getElementById("resultDialog");
const dialogBtn = document.getElementById("dialog-btn");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const value = input.value;
  try {
    const response = await fetch("/save", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ value }),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    summary.textContent = `You just bought ${data.ouncesGold} ounces (ozt) for £${data.paid}. \n You will receive
          documentation shortly.`;
    dialog.showModal();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
});

dialogBtn.addEventListener("click", () => {
  dialog.close();
  input.value = "";
});

//Print PDF
document.getElementById("pdf-btn").addEventListener("click", () => {
  window.location.href = "/pdf";
});
