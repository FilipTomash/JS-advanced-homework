let numArr = [4, -9, -98, -1, 444, 3, -555];

for (i = 0; i < numArr.length; i++) {
    if (numArr[i] < 0) {
        numArr[i] = numArr[i] * -1;
    }
}
console.log(numArr);