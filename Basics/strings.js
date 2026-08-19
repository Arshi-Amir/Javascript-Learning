// String Decalaration Ways

let str1 = "Hello World"; // Double Quotes

let name = new String("Joh Doe Laywer"); // String Object 
console.log(name);  // output will be in form of an object


//Method-1 ValueOf() 
//returns the primitive value of a String object
// inform of string data type
console.log(name.valueOf());  

//Method-2 trim()
// removes whitespace from both ends of a string
let trim = "   Hello World   ";
console.log(trim.trim());  

console.log(trim.trimStart());  
console.log(trim.trimEnd());
console.log(trim.trimLeft());  
console.log(trim.trimRight());

//Method-3 toUpperCase()
// converts a string to uppercase
let str2 = "my name";
console.log(str2.toUpperCase());

//Method-4 toLowerCase()
// converts a string to lowercase
let str3 = "MY NAME";
console.log(str3.toLowerCase());

//Method-5 toString()
// returns a string representing the specified object
console.log(name.toString()); 

//Method-6 substring()
//returns string and last index is not included
// treats negative index as 0
let subString = name.substring(0,5);
console.log(subString);

//Method-7 substr()
// first number in the parameter is starting index
//  and second number is length of string to be extracted
let substr2 = name.substr(2,3);
console.log(substr2);

//Method-8 startsWith() 
// checks whether a string starts with specified string/character
// returns a boolean value
let subMethod = name.startsWith("l");
console.log(subMethod);

//Method-8 endsWith() 
// checks whether a string ends with specified string/character
// returns a boolean value
let endMethod = name.endsWith("e");
console.log(endMethod);

//Method-9 split()
// splits a string into an array of substrings
let splitMethod = name.split(" ");
console.log(splitMethod);

//Method-10 slice()
// extracts a section of a string and returns it as a new string
// treats negative index as length of string 
let sliceMethod = name.slice(-2); // last two characters will be extracted
console.log(sliceMethod);
console.log(name.slice(1,5)); // first index is included and last index is not included

//Method-11 search()
// searches for a specified value in a string and returns the position of the match
let searchMethod = name.search(" ");
console.log(searchMethod);

//Method-12 replace()
// replaces a specified value with another value in a string
// replaces only the first occurrence of the specified value
let replaceMethod = name.replace(" "," replaced-text ");
console.log(replaceMethod);

//Method-13 replaceAll()
// replaces all occurrences of a specified value with another value in a string
let replaceAllMethod = name.replaceAll(" " , "replacesAllOccurences");
console.log(replaceAllMethod);

//Method-14 repeat()
// returns a new string with a specified number of copies of the original string
console.log(`Repeat this string 3 times: ${name.repeat(3)}`);

//Method-15 padStart()
// pads the current string with another string (multiple times, if needed) 
// until the resulting string reaches the given length
let padStartMethod = name.padStart(20,"*");
console.log(padStartMethod);

//Method-16 padEnd()
// pads the current string with another string (multiple times, if needed)
// until the resulting string reaches the given length
let padEndMethod = name.padEnd(20,"*");
console.log(padEndMethod);

//Method-17 lastIndexof()
// returns the position of the last occurrence of a specified value in a string
//index provided is the starting point for the search. search before this index
let matchMethod = name.lastIndexOf(" ");
console.log(matchMethod);

let name2 = "Checking the last index from the search point";
console.log(` Last occurrence of " " : ${name2.lastIndexOf(" ",30)}`);

//Method-17 Indexof()
// returns the position of the first occurrence of a specified value in a string
console.log(` Position of the first occurrence of "the": ${name2.indexOf("the")}`);
console.log(` Position of the first occurrence of "the" starting from index 15: ${name2.indexOf("the", 15)}`);

//Method-18 includes()
// checks if a string contains a specified value and returns true or false
console.log(` Does the string contain "the"? ${name2.includes("the")}`);

//Method-19 charAt()
// returns the character at a specified index in a string
console.log(` Character at index 10: ${name2.charAt(10)}`);

//Method-20 concat()
// concatenates two or more strings and returns a new string
console.log(`Concatenated string: ${name.concat(" ", name2)}`);



// ============================================================
// JAVASCRIPT STRING INTERVIEW PRACTICE
// ============================================================


// ------------------------------------------------------------
// Q1 — USERNAME NORMALIZATION
// ------------------------------------------------------------

let username = "   ADMIN_Asim_2026   ";

// 1. Remove unnecessary whitespace.
console.log(username.trim());

// 2. Convert the username to lowercase.
console.log(username.toLowerCase());
// 3. Check whether it starts with "admin".
console.log(`Checking if username starts with "admin": ${username.startsWith("admin")}`);

