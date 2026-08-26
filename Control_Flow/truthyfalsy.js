// These values are assumed to be false and true. 

// Falsy Values
//false , '', bigint 0n , 0 , -0 , null , undefined , NaN
let username = false;

if(username) {
console.log(" Username is executed" , username);
}
else {
    console.log("Username doesnt exist");
}

//truthy values
//true , ' ',[],{},function(){} , any thing inside string will be truthy value
let name = {};

if(name) {
console.log(" name is executed" , name);
}
else {
    console.log("name doesnt exist");
}


let Arr = [];
if(Arr.length == 0) {
console.log("Array is empty");
}
else {
    console.log("Array exist");
}

let  Obj = {};
// Object.keys(Obj) ---> convert obj to array and then we can apply lenght property
if(Object.keys(Obj).length == 0) {
console.log("Object is empty");
}
else {
    console.log("Obj exist");
}

