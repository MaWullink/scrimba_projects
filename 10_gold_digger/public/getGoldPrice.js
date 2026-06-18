//fake prices
let price = 3292.1;

export function getGoldPrice() {
  const change = (Math.random() - 0.5) * 2; // small movement
  price = Number((price + change).toFixed(2));
  return price;
}
