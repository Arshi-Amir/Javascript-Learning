// ============================================================
// forEach() LOOP — TECHNICAL PRACTICE
// ARRAYS + STRINGS + OBJECTS
// Easy → Medium → Difficult
// ============================================================


// ============================================================
// 🟢 PART 1 — BASIC ARRAY QUESTIONS
// ============================================================


// Q1 — PRINT EACH BROWSER
// ------------------------------------------------------------

let browsers = ["Chrome", "Firefox", "Edge", "Safari"];

// Use forEach() to print each browser.

browsers.forEach((values)=>{
      console.log(values);
})


// Q2 — PRINT TEST STATUS
// ------------------------------------------------------------

let testStatus = ["PASS", "FAIL", "PASS", "BLOCKED", "PASS"];

// Use forEach() to print each status.

testStatus.forEach((values)=>{
      console.log(values);
})

// Q3 — MULTIPLY EACH NUMBER
// ------------------------------------------------------------

let numbers = [10, 20, 30, 40, 50];

// Use forEach() to print each number multiplied by 2.
numbers.forEach((val)=>{
console.log(val * 2);

})
// Expected:
// 20
// 40
// 60
// 80
// 100



// Q4 — PRINT INDEX + VALUE
// ------------------------------------------------------------

let browsers2 = ["Chrome", "Firefox", "Edge", "Safari"];

// Use forEach() to print:
browsers2.forEach((val,index)=>{
    console.log(index + " : "+val);
    
    
})
// 0 : Chrome
// 1 : Firefox
// 2 : Edge
// 3 : Safari



// Q5 — PRINT NAME LENGTH
// ------------------------------------------------------------

let names = ["Ali", "Ahmed", "Sara", "John"];

// Use forEach() to print the length of each name.
names.forEach((val)=>{
    console.log(val + " : " + val.length); 
})


// ============================================================
// 🟡 PART 2 — COUNTING & CONDITIONS
// ============================================================


// Q6 — COUNT PASS
// ------------------------------------------------------------

let statuses = [
    "PASS",
    "FAIL",
    "PASS",
    "BLOCKED",
    "PASS"
];

// Count how many times "PASS" appears using forEach().
let count_pass = 0;
statuses.forEach((val)=>{
        if(val == "PASS"){
              count_pass++;
        }
})

console.log(count_pass);


// Q7 — COUNT FAIL
// ------------------------------------------------------------

let execution = [
    "PASS",
    "FAIL",
    "PASS",
    "FAIL",
    "BLOCKED"
];

// Count how many times "FAIL" appears.

let count_fail = 0;
execution.forEach((val)=>{
        if(val == "FAIL"){
              count_fail++;
        }
})

console.log(count_fail);


// Q8 — COUNT NUMBERS GREATER THAN 10
// ------------------------------------------------------------

let numbers2 = [5, 15, 8, 20, 30, 7];

// Count how many numbers are greater than 10.
let count_greaterthanten = 0;
numbers2.forEach((val)=>{
       if(val > 10 ){
        count_greaterthanten++;
       }
})
console.log(`Number greater than 10: ${count_greaterthanten}`);



// Q9 — EVEN NUMBERS
// ------------------------------------------------------------

let numbers3 = [10, 15, 20, 25, 30, 35];

// Create a new array containing only even numbers.
let new_arr = [];
numbers3.forEach((val) =>{
        if(val % 2 == 0){
           new_arr.push(val)
        }
})
console.log(new_arr);

// Expected:
// [10, 20, 30]



// Q10 — LOGIN TEST CASES
// ------------------------------------------------------------

let testCases = [
    "LOGIN_001",
    "LOGIN_002",
    "API_001",
    "LOGIN_003",
    "API_002"
];

// Count how many test cases start with "LOGIN".
let count_test = 0;
testCases.forEach((val) =>{
        if(val.startsWith("LOGIN")){
            count_test++;
        }
})
console.log(`Count how many test cases start with "LOGIN": ${count_test}`);


// ============================================================
// 🟠 PART 3 — STRINGS INSIDE ARRAYS
// ============================================================


// Q11 — COUNT GMAIL EMAILS
// ------------------------------------------------------------

let emails = [
    "ali@gmail.com",
    "sara@yahoo.com",
    "john@gmail.com",
    "test@hotmail.com"
];

// Count how many emails belong to gmail.com.
let count_email = 0;
emails.forEach((val) =>{
        if(val.endsWith("gmail.com")){
            count_email++;
        }
})
console.log(`Count how many emails belong to gmail.com: ${count_email}`);


// Q12 — FIND LONGEST USERNAME
// ------------------------------------------------------------

let usernames = [
    "admin",
    "tester",
    "automationtester",
    "qa"
];

// Find the longest username.
let user_length = 0;
let longest_username = "";
usernames.forEach((val) =>{
        if(val.length  > user_length){
            user_length = val.length;
            longest_username = val
        }
})
console.log(`Find the longest username: ${longest_username}`);
console.log(user_length);



