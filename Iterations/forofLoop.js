
//Arrays
const arr = ["a","b","c"];
for (const index of arr) {
    console.log(index);
}

// ============================================================
// FOR...OF LOOP — PRACTICE QUESTIONS
// Easy → Medium → Interview → Challenge
// ============================================================


// Q1 — PRINT EACH BROWSER
// ------------------------------------------------------------

let browsers = ["Chrome", "Firefox", "Edge", "Safari"];

// Print each browser using for...of.
for (const element of browsers) {
    console.log(element); 
}


// Q2 — PRINT TEST STATUS
// ------------------------------------------------------------

let testStatus = ["PASS", "FAIL", "PASS", "BLOCKED", "PASS"];

// Print each status using for...of.
for (const element of testStatus) {
    console.log(element); 
}


// Q3 — MULTIPLY NUMBERS
// ------------------------------------------------------------

let numbers = [10, 20, 30, 40, 50];

// Print each number multiplied by 2.

for (const num of numbers) {
let result = num*2;
    console.log(num ," * " , "2 =" , result);
    
}

// Q4 — NAME LENGTH
// ------------------------------------------------------------

let names = ["Ali", "Ahmed", "Sara", "John"];

// Print the length of each name.
for (const name of names) {
    console.log(`Length of name is ${name.length}`);       
}


// Q5 — TEST CASE LABEL
// ------------------------------------------------------------

let testCases = ["Login", "Signup", "Checkout", "Logout"];
for (const test of testCases) {
    console.log(`Test Case: ${test}`);
    
}
// Print:
// Test Case: Login
// Test Case: Signup
// Test Case: Checkout
// Test Case: Logout



// Q6 — SUM OF NUMBERS
// ------------------------------------------------------------

let numbers6 = [12, 5, 8, 21, 30, 17];

// Find the sum of all numbers using for...of.
let sum = 0;
for (const num of numbers6) {
    sum = sum + num
}
console.log(`sum of all numbers ${sum}`);


// Q7 — COUNT NUMBERS GREATER THAN 10
// ------------------------------------------------------------

let numbers7 = [12, 5, 8, 21, 30, 17];

// Count how many numbers are greater than 10.
let count = 0 
for (const num of numbers7) {
    if(num > 10){
        count = count+1
        console.log(`${num} is greater than 10`);      
    }
}
console.log(`Total numbers greater than 10 are: ${count}`);



// Q8 — COUNT PASS
// ------------------------------------------------------------

let statuses = ["PASS", "FAIL", "PASS", "FAIL", "PASS", "BLOCKED"];

// Count how many tests have "PASS" status.
let count_status = 0;
for (const status of statuses) {
    if(status == "PASS"){
         count_status = count_status + 1;
    }
}
console.log(`Count how many tests have "PASS" status: ${count_status}`);


// Q9 — LENGTH OF EACH USERNAME
// ------------------------------------------------------------

let usernames = ["admin", "tester", "developer", "manager"];

// Create a new array containing the length of each username.
let empty_arr = [];
for (const user of usernames) {
    let length = user.length
    empty_arr.push(length);
}
console.log(empty_arr );

// Expected:
// [5, 6, 9, 7]



// Q10 — FIND LARGEST NUMBER
// ------------------------------------------------------------

let numbers10 = [10, 25, 7, 42, 18, 31];

// Find the largest number using for...of.
let firstnumber = numbers10[0]
for (const num of numbers10) {

    if(firstnumber < num){
        firstnumber = num ;
    }
}
console.log(`Greatest Number from array : ${firstnumber}`);


// Q11 — FIND SMALLEST NUMBER
// ------------------------------------------------------------

let numbers11 = [10, 25, 7, 42, 18, 31];

// Find the smallest number using for...of.

let first_number = numbers11[0]
for (const num of numbers11) {

    if(first_number > num){
        first_number = num ;
    }
}
console.log(`Smallest Number from array : ${first_number}`);



// Q12 — EVEN NUMBERS
// ------------------------------------------------------------

let numbers12 = [10, 15, 20, 25, 30, 35];

// Create a new array containing only even numbers
// Expected:
// [10, 20, 30]
let even_number =[];
for (const num of numbers12) {
    if(num % 2 == 0){
           even_number.push(num);
             }
}
console.log(even_number)



// Q13 — LOGIN TEST CASES
// ------------------------------------------------------------

let testCases13 = [
    "LOGIN_001",
    "LOGIN_002",
    "API_001",
    "LOGIN_003",
    "API_002"
];

// Count how many test cases start with "LOGIN".
let test_count = 0;
for (const test of testCases13) {
    if(test.startsWith("LOGIN")){
             test_count = test_count + 1;
    }
}
console.log(`Count how many test cases start with "LOGIN" : ${test_count}`);


// Q14 — COUNT GMAIL EMAILS
// ------------------------------------------------------------

let emails = [
    "ali@gmail.com",
    "sara@yahoo.com",
    "john@gmail.com",
    "test@hotmail.com"
];

// Count how many emails belong to gmail.com.
let test_count_gmail = 0;
for (const email of emails) {
    if(email.endsWith("gmail.com")){
             test_count_gmail = test_count_gmail + 1;
    }
}
console.log(`Count how many emails belong to gmail.com. : ${test_count_gmail}`);



// Q15 — COUNT DUPLICATE NUMBER
// ------------------------------------------------------------

let numbers15 = [10, 20, 10, 30, 20, 40, 10];

// Find how many times the number 10 appears.
let count_ten = 0;
for (const num of numbers15) {
    if( num == 10){
          count_ten = count_ten + 1;
    }
}
console.log(`Find how many times the number 10 appears : ${count_ten}`);



