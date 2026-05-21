console.log("JS loaded");

const colorPickForm = document.getElementById("color-pick-form");
const color = document.getElementById("color-picker");
let matching_colors_array = [];

colorPickForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let innerHtml = "";

  const hex_value = color.value.replace("#", "");

  fetch(`https://www.thecolorapi.com/scheme?hex=${hex_value}`)
    .then((res) => res.json())
    .then((data) => {
      matching_colors_array = data.colors.map((c) => c.hex.value);

      for (const color of matching_colors_array) {
        innerHtml += `
          <div class="color-box" style="background-color: ${color}"></div>
        `;
      }

      document.getElementById("colors-container").innerHTML = innerHtml;

      console.log(matching_colors_array);
    });
});
