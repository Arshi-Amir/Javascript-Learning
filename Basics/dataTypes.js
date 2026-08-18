'use strict'; // using the new ES6 standard
// string
let name = "John Doe";

//integer
let age = 30;

//boolean
let isLoggedIn = true;

//undefined
let address;

//null -- stand alone object
let phoneNumber = null;

//bigint  -- use to store large values 

// symbol -- use to create unique identifier for objects

console.table([name, age, isLoggedIn, address, phoneNumber]);

console.log(typeof name);
console.log(typeof null);
console.log(typeof undefined);