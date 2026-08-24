// Arrays  - Non premitive data type
// resizable 

let number = [1,2,3,4,5,6,7,8,9,10];

console.log(`Printing Array ${number}`);

console.log(`Finding Value at given Index : ${number[5]}`); // find value in array using index

// includes()
// find particular value and return boolean
console.log (`Checking Existence of Number in Array : ${number.includes(0)}`); 

//indexOf()
// find position of element
console.log(`Finding Position of Element: ${number.indexOf(10)}`); 

//push()
number.push("Pushed to Array" , "push2");
console.log(`New Array After Push : ${number}`);

//pop()
number.pop();
console.log(`New Array After Pop : ${number}`);

//unshift()
number.unshift("shift add 1");
console.log(`New Array After unshift Operation : ${number}`);

//shift()
number.shift();
console.log(`New Array After shift Operation : ${number}`);

//join()
// it will return array in form of string
console.log(number.join()); 

//length()
// returns length starting from 1
console.log(number.length); 

//slice()
// array is not changed when slice operation is performed
console.log(number.slice(1,4));
console.log ("A: " + number); 

//splice()
// array is changed when splice operation is performed. It will divide array
console.log(number.splice(1,4)); 
console.log ("B: " + number);  


//Placing 2 arrays in one
let fruits = ['apple','banana','orange','mango'];
let veges = ["spinach","tomato","bringle","cabbage","cauliflower"];

fruits.push(veges);
console.log(fruits); // it will be shown in form of array

//concat ()
// it will combine 2 arrays
//  but doesnt change original array so need to store in new variable
let fruits_1 = ['apple','banana','orange','mango'];
let veges_2 = ["spinach","tomato","bringle","cabbage","cauliflower"];
let concatArray = fruits_1.concat(veges_2);
console.log(concatArray);

// spread Operator 
// it will combine 2 arrays
let spreadOperator = [...fruits,...number,...concatArray];
console.log(spreadOperator);

//flat()
//it will return single array removing all arrays within
let roughArray = [1,2,3,[3,4,5],6,7,8,[1,2,[3,4]]];
console.log(roughArray.flat(Infinity));

//isArray()
//it will tell whether it is array of not
console.log(Array.isArray(roughArray));

//from()
//convert values to array
let myName = "Arshi";
console.log(Array.from(myName));

//of()
//return new Array
let score1 = 100;
let score2 = 200;
let score3 = 500;
console.log(Array.of(score1,score2,score3));



// ============================================================
// JAVASCRIPT ARRAY — INTERVIEW PRACTICE
// ============================================================


// ============================================================
// SECTION 1 — ARRAY ACCESS & INDEXING
// ============================================================


// Q1 — SERVER MANAGEMENT
// ------------------------------------------------------------

let servers = [
    "server-01",
    "server-02",
    "server-03",
    "server-04",
    "server-05"
];

// Get:
// 1. First server
console.log(servers[0]);

// 2. Last server
console.log(servers[servers.length-1]);

// 3. Third server
console.log(servers[2]);

// 4. Second-last server
console.log(servers[servers.length-2]);

// 5. Total number of servers
console.log(servers.length);



// Q2 — TEST CASE MANAGEMENT
// ------------------------------------------------------------

let testCases = [
    "TC001",
    "TC002",
    "TC003",
    "TC004",
    "TC005"
];

// Get:
// 1. First test case
console.log(testCases[0]);

// 2. Middle test case
console.log(testCases[(testCases.length -1)/2]);

// 3. Last test case
console.log(testCases[testCases.length-1]);



// Q3 — API RECORDS
// ------------------------------------------------------------

let records = [
    "REC-101",
    "REC-102",
    "REC-103",
    "REC-104",
    "REC-105",
    "REC-106"
];

// Extract the last 3 records.
console.log(records.slice(3,6));

//
// Expected:
// ["REC-104", "REC-105", "REC-106"]



// Q4 — DATA WINDOW
// ------------------------------------------------------------

let data = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G"
];

// Extract:
// ["C", "D", "E", "F"]
console.log(data.slice(2,6));



// ============================================================
// SECTION 2 — ADDING AND REMOVING DATA
// ============================================================


// Q5 — TEST CASE ADDITION
// ------------------------------------------------------------

