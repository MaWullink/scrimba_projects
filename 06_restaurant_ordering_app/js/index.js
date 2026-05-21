import { menuArray } from "./data.js";

const menuContainer = document.getElementById("menu-container");
const orderItemsContainer = document.getElementById("order-items");
const orderTotalContainer = document.getElementById("order-total");

const cart = [];

// MENU RENDER
function getMenuHtml(menu) {
  return menu
    .map(({ name, ingredients, price, svg, id }) => {
      return `
        <div class="template-inner">
          <img src="./styles/images/${svg}" alt="${name}" class="svg" />

          <div class="menu-information">
            <h2 class="product-name">${name}</h2>
            <p class="ingredients">${ingredients.join(", ")}</p>
            <h3 class="price">$${price}</h3>
          </div>

          <button class="add-btn" data-id="${id}">+</button>
        </div>
      `;
    })
    .join("");
}

function renderMenu() {
  menuContainer.innerHTML = getMenuHtml(menuArray);
}

// CART LOGIC
function addToCart(id) {
  const item = menuArray.find((product) => product.id === id);
  if (!item) return;

  cart.push(item);
  renderCart();
}

// CART RENDER
function renderCart() {
  if (cart.length === 0) {
    orderItemsContainer.innerHTML = "<p>Your cart is empty</p>";
    orderTotalContainer.innerHTML = "";
    return;
  }

  const itemsHtml = cart
    .map((item) => {
      return `
        <div class="order-item">
          <p>${item.name}</p>
          <p>$${item.price}</p>
        </div>
      `;
    })
    .join("");

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  orderItemsContainer.innerHTML = itemsHtml;
  orderTotalContainer.innerHTML = `<h3>Total: $${total}</h3>`;
}

// EVENT LISTENER
document.addEventListener("click", (e) => {
  if (!e.target.classList.contains("add-btn")) return;

  const id = Number(e.target.dataset.id);
  addToCart(id);
});

// INIT
renderMenu();
renderCart();
