const number = 32;
console.log(`The number is: ${number}`);

let myNum = new Number(4235.56410002);
console.log(myNum); // it will specify that datatype is number
console.log(`The number is: ${myNum}`);

console.log(myNum.valueOf());
console.log(myNum.toString() ); // it will convert number to string
console.log(myNum.toFixed(2)); // it will round the number to 2 decimal places
console.log(myNum.toPrecision(4)); // it will round the number to 4 significant digits


//MATHS
console.log(Math.PI); 
console.log(Math.ceil(4.2)); 
console.log(Math.floor(4.9));
console.log(Math.min(0, 150, 30, 20, -8, -200));
console.log(Math.max(0, 150, 30, 20, -8, -200));
console.log(Math.random()); // this random value will be in between 0 and 1
console.log(Math.floor(Math.random()*10+1));

let min=10 ;
let max = 20;
console.log(Math.floor(Math.random()*(max-min+1)+min));