let tests = [
    "TC001",
    "TC002",
    "TC003"
];

// Add "TC004" to the end.
tests.push( "TC004")
console.log(tests);
//
// Add "TC000" to the beginning.

tests.unshift( "TC000")
console.log(tests);

// Expected:
// ["TC000", "TC001", "TC002", "TC003", "TC004"]



// Q6 — TEST CASE REMOVAL
// ------------------------------------------------------------

let tests2 = [
    "TC001",
    "TC002",
    "TC003",
    "TC004"
];

// Remove the last test case.
tests2.pop();
console.log(tests2);

// Then remove the first test case.
tests2.shift();
console.log(tests2);

// Expected:
// ["TC002", "TC003"]


// Q7 — REMOVE SPECIFIC TEST CASE
// ------------------------------------------------------------

let testData = [
    "TC001",
    "TC002",
    "TC003",
    "TC004",
    "TC005"
];

let removeTest = "TC003";

// Remove removeTest.
// let a1 = testData.slice(0,2);
// let a2 = testData.slice(3);
// let combine = [...a1,...a2];
// console.log("Combine "+ combine);

//second approach
// let divide_Array = testData.splice(0,2);
// testData.shift();
// console.log([...divide_Array,...testData]);

// robust approach
let position = testData.indexOf(removeTest);
console.log([...testData.slice(0,position),...testData.slice(position+1)]);

// Expected:
// ["TC001", "TC002", "TC004", "TC005"]



// Q8 — INSERT BUG
// ------------------------------------------------------------

let bugs = [
    "BUG-101",
    "BUG-102",
    "BUG-104",
    "BUG-105"
];

// Insert "BUG-103" between "BUG-102" and "BUG-104".
let bug2_Position= bugs.indexOf("BUG-102");

let bug_Splice= bugs.slice(0,bug2_Position+1);
console.log(bug_Splice);

bug_Splice.push("BUG-103");

let bug_Splice_2= bugs.slice(bug2_Position+1);
console.log(bug_Splice_2);

console.log([...bug_Splice,...bug_Splice_2]);
//
// Expected:
//
// [
//     "BUG-101",
//     "BUG-102",
//     "BUG-103",
//     "BUG-104",
//     "BUG-105"
// ]



// ============================================================
// SECTION 3 — ARRAY SEARCHING
// ============================================================


// Q9 — API PERMISSIONS
// ------------------------------------------------------------

let permissions = [
    "read",
    "write",
    "delete",
    "export"
];

// Find the position of "delete".
console.log(permissions.indexOf("delete"));

// Find the position of "export".
console.log(permissions.indexOf("export"));

// Determine whether "admin" exists.
console.log(permissions.includes("admin"));

// Determine whether "read" exists.
console.log(permissions.includes("read"));



// Q10 — FAILED TESTS
// ------------------------------------------------------------

let results = [
    "PASS",
    "PASS",
    "FAIL",
    "PASS",
    "FAIL"
];

// Find the position of the first "FAIL".
console.log(results.indexOf("FAIL"));

// Find the position of the first "PASS".
console.log(results.indexOf("PASS"));

// Determine whether "BLOCKED" exists.
console.log(results.includes("BLOCKED"));



// Q11 — DUPLICATE RECORD
// ------------------------------------------------------------

let records2 = [
    "REC-001",
    "REC-002",
    "REC-003",
    "REC-002",
    "REC-004"
];

// Find the first position of "REC-002".
console.log(records2.indexOf("REC-002"));

// Find the last position of "REC-002".
console.log(records2.lastIndexOf("REC-002"));



// Q12 — USER SEARCH
// ------------------------------------------------------------

let users = [
    "Asim",
    "Ali",
    "Sara",
    "John",
    "David"
];

// Determine whether "Sara" exists.
console.log(users.includes("Sara"));

// Determine whether "Michael" exists.
console.log(users.includes("Michael"));

// Find the position of "John".
console.log(users.indexOf("John"));



// ============================================================
// SECTION 4 — STRING + ARRAY DATA
// ============================================================


// Q13 — CLEAN USERNAMES
// ------------------------------------------------------------

let usernames = [
    "  ASIM  ",
    " ALI",
    "SARA ",
    "  JOHN"
];