// Q16 — COUNT EACH TEST STATUS
// ------------------------------------------------------------

let execution = [
    "PASS",
    "FAIL",
    "PASS",
    "BLOCKED",
    "FAIL",
    "PASS"
];

// Count PASS, FAIL, and BLOCKED separately.
let count_fail = 0;
let count_pass = 0;
let count_block= 0;
for (const element of execution) {
    if(element == "PASS"){
        count_pass = count_pass + 1;
    }
    else if (element == "FAIL"){
        count_fail  = count_fail  + 1;
    }
    else if (element == "BLOCKED"){
        count_block  = count_block  + 1;
    }
}

console.log(` PASS : ${count_pass} , FAIL : ${count_fail} , BLOCKED : ${count_block}`);

// Expected:
// PASS: 3
// FAIL: 2
// BLOCKED: 1



// ============================================================
// 🟡 PART 2 — STRINGS
// ============================================================


// Q6 — PRINT EACH CHARACTER
// ------------------------------------------------------------

let browser = "Chrome";

// Print each character using for...of.
for (const char of browser) {
    console.log(`Print each character : ${char}`);
    
}
// Expected:
// C
// h
// r
// o
// m
// e



// Q7 — COUNT CHARACTERS
// ------------------------------------------------------------

let word = "JavaScript";

// Count how many characters are in the string using for...of.
let count_char = 0;
for (const char of word) {
    count_char = count_char + 1;
}
console.log(`Total characters : ${count_char}`);


// Q8 — COUNT VOWELS
// ------------------------------------------------------------

let text = "automation";

// Count how many vowels are present.

// Vowels:
// a, e, i, o, u
let vowel_count = 0;
for (const char of text) {
    if(char == "a" || char =="e" || char =="i" || char =="o" || char =="u"){
             vowel_count = vowel_count + 1;
    }
}
console.log(vowel_count);



// Q9 — COUNT A CHARACTER
// ------------------------------------------------------------

let username = "automationtester";

// Count how many times the character "t" appears.
let count_t = 0;
for (const element of username) {
    if(element === "t"){
        count_t = count_t +1;
    }
}
console.log(`Count how many times the character "t" appears: ${count_t}`);



// Q10 — REVERSE A STRING
// ------------------------------------------------------------

let name = "SDET";

// Reverse the string using for...of.

// Expected:
// "TEDS"
let reversed = "";
for (const n of name) {
     reversed =  n + reversed  ; 
     console.log(reversed);
}
console.log(reversed);



// Q11 — UPPERCASE CHARACTERS
// ------------------------------------------------------------

let word2 = "playwright";

// Print every character in uppercase.
for (const n of word2) {
    console.log(n.toUpperCase());
     
}

// Expected:
// P
// L
// A
// Y
// W
// R
// I
// G
// H
// T



// ============================================================
// 🟠 PART 3 — OBJECTS
// ============================================================

// IMPORTANT:
// A normal object cannot directly be used with for...of.
//
// Example:
//
// let user = {
//     name: "Ali",
//     age: 25,
//     role: "QA"
// };
//
// for...of does NOT directly work on "user".
//
// You can use Object.keys(), Object.values(),
// or Object.entries() to make the data iterable.
// ============================================================


// Q12 — OBJECT KEYS
// ------------------------------------------------------------

let user = {
    name: "Ali",
    age: 25,
    role: "QA"
};

// Use Object.keys() + for...of
// Print:
// name
// age
// role

for (const u of Object.keys(user)) {
    console.log(u);
    
}

// Q13 — OBJECT VALUES
// ------------------------------------------------------------

let user2 = {
    name: "Ahmed",
    age: 28,
    department: "Testing"
};

// Use Object.values() + for...of
// Print all values.
for (const u of Object.values(user2)) {
    console.log(u);  
}


// Q14 — FIND A VALUE
// ------------------------------------------------------------

let employee = {
    name: "Sara",
    role: "QA Engineer",
    experience: 3
};

// Use Object.values() + for...of
// Find and print the value "QA Engineer".
for (const u of Object.values(employee)) {
    if( u == "QA Engineer")  {
        console.log(u);
        
    }
}



// Q15 — COUNT OBJECT VALUES
// ------------------------------------------------------------

let testResult = {
    login: "PASS",
    signup: "PASS",
    checkout: "FAIL",
    logout: "PASS"
};

// Use Object.values() + for...of
// Count how many test cases have "PASS".
let passed = 0;
for (const u of Object.values(testResult)) {
    if( u == "PASS")  {
        passed = passed +1;    
    }
}
console.log(`Test cases passed are : ${passed}`);



// ============================================================
// 🔥 PART 5 — MIXED INTERVIEW QUESTIONS
// ============================================================


// Q19 — STRING + for...of
// ------------------------------------------------------------

let email = "tester@gmail.com";

// Use for...of to count how many characters
// are present before the "@" symbol.
//
// Expected:
// 6
let count_char_before = 0;
for (const element of email) {
    
    if(element != "@"){
        count_char_before = count_char_before +1;
    }
    else {
        break;
    }
}
console.log(`Ttoal char before @: ${count_char_before}`);


// Q22 — OBJECT + ARRAY
// ------------------------------------------------------------

let testData = {
    browser: "Chrome",
    tests: ["Login", "Signup", "Logout"]
};

// Use Object.values() + for...of
// Print the values of the object.
for (const element of Object.values(testData)) {
    console.log(element);
   if(Array.isArray(element)){        
              for (const n of element) {
                    console.log(n);     
              }
   }
}
// Then, when you reach the "tests" array,
// use another for...of loop to print each test.


