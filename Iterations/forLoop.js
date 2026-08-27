// ============================================================
// FOR LOOP — SDET INTERVIEW PRACTICE
// ============================================================


// ============================================================
// Q1 — FIND FAILED TEST CASES
// ============================================================

let testResults = [
    "PASS",
    "PASS",
    "FAIL",
    "PASS",
    "FAIL",
    "PASS"
];

// Using a for loop:
// 1. Find how many test cases FAILED.
// 2. Print the index of every failed test case.
let count = 0;
for (let index = 0 ; index < testResults.length ; index++){
       if(testResults[index] == "FAIL"){         
             count = count + 1  
             console.log(`Failed at index: ${index}`);
                                  
       }
 }
console.log(`Failed Test Cases: ${count}`)

// Expected:
// Failed Test Cases: 2
// Failed at index: 2
// Failed at index: 4



// ============================================================
// Q2 — FIND SLOW API RESPONSES
// ============================================================
let responseTimes = [
    120,
    450,
    890,
    210,
    1500,
    320,
    1100
];

// Anything above 1000 ms is considered SLOW.

// Using a for loop:
// 1. Find how many APIs are slow.
// 2. Print the response time of every slow API.

let slow_count = 0;
for (let index = 0; index < responseTimes.length ; index++) {
    if(responseTimes[index] > 1000 )
    {
        slow_count = slow_count + 1;
        // Print the response time of every slow API
        console.log(`${responseTimes[index]} ms`)
    }
}
console.log(`Slow APIs: ${slow_count}`);

// Expected:
// Slow APIs: 2
// 1500 ms
// 1100 ms



// ============================================================
// Q3 — FIND DUPLICATE TEST CASE IDs
// ============================================================

let testCases = [
    "TC101",
    "TC102",
    "TC103",
    "TC101",
    "TC104",
    "TC102",
    "TC105"
];

// Using for loops:
// 1. Find duplicate test case IDs.
// 2. Print each duplicate only ONCE.
for (let index = 0; index < testCases.length; index++) {   
          for (let inner = index+1 ; inner < testCases.length; inner++){
                    if(testCases[index] == testCases[inner]){
                          console.log("Duplicate Test Cases: ", testCases[inner]); 
                    }                              
          }  
}

// Expected:
// Duplicate Test Cases:
// TC101
// TC102



// ============================================================
// Q4 — FIND FIRST FAILED TEST AND STOP
// ============================================================

let execution = [
    "PASS",
    "PASS",
    "PASS",
    "FAIL",
    "PASS",
    "FAIL"
];

// Using a for loop:
// 1. Find the FIRST "FAIL".
// 2. Print its index.
// 3. Stop the loop once the first failure is found.

for (let index = 0; index < execution.length; index++) {
       if(execution[index] == "FAIL"){
             console.log(`First failure found at index: ${index}`);  
           break;
        }
}

// Expected:
// First failure found at index: 3


// Using continue keyword

let arr = [1,2,3,4,5,6,7,8,9,10];
for (let index = 0; index < arr.length; index++) {
    console.log(arr[index]);
    if(arr[index] == 5){
        console.log("This is working");
        continue
    }   
}