function clean() {
    firstNum = "";
    secondNum = "";
    operator = "";
    display.textContent = "0";
}

function add(a, b) {
   return parseFloat(a) + parseFloat(b);
};
  
function subtract(a, b) {
    return parseFloat(a) - parseFloat(b);
};
  
function multiply(a, b) {
    return parseFloat(a) * parseFloat(b);
};

function divide(a, b){
    return parseFloat(a) / parseFloat(b);
};
  
function modulo(a, b) {
  return parseFloat(a) % parseFloat(b);
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
        case '%':
            result = modulo(num1, num2);
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
const dot = document.querySelector("#dot");
const clear = document.querySelector("#clear");

let firstNum = "";
let secondNum = "";
let operator = "";

numbers.forEach(number => {
    number.addEventListener("click", e => {
        if (operator === "" /* && firstNum === "" */) {
            firstNum += e.target.innerText;
            display.textContent = firstNum;
            // console.log(`firstNum: ${firstNum}, secondNum: ${secondNum}, operator: ${operator}`);
        } else if (operator !== "" && firstNum !== "") {
            secondNum += e.target.innerText;
            display.textContent = secondNum;
            // console.log(`firstNum: ${firstNum}, secondNum: ${secondNum}, operator: ${operator}`);
        }
    });
});

operators.forEach(op => {
    op.addEventListener("click", e => {
        if (e.target.innerText !== "=" && firstNum !== "" && secondNum === "") {
            operator = e.target.innerText;
          /*  console.log(`firstNum: ${firstNum}, secondNum: ${secondNum}, operator: ${operator}`); */
        } else if (e.target.innerText !== "=" && secondNum !== "") {
            if (operator === '/' && secondNum === "0") {
                alert("Division by zero is not allowed");
                clean();
            } else{let result = operate(firstNum, operator, secondNum);
                operator = e.target.innerText;
                if(!Number.isInteger(result)){
                    let rounded = Math.round(result * Math.pow(10, 6)) / Math.pow(10, 6);
                    display.textContent = rounded;
                } else {
                    display.textContent = result;
                }
                // console.log(`firstNum: ${firstNum}, secondNum: ${secondNum}, operator: ${operator}, result: ${result}`);
    
                firstNum = result;
                secondNum = "";
            }
        } else if (e.target.innerText === "=" && secondNum !== ""){
            if (operator === '/' && secondNum === "0") {
                alert("Division by zero is not allowed");
                clean();
            } else{
                let result = operate(firstNum, operator, secondNum);
                if(!Number.isInteger(result)){
                    let rounded = Math.round(result * Math.pow(10, 3)) / Math.pow(10, 3);
                    display.textContent = rounded;
                } else {
                    display.textContent = result;
                }
                // console.log(`firstNum: ${firstNum}, secondNum: ${secondNum}, operator: ${operator}, result: ${result}`);
                firstNum = result;
                secondNum = "";
                operator = "";
            }
        }
    });
});


clear.addEventListener("click", () => {
    clean();
});

dot.addEventListener("click", () => {
    if (operator === "" && !firstNum.includes(".")) {
        firstNum += ".";
        display.textContent = firstNum;
    } else if (operator !== "" && !secondNum.includes(".")) {
        secondNum += ".";
        display.textContent = secondNum;
    }
});

const negate = document.querySelector("#negate");

negate.addEventListener("click", () => {
    if (operator === "") {
        firstNum = firstNum.startsWith("-") ? firstNum.slice(1) : `-${firstNum}`;
        display.textContent = firstNum;
    } else {
        secondNum = secondNum.startsWith("-") ? secondNum.slice(1) : `-${secondNum}`;
        display.textContent = secondNum;
    }
});
