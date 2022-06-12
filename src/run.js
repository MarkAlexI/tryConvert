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
    
    if (isNaN(result) || !checkInput) result = "введенное число не валидно";
    output.innerHTML = "Результат: " + result;
  }
  
function lengthConvert() {
  let output = document.getElementById("out2");
  let input = this.window.document.getElementById("input2").value;

  let from = this.window.document.getElementById("from2").value;
  let to = this.window.document.getElementById("second_dropdown").value;
  let koef = 10;
  let result = 0;
  
  if (from === "м" && to === "м") koef = 1;
  if (from === "м" && to === "фут") koef = 0.31;
  if (from === "м" && to === "миля") koef = 1/1680;
  if (from === "м" && to === "км") koef = 0.001;
  
  if (from === "фут" && to === "м") koef = 2.9;
  if (from === "фут" && to === "фут") koef = 1;
  if (from === "фут" && to === "миля") koef = 0.000189;
  if (from === "фут" && to === "км") koef = 2900;
  
  if (from === "миля" && to === "м") koef = 1680;
  if (from === "миля" && to === "фут") koef = 1/0.000189;
  if (from === "миля" && to === "миля") koef = 1;
  if (from === "миля" && to === "км") koef = 0.7;
  
  if (from === "км" && to === "м") koef = 0.001;
  if (from === "км" && to === "фут") koef = 0.001/2.9;
  if (from === "км" && to === "миля") koef = 1/1.68;
  if (from === "км" && to === "км") koef = 1;
  
  result = input * koef;
  if (input < 0 || isNaN(result)) result = "введенное число не валидно";
  output.innerHTML = "Результат: " + result;
}