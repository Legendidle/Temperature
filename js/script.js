let elForm = document.querySelector(".intro__form");
let elSelect = document.querySelector(".intro__select");
let elInput = document.querySelector(".intro__input");

let elResult1 = document.querySelector(".intro__item-1");
let elResult2 = document.querySelector(".intro__item-2");

// Round to 2 decimals and drop trailing zeros (e.g. 293.15, 68, -17.78)
const format = (n) => String(Math.round(n * 100) / 100);

elForm.addEventListener("submit", function(evt) {
  evt.preventDefault();

  // Input values are strings; convert so "+" adds instead of joining text
  let inputValue = Number(elInput.value);
  let selectValue = elSelect.value;

  if (elInput.value === "" || Number.isNaN(inputValue)) {
    elResult1.textContent = "Please, enter number";
    elResult2.textContent = "";
    return;
  }

  const ctof = (inputValue * 9/5) + 32;
  const ctok = inputValue + 273.15;

  const ftoc = (inputValue - 32) * 5/9;
  const ftok = (inputValue - 32) * 5/9 + 273.15;

  const ktoc = inputValue - 273.15;
  const ktof = (inputValue - 273.15) * 9/5 + 32;

  if (selectValue === "celsius") {
    elResult1.textContent = "Fahrenheit - " + format(ctof) + "°F";
    elResult2.textContent = "Kelvin - " + format(ctok) + "K";
  } else if (selectValue === "fahrenheit") {
    elResult1.textContent = "Celsius - " + format(ftoc) + "°C";
    elResult2.textContent = "Kelvin - " + format(ftok) + "K";
  } else if (selectValue === "kelvin") {
    elResult1.textContent = "Celsius - " + format(ktoc) + "°C";
    elResult2.textContent = "Fahrenheit - " + format(ktof) + "°F";
  } else {
    elResult1.textContent = "Please, select temperature type";
    elResult2.textContent = "";
  }
});

elForm.addEventListener("reset", function () {
  // Let the browser clear the form, then clear the results
  elResult1.textContent = "";
  elResult2.textContent = "";
});
