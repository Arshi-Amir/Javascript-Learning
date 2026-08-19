// const , let , var

// It is advised not to use var because of scope issues. Use let and const instead.

const name = "John"; 
// name= "Ali";
console.log(name);


let accountEmail = "abc@gmail.com";
var accountPassword = "123";
accountCity = "Rwp"; // this is also advised not to  like thisuse like this


accountPassword = "456";

let currentState; // Here its only decalared not initialized so a space in memory has already been allocated for it but it has no value yet. So it is undefined.

console.table([accountEmail, accountPassword, accountCity,currentState]);
