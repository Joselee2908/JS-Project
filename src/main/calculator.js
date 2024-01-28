let result = 0;
let reg1 = 0;
let operation = null;
let first = true;
let afterEqual = true;

let resultText = document.querySelector(".result-text");

// NUMBERS
let number = document.querySelector(".numbers");
let target = null;
number.addEventListener("mousedown", function (event) {
    target = event.target;
});
number.addEventListener("mouseup", function (event) {
    if (target === event.target) {
        if (first) {
            resultText.innerText = event.target.innerText;
            first = false;
        } else {
            resultText.innerText += event.target.innerText;
        }
        target = null;
    }
});

// CLEAR
let clear = document.querySelector(".clear");
clear.addEventListener("click", function () {
    resultText.innerText = "0";
    result = 0;
    first = true;
    afterEqual = true;
});

// BACK
let back = document.querySelector(".back");
back.addEventListener("click", function () {
    let newResult = resultText.innerText.slice(0, -1);
    if (newResult.length === 0) {
        resultText.innerText = "0";
        first = true;
    } else {
        resultText.innerText = newResult;
    }
});

// SUM
let sum = document.querySelector(".sum");
sum.addEventListener("click", function () {
    _operationEvent("sum");
});

// SUBSTRACT
let subs = document.querySelector(".substract");
subs.addEventListener("click", function () {
    _operationEvent("subs");
});

// MULTIPLY
let mult = document.querySelector(".multiply");
mult.addEventListener("click", function () {
    _operationEvent("mult");
});

// DIVIDE
let divide = document.querySelector(".divide");
divide.addEventListener("click", function () {
    _operationEvent("divide");
});

// EQUAL
let equal = document.querySelector(".equal");
equal.addEventListener("click", function () {
    if (!afterEqual) {
        reg1 = parseFloat(resultText.innerText);
    }
    _applyOperation(operation, reg1);
    resultText.innerText = result.toString();
    afterEqual = true;
});

function _operationEvent(op) {
    if (!afterEqual) {
        // in order to apply previous operation
        reg1 = parseFloat(resultText.innerText);
        _applyOperation(operation, reg1);
    } else {
        // if it is the first operation
        result = parseFloat(resultText.innerText);
    }
    operation = op;
    resultText.innerText = "0";
    first = true;
    afterEqual = false;
}

function _applyOperation(op, value) {
    switch (op) {
        case "sum":
            result += value;
            break;
        case "subs":
            result -= value;
            break;
        case "mult":
            result *= value;
            break;
        case "divide":
            result /= value;
            break;
    }
}