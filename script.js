function add(a, b) {
   return a + b;
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
let operator;
let operand1;
let operand2;
let operand3;
let operand4;
let operand5;
let operand6;
let operand7;
let operand8;
let operand9;

let seven = document.querySelector("#seven");
seven.addEventListener("click", ()=> {
display.textContent = "7";
operand7 = 7;
});

let six = document.querySelector("#six");
six.addEventListener("click", ()=> {
display.textContent = "6";
operand6 = 6;
});

let plus = document.querySelector("#plus");
plus.addEventListener("click", () => {
    operator = "+";
});

let multiplication = document.querySelector("#multiplication");
multiplication.addEventListener("click", () => {
    operator = "*";
});

let divisation = document.querySelector("#divisation");
divisation.addEventListener("click", () => {
    operator = "/";
});

let minus = document.querySelector("#minus");
minus.addEventListener("click", () => {
    operator = "-";
});

let equal = document.querySelector("#equal");
equal.addEventListener("click", () => {
        display.textContent = operate(operand7, operator, operand6);
});

