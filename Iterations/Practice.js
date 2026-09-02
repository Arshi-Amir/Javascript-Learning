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




// ============================================================
// 🟢 SECTION 2 — STRING BASICS
// ============================================================


// Q11 — REVERSE STRING
// ------------------------------------------------------------

let text11 = "SDET";

// Reverse the string without using reverse().
//
// Expected:
// "TEDS"
//Method 1
console.log("Q11 — REVERSE STRING");
let reverse_str ="";
for (let index = text11.length -1 ; index >= 0 ; index -- ) {
     reverse_str = reverse_str+ text11[index]  
}
console.log(reverse_str);

//Method 2
//Using reverse
// console.log("Reverse");
// let reverse_str =  text11.split("").reverse().join("") 
// console.log(reverse_str );



// Q12 — COUNT CHARACTERS
// ------------------------------------------------------------

let text12 = "automation";
// Count the total number of characters.
console.log("Q12 — COUNT CHARACTERS");
console.log( text12.length);



// Q13 — COUNT VOWELS
// ------------------------------------------------------------

let text13 = "automation";

// Count how many vowels are present.

// Vowels:
// a, e, i, o, u
console.log("Q13 — COUNT VOWELS");
let count_vowel = 0;
for (let i = 0; i < text13.length; i++) {
    if(text13[i] === 'a' || text13[i] === 'e'|| text13[i] === 'i'|| text13[i] === 'o'|| text13[i] === 'u'){
          count_vowel = count_vowel  + 1;
    }  
}
console.log(`Count how many vowels are present : ${count_vowel}`);



// Q14 — COUNT CONSONANTS
// ------------------------------------------------------------

let text14 = "automation";

// Count the number of consonants.
console.log("Q14 — COUNT CONSONANTS");
let count_consonant = 0;
for (let i = 0; i < text14.length; i++) {
    if(text14[i] === 'a' || text14[i] === 'e'|| text14[i] === 'i'|| text14[i] === 'o'|| text14[i] === 'u'){
          continue;
    }  
    else{
        count_consonant = count_consonant  + 1;
    }
}
console.log(`Count the number of consonants : ${count_consonant}`);



// Q15 — FIND CHARACTER
// ------------------------------------------------------------

let text15 = "JavaScript";

// Find the first occurrence/index of "S".
console.log("Q15 — FIND CHARACTER");
console.log(`Find the first occurrence/index of "S" :`,text15.indexOf('S'))



// Q16 — COUNT CHARACTER
// ------------------------------------------------------------

let text16 = "javascript";

// Count how many times "a" appears.
console.log("Q16 — COUNT CHARACTER");
let count_a = 0;
for (let i = 0; i < text16.length; i++) {
       if(text16[i] === 'a'){
          count_a = count_a + 1;
       } 
}
console.log(`Count how many times "a" appears: `, count_a);



// Q17 — REMOVE SPACES
// ------------------------------------------------------------
let text17 = "SDET Automation Engineer";

// Remove all spaces.
console.log("Q17 — REMOVE SPACES");

//Method 1
//console.log(text17.replaceAll(" ",""));

//Method 2
let remove_space="";
for (let i = 0; i < text17.length ; i++) {
     if(text17[i] === " "){
        continue
     }
     else{
         remove_space = remove_space + text17[i];
     }   
}
console.log(remove_space);



// Q18 — CHECK PALINDROME
// ------------------------------------------------------------

let text18 = "madam";
// Check whether the string is a palindrome.
console.log("Q18 — CHECK PALINDROME");
console.log(text18.length);

for (let j = 0; j < text18.length; j++) {    
     if(text18[j] == text18[(text18.length-1) - j ]){
        console.log(`value of j : ${text18[j]} and value from last index:  ${ text18[(text18.length-1) - j ]} `);    
        console.log(true)
     }  
}    
// Expected:
// true



// Q19 — COUNT CHARACTERS BEFORE @
// ------------------------------------------------------------

let email19 = "tester@gmail.com";

// Count how many characters appear before "@".
console.log("Q19 — COUNT CHARACTERS BEFORE @");
let count_char = 0;
for (let i = 0; i < email19.length; i++) {
       if(email19[i] === '@'){
          break;
       } 
       else{
        count_char = count_char + 1;
       }
}
console.log(`Count how many characters appear before "@":`, count_char);
// Expected:
// 6



// Q20 — EXTRACT EMAIL DOMAIN
// ------------------------------------------------------------

let email20 = "tester@gmail.com";

// Extract:
//
// gmail.com
console.log("Q20 — EXTRACT EMAIL DOMAIN");
let atIndex = email20.indexOf("@");

console.log(email20.slice(atIndex + 1));