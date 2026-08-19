// Arrays  - Non premitive data type
// resizable 

let number = [1,2,3,4,5,6,7,8,9,10];

console.log(`Printing Array ${number}`);

console.log(`Finding Value at given Index : ${number[5]}`); // find value in array using index

console.log (`Checking Existence of Number in Array : ${number.includes(0)}`); // find particular value and return boolean

console.log(`Finding Position of Element: ${number.indexOf(10)}`); // find position of element

number.push("Pushed to Array" , "push2");
console.log(`New Array After Push : ${number}`);

number.pop();
console.log(`New Array After Pop : ${number}`);

number.unshift("shift add 1");
console.log(`New Array After unshift Operation : ${number}`);

number.shift();
console.log(`New Array After shift Operation : ${number}`);

console.log(number.join()); // it will return array in form of string

console.log(number.length); // returns length starting from 1

console.log(number.slice(1,4));
console.log ("A: " + number);  // array is not changed when slice operation is performed

console.log(number.splice(1,4)); 
console.log ("B: " + number);  // array is changed when splice operation is performed. It will divide array
