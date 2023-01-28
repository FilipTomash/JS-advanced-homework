const givenArr = [12, 45, 88, 1, 567, 3, 91];
let oddArray = [];

for (const number of givenArr) {
    if (number % 2 !== 0) {
        oddArray.push(number);
    }
}
console.log(oddArray);