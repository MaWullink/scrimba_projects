const convertBtn = document.getElementById("convert-btn");
const lengthRes = document.getElementById("length");
const volumeRes = document.getElementById("volume");
const massRes = document.getElementById("mass");

convertBtn.addEventListener("click", function () {
  const unitInput = document.getElementById("unit-input").value;
  const unit = Number(unitInput);

  if (isNaN(unit)) return;

  calculateLength(unit);
  calculateVolume(unit);
  calculateMass(unit);
});

function calculateLength(unit) {
  const feet = unit * 3.281;
  const meters = unit * 0.3048;

  lengthRes.innerHTML = `
    <p>${unit} meters = ${feet.toFixed(3)} feet</p>
    <p>${unit} feet = ${meters.toFixed(3)} meters</p>
  `;
}

function calculateMass(unit) {
  const pounds = unit * 2.205;
  const kilos = unit * 0.4536;

  massRes.innerHTML = `
    <p>${unit} kilos = ${pounds.toFixed(3)} pounds</p>
    <p>${unit} pounds = ${kilos.toFixed(3)} kilos</p>
  `;
}

function calculateVolume(unit) {
  const gallons = unit * 0.264;
  const liters = unit * 3.785;

  volumeRes.innerHTML = `
    <p>${unit} liters = ${gallons.toFixed(3)} gallons</p>
    <p>${unit} gallons = ${liters.toFixed(3)} liters</p>
  `;
}
