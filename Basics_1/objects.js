//Data is stored in form of key-value pairs

//Object literals (use {} for defining object) /Non Singleton Obj
let myName ={
    name : "Arshi",
    age : 25,
    email : "abc@gmail.com",
    isUser : true,
    "books Read" : [1,2,3,4]
};
console.log(myName);

//elements inside Objects can be accessed by dot operator and []
console.log(myName.email);
console.log(myName["books Read"]);

//Updating the value
myName.isUser = "false";
console.log(myName);

//Adding function to object.
myName.greetings = function() {
    console.log("My Greetings function 1");   
};
console.log(myName.greetings());

//Taking reference of element from object
myName.greetings1 = function() {
    console.log(`Taking reference of object elements : ${this.name}`); 
};
console.log(myName.greetings1());;


// Singleton Object :a pattern for ensuring only one object instance is used

console.log("Singleton Objects");

const singleton_Obj = new Object();
console.log(singleton_Obj); // it will be empty obj

singleton_Obj.email = "singleton@gmail.com";
singleton_Obj.user = "MyUser";
console.log(singleton_Obj);

//object inside object
const obj_InsideObj ={
    age : 12,
    userName : {
         fullName :{
            first_Name: "abc",
            last_Name: "last"
         }
    }
}
console.log(obj_InsideObj.userName.fullName.first_Name);


// Concatinating Objects

const obj_1 = { 
    1 :"a",
    2 :"b"
}
const obj_2 = { 
    3 :"c",
    4: "d"
}
// Not correct method it will return object inside object
let obj_4 = {obj_1,obj_2};
console.log(obj_4);

// using Spread operator 2 objects can be combined.
let obj_3 = {...obj_1,...obj_2} 
console.log(obj_3);

//using Object assign method 2 objects can be combined
let obj_5 = Object.assign({},obj_1,obj_2);
console.log(obj_5);


// obj inside array
let arr_1 = [
     {
       1 : "first",
       2 : "third"
    },
   {
       1 : "second"
    }      
]
console.log(arr_1[0][2]);


// Accessing key value pairs separately in singleton obj
console.log(Object.keys(singleton_Obj)); //it returns array as datatype
console.log(Object.values(singleton_Obj));

// Obj Properties

//1-hasOwnProperty it will check particular value exist in object or not
let myObj_prop = {
    name : "Arshi",
    isUser : true,
    "books" : [1,2,3,4]
}
console.log(myObj_prop.hasOwnProperty("name"));

// 2- length 
console.log(Object.keys(myObj_prop).length);

//Accessing the elements of Object using Object destructuring 
// let {values to fetched  : Optional naming by your choice} = Object from which values are to be fetched
let {books : my_collection} = myObj_prop;
console.log(my_collection);

// JSON - OBJECT FORMAT NOTATION based