// Clean all four usernames.
//since trim() is not updating the orignal array so need to restore back for getting proper result
usernames[0] = usernames[0].trim();
usernames[1] = usernames[1].trim();
usernames[2] = usernames[2].trim();
usernames[3] = usernames[3].trim();
console.log(usernames);

//
// Convert all four to lowercase.
usernames[0] = usernames[0].trim().toLowerCase();
usernames[1] = usernames[1].trim().toLowerCase();
usernames[2] = usernames[2].trim().toLowerCase();
usernames[3] = usernames[3].trim().toLowerCase();
console.log(usernames);

// Expected:
//
// [
//     "asim",
//     "ali",
//     "sara",
//     "john"
// ]



// Q14 — EMAIL DATA
// ------------------------------------------------------------

let emails = [
    "asim@gmail.com",
    "ali@yahoo.com",
    "sara@gmail.com",
    "john@hotmail.com"
];

// Find the position of "sara@gmail.com".
console.log(emails.indexOf("sara@gmail.com"));

// Determine whether "asim@gmail.com" exists.
console.log(emails.includes("asim@gmail.com"));

// Get the last email.
console.log(emails[emails.length-1]);

// Extract the domain from "sara@gmail.com".
let myDomain = emails[emails.indexOf("sara@gmail.com")].slice(5);
console.log(myDomain);

// Expected domain:
// "gmail.com"



// Q15 — API STATUS DATA
// ------------------------------------------------------------

let statuses = [
    " SUCCESS ",
    "FAILED",
    " SUCCESS",
    "PENDING "
];

// Clean all status values.
statuses[0] = statuses[0].trim();
statuses[1] = statuses[1].trim();
statuses[2] = statuses[2].trim();
statuses[3] = statuses[3].trim();
console.log(statuses);


// Determine whether the resulting data contains:
//
// "SUCCESS"
// "FAILED"
// "PENDING"
console.log(statuses.includes("SUCCESS")); // includes doesnt verify multiple values in single call
console.log(statuses.includes("FAILED"));
console.log(statuses.includes("PENDING"));




// Q16 — CARD DATA
// ------------------------------------------------------------

let cards = [
    "4532123412345678",
    "5212345678901234",
    "6011122233334444"
];

// Convert each card value into the following format:
//
// "****-****-****-5678"
// "****-****-****-1234"
// "****-****-****-4444"

cards[0] = cards[0].slice(-4).padStart(19,"****-****-****-");
cards[1] = cards[1].slice(-4).padStart(19,"****-****-****-");
cards[2] = cards[2].slice(-4).padStart(19,"****-****-****-");
console.log(cards);



// ============================================================
// SECTION 5 — QA / API REAL-WORLD SCENARIOS
// ============================================================


// Q17 — FAILED ENDPOINTS
// ------------------------------------------------------------

let endpoints = [
    "/api/login",
    "/api/users",
    "/api/orders",
    "/api/products"
];

let failedEndpoints = [
    "/api/login",
    "/api/orders"
];

// Find the position of "/api/orders"
// inside failedEndpoints.
console.log(failedEndpoints.indexOf("/api/orders"));

// Remove "/api/orders".
// failedEndpoints.pop();
// console.log(failedEndpoints);

let position_1 = failedEndpoints.indexOf("/api/orders");
failedEndpoints.splice(position_1,1);
console.log(failedEndpoints);

// Expected:
// ["/api/login"]



// Q18 — TEST EXECUTION
// ------------------------------------------------------------

let execution = [
    "PASS",
    "FAIL",
    "PASS",
    "BLOCKED",
    "PASS"
];

// Find the position of "FAIL".
console.log(execution.indexOf("FAIL"));

// Find the position of "BLOCKED".
console.log(execution.indexOf("BLOCKED"));

// Remove "BLOCKED".
let block_remove = execution.indexOf("BLOCKED");
execution.splice(block_remove,1);
console.log(execution);
//
// Expected:
//
// ["PASS", "FAIL", "PASS", "PASS"]



// Q19 — PRIORITY BUGS
// ------------------------------------------------------------

let priorities = [
    "LOW",
    "MEDIUM",
    "HIGH",
    "CRITICAL"
];

