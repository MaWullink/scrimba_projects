console.log("JS loaded");

const form = document.getElementById("color-pick-form");
const colorInput = document.getElementById("color-picker");
const container = document.getElementById("colors-container");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const hexValue = colorInput.value.replace("#", "");

  fetch(`https://www.thecolorapi.com/scheme?hex=${hexValue}`)
    .then((res) => res.json())
    .then((data) => {
      const colors = data.colors.map((c) => c.hex.value);

      container.innerHTML = "";

      for (const hex of colors) {
        const box = document.createElement("div");
        box.className = "color-box";
        box.style.backgroundColor = hex;

        const text = document.createElement("p");
        text.textContent = hex;

        box.appendChild(text);
        container.appendChild(box);
      }
    });
});
