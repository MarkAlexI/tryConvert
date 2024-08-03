'use strict';

function numberConvert() {
  let output = document.getElementById("out");
  let input = document.getElementById("input").value;

  let from = +document.getElementById("convertfrom").value;
  let to = +document.getElementById("main_dropdown").value;
  let result = parseInt(input, from).toString(to);
  let checkInput = false;
  switch (from) {
    case 2:
      checkInput = /^[01]+$/.test(input);
      break;
    case 8:
      checkInput = /^[0-7]+$/.test(input);
      break;
    case 10:
      checkInput = /^\d+$/.test(input);
      break;
    case 16:
      checkInput = /^[0-9-ABCDEF]+$/.test(input);
      break;
    default:
      console.log("?");
      break;
  }
  
  if (to === 16) result = '0x00' + result.toUpperCase();
  
  if (to !== 16 && isNaN(result) || !checkInput) result = "введене число не валідне";

  output.innerHTML = "Результат: " + result;
}

function lengthConvert() {
  let output = document.getElementById("out2");
  let input = document.getElementById("input2").value;

  let from = document.getElementById("from2").value;
  let to = document.getElementById("second_dropdown").value;
  let coef = 10;
  let result = 0;

  if (from === "м" && to === "м") coef = 1;
  if (from === "м" && to === "фут") coef = 3.28084;
  if (from === "м" && to === "миля") coef = 1 / 1609.34;
  if (from === "м" && to === "км") coef = .001;

  if (from === "фут" && to === "м") coef = .3048;
  if (from === "фут" && to === "фут") coef = 1;
  if (from === "фут" && to === "миля") coef = 0.000189;
  if (from === "фут" && to === "км") coef = .0003048;

  if (from === "миля" && to === "м") coef = 1609.34;
  if (from === "миля" && to === "фут") coef = 5280;
  if (from === "миля" && to === "миля") coef = 1;
  if (from === "миля" && to === "км") coef = 1.60934;

  if (from === "км" && to === "м") coef = 0.001;
  if (from === "км" && to === "фут") coef = 3280.84;
  if (from === "км" && to === "миля") coef = .621371;
  if (from === "км" && to === "км") coef = 1;

  result = input * coef;
  if (input < 0 || isNaN(result)) result = "введене число не валідне";
  output.innerHTML = "Результат: " + result;
}

function angleConvert() {
  let output = document.getElementById("out3");
  let input = document.getElementById("input3").value;

  let from = document.getElementById("from3").value;
  let to = document.getElementById("third_dropdown").value;
  let coef = 1;
  let result = 0;

  if (from === "градус" && to === "градус") coef = 1;
  if (from === "градус" && to === "радіан") coef = .01745;
  if (from === "градус" && to === "град") coef = 1.111;

  if (from === "радіан" && to === "градус") coef = 57.296;
  if (from === "радіан" && to === "радіан") coef = 1;
  if (from === "радіан" && to === "град") coef = 63.662;

  if (from === "град" && to === "градус") coef = .9;
  if (from === "град" && to === "радіан") coef = .01571;
  if (from === "град" && to === "град") coef = 1;

  result = input * coef;
  if (input < 0 || isNaN(result)) result = "введене число не валідне";
  output.innerHTML = "Результат: " + result;
}

function addClassForLink(direction) {
  const links = document.querySelectorAll("a");
  const activizeLink = document.getElementById(direction);
  links.forEach(link => link.classList.remove('active'));
  activizeLink.classList.add('active');
}