// Find the position of "HIGH".
console.log(`Find the position of High : ${priorities.indexOf("HIGH")}`);

// Find the position of "CRITICAL".
console.log(`Find the position of "CRITICAL" : ${priorities.indexOf("CRITICAL")}`);

// Add "BLOCKER" after "CRITICAL".
let position_critical =priorities.indexOf("CRITICAL");
priorities.splice(position_critical+1,0,"BLOCKER");
console.log(priorities);



// Q20 — BROWSER TABS
// ------------------------------------------------------------

let tabs = [
    "Google",
    "GitHub",
    "Jira",
    "Swagger",
    "Postman"
];

// Remove "Jira".
let jira = tabs.indexOf("Jira");
tabs.splice(jira,1);
console.log("Removed jira")
console.log(tabs);

// Add "ChatGPT" to the end.
tabs.push("ChatGPT");
console.log("Add ChatGPT to the end")
console.log(tabs);

// Move "Postman" to the beginning.
let postman = tabs.indexOf("Postman");
tabs.splice(postman,1);
tabs.unshift("Postman");
console.log("Move Postman to the beginning");
console.log(tabs);
// Expected:
//
// [
//     "Postman",
//     "Google",
//     "GitHub",
//     "Swagger",
//     "ChatGPT"
// ]



// ============================================================
// SECTION 6 — SLICE / SPLICE / ARRAY TRANSFORMATION
// ============================================================


// Q21 — PAGINATION
// ------------------------------------------------------------

let apiRecords = [
    "R1",
    "R2",
    "R3",
    "R4",
    "R5",
    "R6",
    "R7",
    "R8",
    "R9"
];

// Create:
//
// page1 = ["R1", "R2", "R3"]
let page1 = apiRecords.slice(0,3);
console.log("Page 1");
console.log(page1);

// page2 = ["R4", "R5", "R6"]
let page2 = apiRecords.slice(3,6);
console.log("Page 2");
console.log(page2);

// page3 = ["R7", "R8", "R9"]
let page3 = apiRecords.slice(6);
console.log("Page 3");
console.log(page3);



// Q22 — API BATCH
// ------------------------------------------------------------

let batch = [
    "REQ-001",
    "REQ-002",
    "REQ-003",
    "REQ-004",
    "REQ-005",
    "REQ-006"
];

// Create:
//
// successful = ["REQ-001", "REQ-002", "REQ-003"]
let success = batch.slice(0,3);
console.log("successful batch");
console.log(success);

// pending = ["REQ-004", "REQ-005", "REQ-006"]
let pending = batch.slice(3);
console.log("pending batch");
console.log(pending);

// The original array should remain unchanged.
console.log("Orignal batch");
console.log(batch);



// Q23 — REMOVE MIDDLE RECORD
// ------------------------------------------------------------

let databaseRecords = [
    "R1",
    "R2",
    "R3",
    "R4",
    "R5"
];

// Remove "R3".
let middle_position = databaseRecords.indexOf("R3");
databaseRecords.splice(middle_position,1);
console.log("Remove r3")
console.log(databaseRecords);
// Expected:
// ["R1", "R2", "R4", "R5"]



// Q24 — REMOVE FIRST AND LAST
// ------------------------------------------------------------

let values = [
    10,
    20,
    30,
    40,
    50
];

// Create a new array:
// [20, 30, 40]
let new_arr_values = values.slice(1,4);
console.log("new array")
console.log(new_arr_values);

console.log("Orignal unchanged array")
console.log(values);
// The original array must remain unchanged.



// Q25 — LAST TWO RECORDS
// ------------------------------------------------------------

let records3 = [
    "R1",
    "R2",
    "R3",
    "R4",
    "R5"
];

// Extract:
//
// ["R4", "R5"]
let r4_index = records3.indexOf("R4");
let new_Arr = records3.slice(r4_index,r4_index+2);
console.log("Extract last 2 records");
console.log(new_Arr);

// let r5_index = records3.indexOf("R5");
// let new_Arr_1 = records3.splice(r5_index,1);
// console.log("New array of R4 and R5");
// console.log([...new_Arr,...new_Arr_1]);

// Your solution should work if additional records
// are added to the array.



