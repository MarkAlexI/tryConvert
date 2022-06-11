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