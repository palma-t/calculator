function add(a, b) {
   return parseInt(a) + parseInt(b);
};
  
function subtract(a, b) {
    return a - b;
};
  
function sum(arr) {
    return arr.reduce((sum, current) => sum + current, 0)
};
  
function multiply(arr) {
    return arr.reduce((total, current) => total * current);
};

function divide(a, b){
    return a / b;
};
  
function factorial(n) {
  let product = 1;
  for(let i = n; i > 0; i--) {
    product *= i;
    }
    return product;
};

function operate(num1, operator, num2){
    switch (operator){
        case '+':
            result = add(num1, num2);
            return result;
            break;
        case '-':
            result = subtract(num1, num2);
            return result;
            break;
        case '*':
            result = multiply(num1, num2);
            return result;
            break;
        case '/':
            result = divide(num1, num2);
            return result;
            break;
        default:
            result = "WOOPS";
            return result;
    }
}

let display = document.querySelector("#result-box");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const dot = document.querySelector(".dot");
const clear = document.querySelector(".clear");

let firstNum = "";
let secondNum = "";
let operator = "";

numbers.forEach(number => {
    number.addEventListener("click", e => {
        if (operator === "") {
            firstNum += e.target.innerText;
            display.textContent = firstNum;
            console.log(firstNum);
        } else {
            secondNum += e.target.innerText;
            display.textContent = secondNum;
            console.log(secondNum);
        }
    });
});

operators.forEach(op => {
    op.addEventListener("click", e => {
        if (e.target.innerText !== "=") {
            operator = e.target.innerText;
        } else { // If equals button clicked
            display.textContent = operate(firstNum, operator, secondNum);
        }
    });
});

/*
clear.addEventListener("click", () => {
    firstNum = "";
    secondNum = "";
    operator = "";
    display.textContent = "";
}) 
*/