// ============================================================
// SECTION 7 — ARRAY MUTATION
// ============================================================

// Q26 — QUEUE
// ------------------------------------------------------------

let queue = [
    "User-A",
    "User-B",
    "User-C"
];

// Add "Admin" to the beginning.
queue.splice(0,0,"Admin");
console.log("Add Admin to the beginning:");
console.log(queue)

// Remove the first user.
// Store the removed user in a variable.
// Print:
let first_removedUser = queue.splice(1,1);
console.log(first_removedUser);

// Updated queue
console.log("Updated queue");
console.log(queue);



// Q27 — RECENT ORDERS
// ------------------------------------------------------------
let orders = [
    "ORD-001",
    "ORD-002",
    "ORD-003",
    "ORD-004"
];

// Remove the most recent order.
let removed_Order = orders.pop();
console.log(`After removing the most recent order: ${orders}`);

// Store the removed order in a variable.
// Print:
 console.log(`Removed order: ${removed_Order}`);

// Remaining orders
console.log(`Remaining orders: ${orders}`);



// Q28 — ARRAY ROTATION
// ------------------------------------------------------------

let rotation = [
    1,
    2,
    3,
    4,
    5
];

// Rotate the array one position to the right.
let remove_five = rotation.splice((rotation.length)-1);
rotation.unshift(...remove_five)
console.log(rotation);
console.log(`Rotate the array one position to the right: ${rotation}`);

// Expected:
// [5, 1, 2, 3, 4]



// Q29 — ARRAY ROTATION
// ------------------------------------------------------------

let rotation2 = [
    1,
    2,
    3,
    4,
    5
];

// Rotate the array two positions to the right.
let splice_element = rotation2.splice((rotation2.length)-2);
console.log(`Rotation 2 after splice: ${rotation2}`);

rotation2.unshift(...splice_element); //very imp need to do it like this if I simply place without spear operator it will be array inside array which is wrong
console.log(rotation2);
console.log(`Rotation 2 after adding elements to right position: ${rotation2}`);

// Expected:
//
// [4, 5, 1, 2, 3]



// Q30 — MOVE ELEMENT
// ------------------------------------------------------------

let testFlow = [
    "Login",
    "Search",
    "Checkout",
    "Payment"
];

// Move "Payment" to the beginning.
let find_payment = testFlow.indexOf("Payment");
testFlow.splice(find_payment,1);
testFlow.unshift("Payment")
console.log(`Moving Payment to start: ${testFlow}`);

// Expected:
//
// [
//     "Payment",
//     "Login",
//     "Search",
//     "Checkout"
// ]




// ============================================================
// SECTION 8 — ARRAY COMBINATION
// ============================================================

// Q31 — MERGE API RESPONSES
// ------------------------------------------------------------

let response1 = [
    "USER-001",
    "USER-002"
];

let response2 = [
    "USER-003",
    "USER-004"
];

// Create a new array containing all users.
//
// Expected:
//
// [
//     "USER-001",
//     "USER-002",
//     "USER-003",
//     "USER-004"
// ]
//
// response1 and response2 must remain unchanged.

let new_MergedArray = [...response1,...response2];
console.log(`Merged Array: ${new_MergedArray}`);
console.log(`Unchanged Array Response 1: ${response1}`);
console.log(`Unchanged Array Response 2: ${response2}`);


// Q32 — TEST SUITES
// ------------------------------------------------------------

let smokeTests = [
    "Login",
    "Logout"
];

let regressionTests = [
    "Search",
    "Checkout",
    "Payment"
];

// Create:
//
// [
//     "Login",
//     "Logout",
//     "Search",
//     "Checkout",
//     "Payment"
// ]

console.log(`Joining the 2 arrays using spread operator : ${[...smokeTests,...regressionTests]}`);



// ============================================================
// SECTION 9 — INTERVIEW CONCEPTUAL QUESTIONS
// ============================================================

// Q33 — PUSH RETURN VALUE
// ------------------------------------------------------------

let items = [
    "A",
    "B"
];

let result = items.push("C");

console.log(`Push will return new length : ${result}`);
console.log(`New array after push: ${items}`);

// Before running:
// Predict both outputs.
//result will give me pushed item
//items will give me new array after push

