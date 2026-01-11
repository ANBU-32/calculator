const add = (a,b) => Number(a) + Number(b); 
const subtraction = (a,b) => Number(a) - Number(b);
const multiply = (a,b) => Number(a) * Number(b);
const divide = (a,b) => Number(a) / Number(b);

let operator = null;
let firstNumber = "";
let secondNumber = "";
const operate = function (operator,firstNumber,secondNumber) {
    if (operator === "+") return add(firstNumber,secondNumber);
    if (operator === "-") return subtraction(firstNumber,secondNumber);
    if (operator === "*") return multiply(firstNumber,secondNumber);
    if (operator === "/") return divide(firstNumber,secondNumber);
}

const display = document.querySelector(".display");
const inputBtn = document.querySelectorAll(".inputNumber");
const operatorBtn = document.querySelectorAll(".inputOperator");
const clear = document.querySelector(".clear");
const equals = document.querySelector(".equals");

function addDisplay(value) {
    display.textContent = value;
}

let currNum = "";
inputBtn.forEach(btn => {
    btn.addEventListener("click", (e) => {
        currNum += e.target.dataset.value;
        addDisplay(currNum)
    })
});


operatorBtn.forEach(btn => {
    btn.addEventListener("click", (e) => {
        const op = e.target.dataset.operator;
        
        if (currNum !== "") {
            firstNumber = currNum;
            currNum = "";
        } else if (firstNumber === "") {
            return;
        }

        operator = op;
        addDisplay(firstNumber);
    })
});

equals.addEventListener("click", () => {
    if (currNum === "" || operator === null) return;

    secondNumber = currNum;
    let result = operate(operator,firstNumber,secondNumber);
    addDisplay(result);

    firstNumber = String(result);
    currNum = "";
    operator = null;
    
})

clear.addEventListener("click", () => {
    currNum = "";
    firstNumber = "";
    secondNumber = "";
    operator = null;
    addDisplay("0"); 
});