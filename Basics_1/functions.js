function myName(){
    console.log("Arshi Amir")
}
// function reference along with bracket which means calling a functions
//myName();

// function func_name (params no need to give datatype)
function AddTwoNumbers(num1 , num2){
    let result = num1 + num2 
    console.log("this is result", result);
    return result;
}
//AddTwoNumbers(); // it will return Nan as nothing is passed.
//AddTwoNumbers(2,2); // it will print console result
console.log(AddTwoNumbers(2,2)); //it will print return value as well


//AddTwoNumbers using return keyword;
function AddingNumbers(num1 , num2){
    console.log("Adding 2 Numbers");
    //return num1+num2 
}
let result = AddingNumbers(2,"1"); // if either of values is in string so js will perform string concatenation
console.log(result); // since in function return keyword is comment out so it will undefined.

// it will take defined username
function userIsLoggedIn(username){
       return `${username} is logged In`
}
console.log( userIsLoggedIn("Arshi"));

// Nothing is passed so it will give "undefined"
function userIsLoggedIn_1(username){
       return `${username} is logged In 1`
}
console.log( userIsLoggedIn_1());

//if nothing is passed it will take predefined value which is "sam"
function userIsLoggedIn_2(username = "sam"){
       return `${username} is logged In 2`
}
console.log( userIsLoggedIn_2());
console.log(userIsLoggedIn_2("Over-ride"))


// condition of if
function userIsLoggedIn_3(username){
    if(username === undefined){
        console.log("Using === for explaining undefined : Please enter name");    
    }
       return `${username} is logged In 3`
}
console.log( userIsLoggedIn_3());



function userIsLoggedIn_4(username){
    if(!username) // username === undefined and !username has same meaning
        {
        console.log("Using !username for explaining undefined :Please enter name");    
    }
       return `${username} is logged In 4`
}
console.log( userIsLoggedIn_4());


// passing multiple values in function
//using rest operator for handling multiple values of argument

function calculateMyBill(...myBill){
return myBill;
}
console.log( calculateMyBill(200,400,500,"name")); // returns value in array

function calculateMyBill_1(val1,val2,...myBill) // val1 and val2 values will not be returned
{
return myBill;
}
console.log( calculateMyBill_1(200,400,500,"name")); 


// creating object first and then using in function
let myObj = {
    name : "Arshi",
    email : "abc@gmail.com"
}
function userInfo(userInformation){
       return userInformation.name;
}
console.log(userInfo(myObj));


// creating object while calling func
function userInfo_1(userInformation){
       return userInformation.email;
}
console.log(userInfo_1({
    name : "Arshi",
    email : "abc@gmail.com"
}));


// creating array and then using in func
let myarr = [1,2,3,4,5];
function mycreatedArray(myCreatedArray){
return myCreatedArray[0];
}
 console.log(mycreatedArray(myarr));


 // using array directly while calling func
function mycreatedArray_2(myCreatedArray){
return myCreatedArray[4];
}
 console.log(mycreatedArray_2([1,2,3,4,5]));