// Q13 — COUNT VOWELS IN EACH WORD
// ------------------------------------------------------------

let words = [
    "test",
    "automation",
    "playwright"
];

// For each word, count how many vowels it contains.

words.forEach((val)=>{
    let count_vowel = 0
    for(let i=0 ; i < val.length ; i++){
          if(val[i] == "a" || val[i] == "e" || val[i] == "i" || val[i] == "o" || val[i] == "u"){
             count_vowel ++;
}
       

}
 console.log(`Total vowel count for ${val} is ${count_vowel}`);
})
// Hint for yourself:
// You can use another loop inside forEach().



// ============================================================
// 🔴 PART 4 — INTERVIEW-STYLE ARRAY QUESTIONS
// ============================================================


// Q14 — FIND LARGEST NUMBER
// ------------------------------------------------------------

let scores = [45, 78, 23, 91, 56, 88];

// Find the largest number using forEach().
let largest_num = scores[0];
scores.forEach((val)=>{
          if(val > largest_num){
                  largest_num = val;
          }
})
console.log(`Largest Number: ${largest_num}`);



// Q15 — FIND SMALLEST NUMBER
// ------------------------------------------------------------

let scores2 = [45, 78, 23, 91, 56, 88];

// Find the smallest number using forEach().
let smallest_num = scores2[0];
scores2.forEach((val)=>{
          if(val < smallest_num){
                  smallest_num = val;
          }
})
console.log(`Smallest Number: ${smallest_num}`);



// Q16 — SUM OF NUMBERS
// ------------------------------------------------------------

let numbers4 = [12, 5, 8, 21, 30, 17];

// Find the sum of all numbers using forEach().
let sum = 0;
numbers4.forEach((val)=>{
sum = sum + val;
})
console.log(`Find the sum of all numbers  : ${sum}`);



// Q17 — COUNT EACH STATUS
// ------------------------------------------------------------

let results = [
    "PASS",
    "FAIL",
    "PASS",
    "BLOCKED",
    "FAIL",
    "PASS"
];

// Count separately:
let count_result_pass = 0;
let count_result_fail = 0;
let count_result_block = 0;
results.forEach((val)=>{
          if(val == "PASS"){
              count_result_pass++;         
          }
          else if(val == "FAIL"){
              count_result_fail++;         
          }
          else if(val == "BLOCKED"){
              count_result_block++;
          }

})
console.log(`Q-17 PASS COUNT: ${count_result_pass++}`);
console.log(`Q-17 fail COUNT: ${count_result_fail++}`);
console.log(`Q-17 BLOCK COUNT:${count_result_block++}`);
// PASS
// FAIL
// BLOCKED



// ============================================================
// 🔥 PART 5 — OBJECTS + forEach()
// ============================================================


// IMPORTANT:
//
// forEach() works directly on ARRAYS,
// not normal objects.
//
// Therefore, convert the object into an array
// using Object.keys(), Object.values(), or Object.entries().
//
// ============================================================


// Q18 — OBJECT VALUES
// ------------------------------------------------------------

let user = {
    name: "Ali",
    age: 25,
    role: "QA"
};

// Use Object.values() + forEach()
// Print each value.
console.log("Print each value from Obj: ");

Object.values(user).forEach((val)=>{
console.log(val);

})

console.log("Print each key,value from Obj: ");

Object.entries(user).forEach((val)=>{
console.log(val);

})
// Expected:
// Ali
// 25
// QA



// Q19 — OBJECT KEYS
// ------------------------------------------------------------

let employee = {
    name: "Sara",
    department: "Testing",
    experience: 3
};

// Use Object.keys() + forEach()
// Print each key.
// IMP ===> Object.key() converts obj to array. and using the array we apply for each loop and print values separately
console.log("Print each key from Obj : ");
Object.keys(employee).forEach((val)=>{
console.log(val);

});



// ============================================================
// 💀 PART 6 — SDET INTERVIEW CHALLENGES
// ============================================================


// Q21 — TEST EXECUTION SUMMARY
// ------------------------------------------------------------

let testExecution = [
    "PASS",
    "FAIL",
    "PASS",
    "BLOCKED",
    "FAIL",
    "PASS",
    "PASS"
];

// Using forEach():
//
// 1. Count PASS
// 2. Count FAIL
// 3. Count BLOCKED

let count_result_passed = 0;
let count_result_failed = 0;
let count_result_blocked = 0;
testExecution.forEach((val)=>{
          if(val == "PASS"){
              count_result_passed++;         
          }
          else if(val == "FAIL"){
              count_result_failed++;         
          }
          else if(val == "BLOCKED"){
              count_result_blocked++;
          }

})
console.log(`Q-21 PASS COUNT: ${count_result_passed++}`);
console.log(`Q-21 fail COUNT: ${count_result_failed++}`);
console.log(`Q-21 BLOCK COUNT:${count_result_blocked++}`);
// Expected:
//
// PASS: 4
// FAIL: 2
// BLOCKED: 1

