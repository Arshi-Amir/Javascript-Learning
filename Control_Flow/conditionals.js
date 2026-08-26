let temp = 45;

if(temp == 45){
    console.log(temp);   
}

// short one line sytax 
if(temp < 50 ) console.log("Temp is less than 50");



if(temp < 30){
console.log(temp); 
}
else{
console.log(`Temp is false : ${temp}`); 
}

temp = 35;
if(temp < 30){
  console.log(temp); 
}
else if(temp <= 35){
    console.log("Executing else if ",temp);
}
else {
console.log(`Temp is false : ${temp}`); 
}

//logical operators
let username = "abc"
if(temp == 35 && username == "abc"){
    console.log("Both conditions are true");
}
else{
    console.log("conditions are not matching");
}

//Ternary Operator
//condition ? true : false
const age = 9;
age >=10 ? console.log("Age is greater than or equal to : ", age) : console.log("Age is less than 10");
;

//Nullish Coalescing Operator (?? : null , undefined)
let val1 = null ?? 5;
console.log(val1);
