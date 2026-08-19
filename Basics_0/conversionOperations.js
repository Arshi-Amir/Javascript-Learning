// Conversion of Number to String
let age = 13;
console.log(age);
console.log(typeof age);

let ageInString= String (age);
console.log(ageInString);
console.log(typeof ageInString);



// Conversion of String to Number
let name = "14";
console.log(name);
console.log(typeof name);

let nameInNumber= Number (name);
console.log(nameInNumber);
console.log(typeof nameInNumber);

name = "14abc"    //it will return not a number because it is not a valid number
let nameInNumber2= Number (name);
console.log(nameInNumber2);
console.log(typeof nameInNumber2);

name = null    //it will return 0
let nameInNumber3= Number (name);
console.log(nameInNumber3);
console.log(typeof nameInNumber3);

name = undefined    //it will return NaN
let nameInNumber4= Number (name);
console.log(nameInNumber4);
console.log(typeof nameInNumber4);



//Conversion of Boolean to Number
let isLoggedIn = true;
console.log(isLoggedIn);
console.log(typeof isLoggedIn);

let isLoggedInInNumber = Number (isLoggedIn);
console.log(isLoggedInInNumber);
console.log(typeof isLoggedInInNumber);



// Conversion of  Number to Boolean
let isLoggedInInBoolean = Boolean (isLoggedInInNumber);
console.log(isLoggedInInBoolean);
console.log(typeof isLoggedInInBoolean);



// OPERATIONS
// + , - , * , / , %

let a = 10;
console.table([a , a++, a--, ++a, --a]);