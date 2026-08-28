// ============================================================
// FOR...IN LOOP — TECHNICAL PRACTICE
// Easy → Medium → Difficult
// ============================================================


// ============================================================
// 🟢 PART 1 — OBJECTS
// ============================================================


// Q1 — PRINT OBJECT KEYS
// ------------------------------------------------------------

let user = {
    name: "Ali",
    age: 25,
    role: "QA Engineer"
};

// Use for...in to print each key.
for (const key in user) {
  console.log(key);
}

// Expected:
// name
// age
// role



// Q2 — PRINT OBJECT VALUES
// ------------------------------------------------------------

let employee = {
    name: "Sara",
    department: "Testing",
    experience: 3
};

// Use for...in to print each value.
for (const key in employee) {
  console.log(employee[key] ); 
}
// Expected:
// Sara
// Testing
// 3



// Q3 — PRINT KEY AND VALUE
// ------------------------------------------------------------

let tester = {
    name: "Ahmed",
    role: "SDET",
    experience: 4
};
for (const key in tester) {
  console.log(key + ": "+ tester[key] ); 
}

// Print:
//
// name : Ahmed
// role : SDET
// experience : 4



// Q4 — COUNT OBJECT PROPERTIES
// ------------------------------------------------------------

let browser = {
    name: "Chrome",
    version: "140",
    company: "Google",
    type: "Browser"
};

// Count how many properties this object has.
let count_prop = 0;
for (const key in browser) {
          count_prop = count_prop +1;
}
console.log(count_prop);



// Q5 — FIND A SPECIFIC PROPERTY
// ------------------------------------------------------------

let api = {
    method: "POST",
    endpoint: "/login",
    status: 200,
    responseTime: 450
};

// Find the property "status"
// and print its value.
for (const key in api) {
    
    if(key == "status"){
         console.log(api[key]);       
    }
    
}


// ============================================================
// 🟡 PART 2 — OBJECT + CONDITIONS
// ============================================================


// Q6 — FIND PASS STATUS
// ------------------------------------------------------------

let testResult = {
    login: "PASS",
    signup: "PASS",
    checkout: "FAIL",
    logout: "PASS"
};

// Use for...in.
// Find and print the names of test cases
// whose value is "PASS".
for (const key in testResult) {
    if(testResult[key] == "PASS"){
        console.log(key);
    }   
}
// Expected:
// login
// signup
// logout



// Q7 — COUNT PASS
// ------------------------------------------------------------

let execution = {
    login: "PASS",
    signup: "FAIL",
    checkout: "PASS",
    payment: "BLOCKED",
    logout: "PASS"
};

// Count how many properties have the value "PASS".
let count_pass = 0 ;
for (const key in execution) {
   if(execution[key] == "PASS"){
    count_pass = count_pass +1;
   }   
}
console.log(count_pass);


// Q8 — FIND FAILED TEST
// ------------------------------------------------------------

let results = {
    login: "PASS",
    signup: "FAIL",
    checkout: "PASS",
    payment: "FAIL"
};

// Print the names of all failed test cases.
for (const key in results) {
   if(results[key] == "FAIL"){
    console.log(key);
    
   }   
}
// Expected:
// signup
// payment



// Q9 — FIND NUMBER VALUE
// ------------------------------------------------------------

let response = {
    status: 200,
    responseTime: 850,
    retryCount: 2
};

// Use for...in.
// Print the key whose value is greater than 500.
for (const key in response) {
   if(response[key] > 500){
          console.log(response[key]);
          
   }
}
// Expected:
// responseTime



// ============================================================
// 🟠 PART 3 — ARRAYS WITH for...in
// ============================================================


// Q10 — PRINT ARRAY INDEXES
// ------------------------------------------------------------

let browsers = ["Chrome", "Firefox", "Edge", "Safari"];

// Use for...in to print the indexes.

for (const key in browsers) {
    console.log(key);
    
}

// Expected:
// 0
// 1
// 2
// 3



// Q11 — PRINT INDEX + VALUE
// ------------------------------------------------------------

let statuses = ["PASS", "FAIL", "PASS", "BLOCKED"];

// Use for...in to print:
for (const key in statuses) {
    console.log(key + " : "+ statuses[key]);
}
// 0 : PASS
// 1 : FAIL
// 2 : PASS
// 3 : BLOCKED



// Q12 — FIND INDEX OF FAIL
// ------------------------------------------------------------

let executionStatus = ["PASS", "PASS", "FAIL", "BLOCKED", "PASS"];

// Use for...in.
// Find and print the index where "FAIL" occurs.
for (const key in executionStatus) {
    if(executionStatus[key] == "FAIL" ) {
    console.log(key);
    }
}
// Expected:
// 2



