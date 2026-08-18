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



// On the basis of how they are stored in memory and how they are accessed datatypes are divided into 2 categories:

// 1. Primitive data types : string (values are changed in its copy not the original) , number , boolean , null , undefined , symbol , bigint

// 2. Non-primitive/Reference data types : Array , Object , Function 
// (values are changed in the original copy not the copy)
// typeof of non primitive data types will return object for all of them except function which will return function.

