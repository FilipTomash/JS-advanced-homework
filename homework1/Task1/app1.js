
alert("This app will sum the NUMBER you want with all the smaller numbers except zero")
let numberInput = prompt("Please enter the number you want");
function sumOfNumberAndDecendants(input) {
    const convertedInput = Number(input);
    const sum = convertedInput > 1 ? convertedInput + sumOfNumberAndDecendants(convertedInput - 1) : 1;
    return sum;
}
console.log(sumOfNumberAndDecendants(numberInput));


// Another experimental solution

// let numbers = [1, 2, 3];
// let sum = 0;
// counter = 0;

// for (const number of numbers) {
//     sum += number;
// }
// alert(`These are the starting numbers: ${numbers}`);
// alert(`This is the sum: ${sum}`);

// for (i = 1; i < numbers.length; i++) {
//     let inputNumber = prompt("Which number you want to add? Write an 'N' when you want to stop");
//     let convertedInput = Number(inputNumber);
//     sum += convertedInput;
//     numbers.push(convertedInput);
//     alert(`The new sum is: ${sum}`);
//     if (inputNumber === "N") {
//         break;
//     }
// }