// Then explain what push() returns.
//push method will push the element to last of array.



// Q34 — POP RETURN VALUE
// ------------------------------------------------------------

let orders2 = [
    "ORD-1",
    "ORD-2",
    "ORD-3"
];

let removedOrder = orders2.pop();

console.log(`Removed value is return: ${removedOrder}`);
console.log(`Array is returned: ${orders2}`);

// Predict both outputs.
// removedOrder is going to return removed element
//orders2 will return array after removal of element.

// Then explain what pop() returns.
//pop is going to remove the last value from the array



// Q35 — SPLICE RETURN VALUE
// ------------------------------------------------------------

let users2 = [
    "Ali",
    "Asim",
    "Sara",
    "John"
];

let removedUsers = users2.splice(1, 2);

console.log(`Return removed elements : ${removedUsers}`);
console.log(`Returns array: ${users2}`);

// Predict both outputs.
//
// Then explain what splice() returns.
//splice returns an array containing the elements that were removed.

// Explain what happened to users2.
//users2 will return only 2 values 



// Q36 — SLICE RETURN VALUE
// ------------------------------------------------------------

let dataArray = [
    "A",
    "B",
    "C",
    "D",
    "E"
];

let result2 = dataArray.slice(1, 3);

console.log(result2);
console.log(dataArray);

// Predict both outputs.
//slice is going to return part of same array given 
// Start index is included. End index is excluded.

// Explain what happened to dataArray.
// it will return all values. Since slice doesnt mutates the orignal array so no effect on this

//SLICE  → take a portion → original stays
//SPLICE → modify the original → returns what was removed



// ============================================================
// SECTION 10 — INTERVIEW TRAPS
// ============================================================


// Q37 — ARRAY REFERENCE
// ------------------------------------------------------------

let original = [
    "A",
    "B",
    "C"
];

let copy = original;

copy.push("D");

console.log(`Orignal Array: ${original}`);
console.log(`Copy of Array: ${copy}`);

// Predict both outputs.
// Explain why they contain the same values.
// Since array is Non-primitive datatype and is stored in form of Heap.
//  So any change indicated will be reflected in orignal array as well
//copy and original reference the same array object. 
// Assigning original to copy does not create a new array,
//  so mutating the array through copy also affects what original refers to.



// Q38 — ARRAY COMPARISON
// ------------------------------------------------------------

let first = [
    "A",
    "B",
    "C"
];

let second = [
    "A",
    "B",
    "C"
];

console.log(first === second);

// Predict the output.
// Explain why.
// Both array have different refernce 
//Because JavaScript compares object/array references, not their contents, when using ===.


// Q39 — SLICE VS SPLICE
// ------------------------------------------------------------

let testArray = [
    "A",
    "B",
    "C",
    "D",
    "E"
];

let result3 = testArray.slice(1, 3);

console.log(`slice the array: ${result3}`);
console.log(testArray);

// Reset the array.

// Then perform:
//
// splice(1, 3)
let result3_splice = testArray.splice(1, 3);

console.log(`splice the array: ${result3_splice}`);
console.log(testArray);

// Explain the difference between the two methods.
//Slice :
// Does not mutate original array
// Creates/returns a portion of the array
// End index is excluded

//Splice 
//Mutates original array
//Removes/replaces/inserts elements
//deleteCount tells how many to remove


// ============================================================
// SECTION 11 — HARDER TECHNICAL PROBLEMS
// ============================================================


// Q40 — DYNAMIC ELEMENT REMOVAL
// ------------------------------------------------------------

let cases = [
    "TC001",
    "TC002",
    "TC003",
    "TC004",
    "TC005"
];

let caseToRemove = "TC003";

// Remove caseToRemove.
//
// The position of caseToRemove must NOT be assumed.
let index_TC003= cases.indexOf(caseToRemove);
cases.splice(index_TC003,1);
console.log(`Remove caseToRemove: ${cases}`);
// Expected:
//
// [
//     "TC001",
//     "TC002",
//     "TC004",
//     "TC005"
// ]


// Q41 — INSERT AFTER VALUE
// ------------------------------------------------------------

let workflow = [
    "Login",
    "Dashboard",
    "Logout"
];

