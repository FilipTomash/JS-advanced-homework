const givenArr = ["Anna", NaN, 12, undefined, 45, 88, "Jack", 1, null, 567, "Jonah", 3, 91];

function numberOnlySelector(mixedArray) {
    let numsArray = [];
    for (const element of mixedArray) {
        if (typeof element === "number" && Number.isFinite(element))
        numsArray.push(element);
    }
    return numsArray;
}

console.log(numberOnlySelector(givenArr));