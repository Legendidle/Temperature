let elForm = document.querySelector(".intro__form");
let elSelect = document.querySelector(".intro__select");
let elInput = document.querySelector(".intro__input");

let elResult1 = document.querySelector(".intro__item-1");
let elResult2 = document.querySelector(".intro__item-2");

elForm.addEventListener("submit", function(evt) {
  evt.preventDefault();

  let inputValue = elInput.value;
  let selectValue = elSelect.value;

  const ctof = (inputValue * 9/5) + 32;
  const ctok = inputValue + 273.15;

  const ftoc = (inputValue - 32) * 5/9;
  const ftok = (inputValue - 32) * 5/9 + 273.15;

  const ktoc = inputValue - 273.15;
  const ktof = (inputValue - 273.15) * 9/5 + 32;

  if (selectValue === "celsius"){
    elResult1.textContent = "Fahrenheit - " + ctof + "°F";
    elResult2.textContent = "Kelvin - " + ctok + "K";
  }

  else if (selectValue === "fahrenheit"){
    elResult1.textContent = ftoc + "°C";
    elResult2.textContent = ftok + "K";
  }
  
  else if (selectValue === "kelvin"){
    elResult1.textContent = ktoc + "°C";
    elResult2.textContent = ktof + "°F";
  }

  else{
    "Please, enter number"
  }
})


elForm.addEventListener("reset", function (evt2) {
  evt2.preventDefault();

  elResult.textContent = "";
})