// Insert "Profile" immediately after "Dashboard".
let dashboard_position = workflow.indexOf("Dashboard");
workflow.splice(dashboard_position+1 , 0 , "Profile");
console.log(`Insert "Profile" immediately after "Dashboard" : ${workflow}`);
// Expected:
//
// [
//     "Login",
//     "Dashboard",
//     "Profile",
//     "Logout"
// ]


// Q42 — SECOND LAST ELEMENT
// ------------------------------------------------------------

let records4 = [
    "R1",
    "R2",
    "R3",
    "R4",
    "R5"
];

// Get the second-last element.
console.log(`Get the second last element: ${records4[(records4.length-1)-1]}`)

// Do not use:
//
// records4[3]
//
// Your solution should work if the array length changes.



// Q43 — MIDDLE ELEMENT
// ------------------------------------------------------------

let numbers = [
    10,
    20,
    30,
    40,
    50
];

// Get the middle element.
console.log(`Get the middle element: ${numbers[(numbers.length-1)/2]}`)
// Do not hardcode its index.
//
// Your solution should work for this array.



// Q44 — ARRAY WINDOW
// ------------------------------------------------------------

let numbers2 = [
    10,
    20,
    30,
    40,
    50,
    60,
    70,
    80
];

// Extract the values from position 3 through position 6.
let extracted_arr = numbers2.slice(3,7);
console.log(`Extract the values from position 3 through position 6: ${extracted_arr}`);
// Expected:
//
// [40, 50, 60, 70]



// Q45 — REMOVE TWO SPECIFIC VALUES
// ------------------------------------------------------------

let testCasesFinal = [
    "TC001",
    "TC002",
    "TC003",
    "TC004",
    "TC005"
];

// Remove:
// TC002
// TC004
let index_02 = testCasesFinal.indexOf("TC002");
testCasesFinal.splice(index_02,1);

let index_04 = testCasesFinal.indexOf("TC004");
testCasesFinal.splice(index_04,1);
console.log(`Removed TC002 , TC004: ${testCasesFinal}`);

// Expected:
//
// [
//     "TC001",
//     "TC003",
//     "TC005"
// ]
//
// Neither index should be assumed.



// ============================================================
// SECTION 12 — FINAL QA INTERVIEW CHALLENGES
// ============================================================


// Q46 — PRODUCTION DATA CLEANUP
// ------------------------------------------------------------

let productionData = [
    "  USER-001  ",
    "USER-002",
    "  USER-003",
    "",
    "USER-004",
    "USER-005  "
];

// Perform the following:
//
// 1. Clean all unnecessary spaces.
productionData[0] = productionData[0].trim();
productionData[1] = productionData[1].trim();
productionData[2] = productionData[2].trim();
//productionData[3] = productionData[3].trim();
productionData[4] = productionData[4].trim();
productionData[5] = productionData[5].trim();

console.log(`TRIMMED SPACES: ${productionData}`);

// 2. Remove the empty value.
let empty_position = productionData.indexOf("");
productionData.splice(empty_position,1);
console.log(`Removed the empty value: ${productionData}`);

// 3. Find USER-003.
console.log(`Find USER-003: ${productionData.includes("USER-003")}`);

// 4. Find the position of USER-004.
console.log(`Find the position of USER-004: ${productionData.indexOf("USER-004")}`);

// 5. Remove USER-002.
productionData.splice(1,1);
console.log(`Remove USER-002: ${productionData}`);

// 6. Add USER-006.
productionData.push("USER-006")
console.log(`Add USER-006: ${productionData}`);

// 7. Move USER-006 to the beginning.
productionData.splice(4,1);
productionData.splice(0,0,"USER-006");
console.log(`Move USER-006 to the beginning: ${productionData}`);

// 8. Reverse the final array.
productionData.reverse();
console.log(`Reverse the final array: ${productionData}`);

// Expected:
//
// [
//     "USER-005",
//     "USER-004",
//     "USER-003",
//     "USER-001",
//     "USER-006"
// ]


// Q47 — TRANSACTION PROCESSING
// ------------------------------------------------------------

let transactions = [
    "TXN-001",
    "TXN-002",
    "TXN-003",
    "TXN-004",
    "TXN-005",
    "TXN-006"
];

