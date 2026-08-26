// Global and Block Scope

// let , const -- block scope 
//var -- global scope



if(true){
    let myname = "Abc";
    const email = "abc@gmail.com";
    var age = 9;

    console.log(myname);  
    console.log(email);
    console.log(age);
}

//console.log(myname); // it will show error since let is block scope

//console.log(email);  // it will show error since const is block scope

//age = 10;  // it will execute as const has global scope that is why it is advised not to use
//console.log(age);


// Nested scope
function one(){
    let func_one = "abc";
    function two() {
        let func_two = "def"
        console.log(func_one , func_two);
    }

    //console.log(func_two);   // it will throw error as func_two is block scope. not accessible
    two();
}
//console.log(func_one , func_two); it will also show scope issue
one();


if(true){
    let username = "abc";
    if(username === "abc"){
        console.log(username);  
        const ages = 9;     
    }
    // console.log(ages);   it will show scope error
}
// console.log(username); it will show scope error


// Hoisting in functions 

console.log( a(2)); // it will execute and give me value
function a(num){
    return num;
}
//a(2);

//console.log(function_b(2)); // it will thorw error. when function is stored in variable and is accessed before initialization it will throw error
let function_b = function (num){
    return num;
}
// function_b(2);


// this keyword

// this concept in obj
let my_obj = {
    name : "abc",
    age : 9,
    user : function (){
        //here this keyword is symbolizing that particular object is my context right now
        console.log(`${this.name} is correct user`);
        console.log(this); // Here this will return full obj    
    }
}

my_obj.user();
my_obj.name = "updated Name";
my_obj.user();

// this concept in Node env
console.log(this);  // in node enviornment this will return empty obj


// this concept in function 
function abc(){
    console.log(this);
} 
abc();

// this concept in function wrt to variables
function abcd(){
    let n = "name"
    console.log(this.name); // it will return undefined.
} 
abcd();

//
let abcde = () => {
    let n = "name"
    console.log(this); // they don't create their own this. They inherit this from the surrounding scope.
} 
abcde();