// 4. Check whether it ends with "2026".
console.log(`Checking if username ends with "2026": ${username.endsWith("2026")}`);

// 5. Find the position of the first underscore.
console.log(`Find the position of the first underscore: ${username.indexOf("_")}`);

// 6. Extract "admin".
console.log(username.substring(3 , 8));

// 7. Extract "asim".
console.log(username.substring(9 , 13));

// 8. Extract "2026".
console.log(username.substring(14 , 18));


// ------------------------------------------------------------
// Q2 — EMAIL ANALYSIS
// ------------------------------------------------------------

let email = "   Asim.Amir@Example.COM   ";

// 1. Clean the email.
console.log(email.trim());

// 2. Convert the email to lowercase.
console.log(email.trim().toLowerCase());

// 3. Check whether it contains "@". 
console.log(email.includes("@"));

// 4. Find the position of "@". 
console.log(email.indexOf("@"));

// 5. Extract the username portion.
console.log(email.substring(3,12));

// 6. Extract the domain portion.
console.log(email.substring(13,20));

// 7. Check whether the domain ends with ".com".
console.log(email.endsWith(".com"));


// ------------------------------------------------------------
// Q3 — API URL PARSING
// ------------------------------------------------------------

let url = "https://api.company.com/v2/users/profile";

// Extract:
//
// Protocol  → https
console.log(url.slice(0,5));

// Domain    → api.company.com
console.log(url.slice(8,23));

// Version   → v2
console.log(url.slice(24,26));

// Resource  → users
console.log(url.slice(27,32));

// Action    → profile
console.log(url.slice(33,40));

//
// Also:
// 1. Check whether the URL starts with "https://".
console.log(url.startsWith("https://"));

// 2. Check whether it ends with "profile".
console.log(url.endsWith("profile"));

// 3. Find the position of "users".
console.log(url.search("users"));


// ------------------------------------------------------------
// Q4 — STRING IMMUTABILITY
// ------------------------------------------------------------

let text = "   JAVASCRIPT   ";

// The developer wrote:
//
// text.trim();
// text.toLowerCase();
//
// console.log(text);
//
// The developer expects:
//
// "javascript"
//
// 1. Explain why this doesn't work. 
// Answer : because in strings it doesnt change the original string but returns a new string with the changes made.
//  So we need to assign the new string to a variable or reassign it to the same variable.


// 2. Correct the code.
console.log(text.trim().toLowerCase());

// 3. Do it without changing the original declaration directly.
console.log(text.trim().toLowerCase());


// ------------------------------------------------------------
// Q5 — replace() vs replaceAll()
// ------------------------------------------------------------

let message = "ERROR: ERROR: ERROR";

// 1. Replace the first "ERROR" with "WARNING".
console.log ( message.replace("ERROR", "WARNING"));

// 2. Replace every "ERROR" with "WARNING".
console.log ( message.replaceAll("ERROR", "WARNING"));

// 3. Explain the difference between the two approaches.
// replace() -- it will replace first occurrence only 
//replaceAll() -- it will replace all occurrence of instance


// ------------------------------------------------------------
// Q6 — FILE NAME ANALYSIS
// ------------------------------------------------------------

let fileName = "QA_Test_Report_2026.pdf";

// Determine:
//
// 1. Does it start with "QA"?
console.log(`Does it start with "QA"? ${fileName.startsWith("QA")}`);

// 2. Does it end with ".pdf"?
console.log(`Does it end with ".pdf"? ${fileName.endsWith(".pdf")}`);

// 3. Find the position of the first underscore.
console.log(`Find the position of the first underscore : ${fileName.indexOf("_")}`);

// 4. Find the position of ".pdf".`
console.log(`Find the position of ".pdf" : ${fileName.indexOf(".pdf")}`);

// 5. Extract "QA".
console.log(fileName.slice(0,2));

// 6. Extract "Test".
console.log(fileName.slice(3,7));

// 7. Extract "Report".
console.log(fileName.slice(8,14));

// 8. Extract "2026".
console.log(fileName.slice(15,19));

// 9. Extract the extension.
console.log(fileName.slice(20,23));



// ------------------------------------------------------------
// Q7 — TRANSACTION ID
// ------------------------------------------------------------

let transaction = "TXN-PAK-2026-000458";

// Extract:
//
// Type       → TXN
// Country    → PAK
// Year       → 2026
// Number     → 000458
//
// IMPORTANT:
// Do NOT use split().
//
// You must determine the positions of the delimiters yourself.
console.log(transaction.substring(0,3));
console.log(transaction.substring(4,7));
console.log(transaction.substring(8,12));
console.log(transaction.substring(13,19));


// ------------------------------------------------------------
// Q8 — CARD NUMBER MASKING
// ------------------------------------------------------------

