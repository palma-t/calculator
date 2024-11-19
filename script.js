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
const dot = document.querySelector(".dot");
const clear = document.querySelector("#clear");

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


clear.addEventListener("click", () => {
    firstNum = "";
    secondNum = "";
    operator = "";
    display.textContent = "0";
}) 


/* à régler encore :
- intégrer la possibilité des points ;
- une série d'opérations ;
- le "clear" ;
- arrondissement à la fin du résultat si trop de décimales ;
*/