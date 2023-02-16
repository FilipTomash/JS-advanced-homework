// async function () {
//     await 
// }



let numbers = [2,3,5];
function sumThree(num1,num2,num3){
    return num1 + num2 + num3;
}
// We can call the function with the array values separately with spread syntax
console.log(sumThree(...numbers));

let dog = {
    isHappy: true,
    bark: function(){
        console.log("BARK BARK BARK!")
    }
}

let barnie = Object.create(dog); // barnie has everything dog has
barnie.name = "Barnie";
barnie.color = "White";
barnie.age = 2;
barnie.happyBirthday = function(){
    console.log("Happy birthday Barnie!");
    this.age++;
}

let barnieTwinBrother = Object.create(barnie); // the twin has everything barnie has
barnieTwinBrother.name = "Booch"; // This name is added on the twin

let addressInfo = {
    street: "Dogge Street",
    streetNumber: 24,
    contactPerson: "0703452323"
}

let barnieChip = Object.assign(barnie, addressInfo); // copies from address to barnie

let anotherAddress = {
    street: "Other Street",
    streetNumber: 12,
    contactPerson: "072990002"
}

let barnieChipUpdate = Object.assign(barnieChip, anotherAddress); // overrides address values
let barnieChipUpdateReversed = Object.assign(anotherAddress, barnieChip); // we have barnie without the changed address

console.log(Object.keys(barnie));
let dogg = {
    name: "Sparky",
    age: 1,
    bark: function(){
        console.log("BARK BARK BARK");
    },
    printProperties: function(){
        Object.keys(this).forEach(key => console.log(key));
    }
}

console.log(dogg.printProperties(this));