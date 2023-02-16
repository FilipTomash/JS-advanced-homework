// Exercise 1

let numOfDigits = 0;
let evenOrOdd = "";
let posOrNeg = "";

// Function no.1 - from class, modified for final request/function.

function getDigits(number) {
    if (number < 0) {
        numOfDigits = number.toString().length - 1;
    } else
        numOfDigits = number.toString().length;
}

// Function no.2

function getEvenOrOdd(number) {
    if (number % 2 === 0) {
        evenOrOdd = "Even"
    } else
        evenOrOdd = "Odd"
}

// Function no.3

function getPositiveOrNegative(number) {
    if (number === 0 || number === +0 || number === -0) {
        posOrNeg = "0 is neither a positive nor a negative number";
    }
    else if (number > 0) {
        posOrNeg = "Positive";
    } else
        posOrNeg = "Negative";
    }

// Final function

function getNumberStats(number) {
    getDigits(number);
    getEvenOrOdd(number);
    getPositiveOrNegative(number);
    console.log(`${numOfDigits} Digits,${evenOrOdd},${posOrNeg}`)
}

getNumberStats(-25);