let card = "4532-7812-9087-1234";

// Convert it into:
//
// "****-****-****-1234"
//
// Requirements:
// - Do not use arrays.
// - Do not use loops.
// - Keep the last four characters visible.
let sliceCard = card.slice(-4);
console.log(sliceCard);
console.log(sliceCard.padStart(14,"*"));
console.log( `****-****-****-${sliceCard}`); //for reserving hyphen


// ------------------------------------------------------------
// Q9 — API RESPONSE VALIDATION
// ------------------------------------------------------------

let response = "SUCCESS: User account created successfully";

// Determine:
//
// 1. Does the response start with "SUCCESS"?
console.log(response.startsWith("SUCCESS"));

// 2. Does it contain "User"?
console.log(response.includes("User"));

// 3. Does it contain "account"?
console.log(response.includes("account"));

// 4. Does it end with "successfully"?
console.log(response.endsWith("successfully"));

// 5. Find the position of "User".
console.log(response.search("User"));
console.log(response.indexOf("User"));


// 6. Extract "User account".
console.log(response.slice(9,21));

// 7. Replace "created" with "updated".
console.log(response.replace("created","updated"));

//
// Expected final message:
//
// "SUCCESS: User account updated successfully"


// ------------------------------------------------------------
// Q10 — STRING SEARCH EDGE CASE
// ------------------------------------------------------------

let language = "JavaScript";

// Predict the output BEFORE running the code:
//
console.log(language.indexOf("Java"));   // ==>-1
console.log(language.indexOf("Script")); // ==>4
console.log(language.indexOf("script")); // ==>-1
console.log(language.indexOf("Python")); //==>-1


// ------------------------------------------------------------
// Q12 — slice() vs substring()
// ------------------------------------------------------------

let word = "JavaScript";

console.log(word.slice(0, 4)); 
console.log(word.substring(0, 4));
console.log(word.slice(-6));
console.log(word.substring(-6)); // it wont take negative values


// ------------------------------------------------------------
// Q13 — NEGATIVE INDEXES
// ------------------------------------------------------------

let testing = "Testing";

// Predict:
//
console.log(testing.slice(-1));
console.log(testing.slice(-3));
console.log(testing.slice(1, -1));
//
// Explain what the negative indexes are doing.


// ------------------------------------------------------------
// Q14 — USER INPUT NORMALIZATION
// ------------------------------------------------------------

let input = "   JavaScript IS AWESOME   ";

// Produce:
//
// "javascript is amazing"
//
// Requirements:
// 1. Remove unnecessary whitespace.
console.log(input.trim());

// 2. Convert the text to lowercase.
console.log(input.trim().toLowerCase());

// 3. Replace "awesome" with "amazing".
console.log(input.trim().toLowerCase().replace("awesome","amazing"));


// ------------------------------------------------------------
// Q15 — PRODUCT CODE
// ------------------------------------------------------------

let productCode = "LAPTOP-DELL-2026-PRO";

// Extract:
//
// Category → LAPTOP
// Brand    → DELL
// Year     → 2026
// Edition  → PRO
//
// Also check:
//
// 1. Does it start with "LAPTOP"?
console.log(productCode.startsWith("LAPTOP"));

// 2. Does it end with "PRO"?
console.log(productCode.endsWith("PRO"));

// 3. Does it contain "2026"?
console.log(productCode.includes("2026"));


// ------------------------------------------------------------
// Q16 — LOGIN LOG
// ------------------------------------------------------------

let loginMessage =
    "  Login Successful for user: ASIM_AMIR  ";

// 1. Remove unnecessary whitespace.
console.log(loginMessage.trim());

// 2. Check whether it contains "Login Successful".
console.log(loginMessage.includes("Login Successful"));

// 3. Find the position of the username.
console.log(loginMessage.search("ASIM_AMIR"));
console.log(loginMessage.indexOf("ASIM_AMIR"));


// 4. Extract "ASIM_AMIR".
console.log(loginMessage.slice(29, 39));

// 5. Convert the username to lowercase.
console.log(loginMessage.slice(29, 39).toLowerCase());

// 6. Check whether the username starts with "asim".
console.log(loginMessage.slice(29, 39).toLowerCase().startsWith("asim"));

// 7. Replace "Login Successful" with
//    "Authentication Successful".
console.log(loginMessage.replace("Login Successful", "Authentication Successful"));


// ------------------------------------------------------------
// Q17 — SENSITIVE DATA
// ------------------------------------------------------------

let logData =
    "User Asim logged in with password=JavaScript123";

// Convert it into:
//
// "User Asim logged in with password=********"
console.log(logData.replace("JavaScript123","********"));
