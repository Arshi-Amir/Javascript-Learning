// ============================================================
// SDET JAVASCRIPT — TECHNICAL INTERVIEW PRACTICE
// ============================================================
//
// Topics Covered:
//
// 1. Loops
// 2. Strings
// 3. Arrays
// 4. Objects
// 5. for...of
// 6. for...in
// 7. forEach()
// 8. map()
// 9. filter()
// 10. reduce()
// 11. Mixed / SDET-style problems
//
// Difficulty:
// 🟢 Easy
// 🟡 Medium
// 🟠 Advanced
// 🔴 Interview Challenge
//
// RULE:
// Try to solve each problem WITHOUT using:
// - sort() unless specifically allowed
// - reverse() unless specifically allowed
// - Set() unless specifically allowed
// - built-in shortcuts that directly solve the problem
//
// ============================================================



// ============================================================
// 🟢 SECTION 1 — LOOPS
// ============================================================


// Q1 — PRINT NUMBERS
// ------------------------------------------------------------

let numbers1 = [10, 20, 30, 40, 50];

// Print each number using a for loop.
console.log("Q1 — PRINT NUMBERS");
for (let index = 0; index < numbers1.length; index++) {
    console.log(numbers1[index]);    
}



// Q2 — PRINT EVEN NUMBERS
// ------------------------------------------------------------

let numbers2 = [10, 15, 22, 31, 40, 55, 60];

// Print only even numbers using a loop.
console.log("Q2 — PRINT EVEN NUMBERS");
for (let index = 0; index < numbers2.length; index++) {
    if(numbers2[index]%2 === 0){
            console.log(numbers2[index]); 
    }
}



// Q3 — SUM OF NUMBERS
// ------------------------------------------------------------

let numbers3 = [10, 20, 30, 40, 50];

// Find the sum using a loop.
console.log("Q3 — SUM OF NUMBERS");
let sum_num3 = 0;
for (let index = 0; index < numbers3.length; index++) {
    sum_num3 = sum_num3 + numbers3[index];
}
console.log(sum_num3);



// Q4 — COUNT NUMBERS GREATER THAN 50
// ------------------------------------------------------------

let numbers4 = [25, 60, 45, 90, 12, 75, 33];

// Count how many numbers are greater than 50.
console.log("Q4 — COUNT NUMBERS GREATER THAN 50");
let count_num4 = 0;
for (let index = 0; index < numbers4.length; index++) {
    if(numbers4[index] > 50){
    count_num4 = count_num4 + 1;
    }
}
console.log(count_num4);



// Q5 — FIND LARGEST NUMBER
// ------------------------------------------------------------

let numbers5 = [45, 78, 23, 91, 56, 88];

// Find the largest number without using Math.max().
console.log("Q5 — FIND LARGEST NUMBER");
let largestNum = numbers5[0];
for (let index = 0; index < numbers5.length; index++) {
    if(numbers5[index] > largestNum){
           largestNum = numbers5[index]
    }
    
}
console.log(largestNum);



// Q6 — FIND SMALLEST NUMBER
// ------------------------------------------------------------

let numbers6 = [45, 78, 23, 91, 56, 88];

// Find the smallest number without using Math.min().
console.log("Q6 — FIND SMALLEST NUMBER");
let smallestNum = numbers6[0];
for (let index = 0; index < numbers6.length; index++) {
    if(numbers6[index] < smallestNum){
           smallestNum = numbers6[index]
    }
    
}
console.log(smallestNum);



// Q7 — REVERSE ARRAY
// ------------------------------------------------------------

let numbers7 = [10, 20, 30, 40, 50];

// Reverse the array using a loop.
// Do not use reverse().
console.log("Q7 — REVERSE ARRAY");
let reverseArr = [];
for (let index = numbers7.length-1 ; index >= 0 ; index--) {
    
    reverseArr.push(numbers7[index]);
}
console.log(reverseArr);



// Q8 — COUNT DUPLICATE NUMBER
// ------------------------------------------------------------

let numbers8 = [10, 20, 10, 30, 10, 40, 20];

// Count how many times 10 appears.
console.log("Q8 — COUNT DUPLICATE NUMBER");
let count_ten = 0;
for (let index = 0; index < numbers8.length; index++) {
    if(numbers8[index] === 10){
    count_ten = count_ten + 1;
    }
}
console.log(count_ten);



// Q9 — ARRAY ROTATION
// ------------------------------------------------------------

let numbers9 = [1, 2, 3, 4, 5];

// Move the first element to the end.
//
// Expected:
// [2, 3, 4, 5, 1]
console.log("Q9 — ARRAY ROTATION");
let first_element = numbers9.shift();
numbers9.push(first_element)
console.log(numbers9);



// Q10 — MULTIPLY EACH NUMBER
// ------------------------------------------------------------

let numbers10 = [2, 4, 6, 8];

// Create a new array where every number is multiplied by 3.
console.log("Q10 — MULTIPLY EACH NUMBER");
let new_Arr_Multiply=[];
for (let index = 0; index < numbers10.length; index++) {
       new_Arr_Multiply .push(numbers10[index] * 3);   
}
console.log(new_Arr_Multiply);


