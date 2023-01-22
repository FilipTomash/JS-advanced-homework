const givenArr = ["Anna", NaN, 12, undefined, 45, 88, "Jack", 1, null, 567, "Jonah", 3, 91];
let numsArray = [];

function numberOnlySelector(mixedArray) {
    for (const element of mixedArray) {
        if (typeof element === "number" && element !== NaN)
        numsArray.push(element);
    }
    return numsArray;
}

console.log(numberOnlySelector(givenArr));