// Q13 — COUNT VALUES GREATER THAN 10
// ------------------------------------------------------------

let numbers = [5, 15, 20, 7, 30, 8];

// Use for...in.
// Count how many numbers are greater than 10.
let count_greater = 0 ;
for (const key in numbers) {
    if(numbers[key] > 10 ) {
    count_greater = count_greater +1;
    }
}
console.log(count_greater);



// ============================================================
// 🔴 PART 4 — STRINGS WITH for...in
// ============================================================


// Q14 — PRINT STRING INDEX
// ------------------------------------------------------------

let word = "SDET";

// Use for...in to print each index.

for (const key in word) {
   console.log(key);
}

// Expected:
// 0
// 1
// 2
// 3



// Q15 — PRINT INDEX + CHARACTER
// ------------------------------------------------------------

let language = "JavaScript";

// Use for...in to print:
for (const key in language) {
   console.log(key + " : " + language[key]);
}
// 0 : J
// 1 : a
// 2 : v
// ...



// Q16 — FIND INDEX OF CHARACTER
// ------------------------------------------------------------

let text = "automation";

// Use for...in.
// Find the index of the character "m".
for (const key in text) {
    if(text[key] == "m")
          {
            console.log(key + " : " + text[key]);
          }
}


// ============================================================
// 🔥 PART 5 — INTERVIEW-STYLE
// ============================================================


// Q17 — COUNT OBJECT VALUES
// ------------------------------------------------------------

let testCases = {
    login: "PASS",
    signup: "FAIL",
    checkout: "PASS",
    payment: "BLOCKED",
    logout: "PASS",
    profile: "FAIL"
};
let obj_values_pass =0
let obj_values_fail =0
let obj_values_block = 0 ;
for (const key in testCases) {
   if( testCases[key] == "PASS"){
              obj_values_pass++;
   }
   else if( testCases[key] == "FAIL"){
              obj_values_fail++;
   }
   else if( testCases[key] == "BLOCKED"){
             obj_values_block++;
   }
    
}
console.log(`Pass Count : ${obj_values_pass}`);
console.log(`fail Count : ${obj_values_fail}`);
console.log(`block Count : ${obj_values_block}`);

// Count:
// PASS
// FAIL
// BLOCKED



// Q18 — FIND LONGEST PROPERTY VALUE
// ------------------------------------------------------------

let userData = {
    username: "automationtester",
    role: "SDET",
    department: "QualityAssurance"
};

// Find which property has the longest string value.

let first_length = 0;
let longest_key = "";
for (const key in userData) {
        if( userData[key].length >= first_length){
                 first_length = userData[key].length 
                 longest_key = key;                      
        }
}
console.log(first_length);
console.log(longest_key);



// Expected:
// department



// Q19 — FIND PROPERTY WITH SPECIFIC VALUE
// ------------------------------------------------------------

let server = {
    environment: "production",
    region: "US",
    status: "active",
    version: "2.5"
};

// Find the key whose value is "production".
for (const key in server) {
    if(server[key] == "production") {
        console.log(key);
    }
}
// Expected:
// environment



// Q20 — FIND HIGHEST VALUE
// ------------------------------------------------------------

let responseTimes = {
    login: 250,
    signup: 450,
    checkout: 800,
    logout: 300
};

// Find the test case with the highest response time.
let highest_val = 0;
for (const key in responseTimes) {
       if(responseTimes[key] > highest_val ){
                highest_val = responseTimes[key]
       }
}
console.log(highest_val);

// Expected:
// checkout
// 800



// ============================================================
// 💀 Q21 — CHALLENGE
// ============================================================

let testExecution = {
    login: "PASS",
    signup: "FAIL",
    checkout: "PASS",
    payment: "BLOCKED",
    logout: "FAIL",
    profile: "PASS"
};

// Using for...in:
let obj_pass = 0 ;
let obj_fail = 0 ;
let obj_block = 0 ;
for (const key in testExecution) {
   if( testExecution[key] == "PASS"){
              obj_pass++;
   }
   else if( testExecution[key] == "FAIL"){
              obj_fail++;
              console.log(`Failed Test Cases : ${key}`);
              
   }
   else if( testExecution[key] == "BLOCKED"){
             obj_block++;
   }
    

}
console.log(`Pass Count : ${obj_pass}`);
console.log(`fail Count : ${obj_fail}`);
console.log(`block Count : ${obj_block}`);

// 1. Count PASS
// 2. Count FAIL
// 3. Count BLOCKED
// 4. Print the names of failed test cases
//
// Expected:
//
// PASS: 3
// FAIL: 2
// BLOCKED: 1
//
// Failed:
// signup
// logout