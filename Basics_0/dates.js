
let myDate = new Date();
console.log(myDate);

console.log(typeof myDate); // object

console.log(myDate.toString()); // Fri Jun 14 2024 12:34:56 GMT+0000 (Coordinated Universal Time)

console.log(myDate.toDateString()); // Fri Jun 14 2024

console.log(myDate.toTimeString()); // 12:34:56 GMT+0000 (Coordinated Universal Time)

console.log(myDate.toLocaleDateString());  // 6/14/2024 (format may vary based on locale)

console.log(myDate.toLocaleTimeString());  // 12:34:56 PM (format may vary based on locale)

console.log(myDate.getFullYear());

let myDateParam = new Date(2026 , 7 , 3 , 12 , 30 , 45 , 500); // Month is 0-indexed, Day is 1-indexed
console.log(myDateParam); 

let myDate1Param = new Date("12/04/2026");  // format can be changed as well as per need
console.log(myDate1Param);

let mycurrentDate = Date.now(); 
console.log(mycurrentDate);    // it will return in milliseconds
console.log(myDate1Param.getTime()); 

console.log(Math.floor(mycurrentDate/1000));  // to convert milliseconds to seconds