// The first three transactions are successful.
//
// Create successful:
console.log(`Successful Transactions: ${transactions.slice(0,3)}`);


// containing:
//
// [
//     "TXN-001",
//     "TXN-002",
//     "TXN-003"
// ]


// Create:
// pending
console.log(`Pending Transactions: ${transactions.slice(3)}`);

// containing:
//
// [
//     "TXN-004",
//     "TXN-005",
//     "TXN-006"
// ]
//
// The original array must remain unchanged.
console.log(`Orignal Array : ${transactions}`);


// Q48 — TEST EXECUTION REORDER
// ------------------------------------------------------------

let testOrder = [
    "Login",
    "Dashboard",
    "Logout",
    "Profile"
];

 let profile  = testOrder.splice(3);
 console.log(profile);
 testOrder.splice(1,0,...profile);
console.log(testOrder);

// Rearrange the array to:
//
// [
//     "Login",
//     "Profile",
//     "Dashboard",
//     "Logout"
// ]
//
// Do not manually create a replacement array.



// Q49 — ARRAY ROTATION
// ------------------------------------------------------------

let values2 = [
    1,
    2,
    3,
    4,
    5,
    6
];

// Rotate the array three positions to the right.
console.log("Rotating the array");
// let copy_1 = values2.slice(3);
// values2.splice(3);
// console.log(copy_1);
// console.log(values2);
// console.log([...copy_1,...values2]);

//approach 2
let k=3;
let copy_1 = values2.slice(-k);
console.log(copy_1);

let copy_2 = values2.slice(0,k);
console.log(copy_2);

console.log([...copy_1,...copy_2]);
// Expected:
//
// [
//     4,
//     5,
//     6,
//     1,
//     2,
//     3
// ]



// Q50 — FINAL INTERVIEW CHALLENGE
// ------------------------------------------------------------

let testCasesFinal2 = [
    "TC001",
    "TC002",
    "TC003",
    "TC004",
    "TC005"
];

let failedTests = [
    "TC002",
    "TC004"
];

// Requirements:
//
// 1. Find the positions of TC002 and TC004.
console.log("Position Finding");
let position_TC002_testCasesFinal2= testCasesFinal2.indexOf("TC002")
let position_TC004_testCasesFinal2= testCasesFinal2.indexOf("TC004")
let position_TC002_failedTests= failedTests.indexOf("TC002")
let position_TC004_failedTests= failedTests.indexOf("TC004")

console.log(position_TC002_testCasesFinal2);
console.log(position_TC004_testCasesFinal2);
console.log(position_TC002_failedTests);
console.log(position_TC004_failedTests);

// 2. Remove TC002.
console.log("Removing TC002 from testCasesFinal2");
testCasesFinal2.splice(position_TC002_testCasesFinal2,1)
console.log(testCasesFinal2 );

console.log("Removing TC002 from failedTests");
failedTests.splice(position_TC002_failedTests,1)
console.log(failedTests );

// 3. Remove TC004.
//since TC002 was removed. so positions get changed due to which need to find again
position_TC004_testCasesFinal2= testCasesFinal2.indexOf("TC004")
position_TC004_failedTests= failedTests.indexOf("TC004")
console.log("Removing TC004 from testCasesFinal2");
let removed_TC004=testCasesFinal2.splice(position_TC004_testCasesFinal2,1)
console.log(testCasesFinal2 );

console.log("Removing TC004 from failedTests");
failedTests.splice(position_TC004_failedTests,1)
console.log(failedTests );

// 4. Add TC006 to the end.
console.log("Adding  TC006 to end");

testCasesFinal2.push("TC006")
console.log(testCasesFinal2);

failedTests.push("TC006")
console.log(failedTests );

// 5. Add TC000 to the beginning.
console.log("Adding  TC000 to start");

testCasesFinal2.unshift("TC000")
console.log(testCasesFinal2);

failedTests.unshift("TC000")
console.log(failedTests );

// 6. Create a new array containing the first three
//    elements of the final array.
console.log("array containing the first three elements");
console.log(testCasesFinal2.slice(0,3));

// 7. Reverse the final array.

testCasesFinal2.reverse();
console.log(testCasesFinal2);

// ============================================================
// END
// ============================================================