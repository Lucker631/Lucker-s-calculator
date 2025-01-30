let display = document.getElementById("result");
display.value = "";
let currentOperation = "";
let firstNumber = null;

function appendNumber(num) {
  display.value += num;
}

function appendOperator(operator) {
  if (display.value !== "") {
    if (firstNumber === null) {
      firstNumber = parseFloat(display.value);
      currentOperation = operator;
      display.value = "";
    } else {
      calculate();
      currentOperation = operator;
    }
  }
}

function calculate() {
  if (firstNumber !== null && display.value !== "") {
    const secondNumber = parseFloat(display.value);
    let result;

    switch (currentOperation) {
      case "+":
        result = firstNumber + secondNumber;
        break;
      case "-":
        result = firstNumber - secondNumber;
        break;
      case "*":
        result = firstNumber * secondNumber;
        break;
      case "/":
        if (secondNumber === 0) {
          display.value = "Error";
          firstNumber = null;
          currentOperation = "";
          return;
        }
        result = firstNumber / secondNumber;
        break;
    }

    display.value = result;
    firstNumber = result;
    currentOperation = "";
  }
}

function clearDisplay() {
  display.value = "";
  firstNumber = null;
  currentOperation = "";
}
