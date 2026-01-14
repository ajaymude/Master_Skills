

// variables types

// let var const
// let is block scoped , can be redeclared and reassigned
// var is function scoped , can be redeclared and reassigned
// const is block scoped , cannot be redeclared and reassigned


// let example
let name = "John";
console.log(name);
// output: John



// function example
function greet(name) {
  console.log("Hello, " + name);
}
greet("John");
// output: Hello, John


// function expression example
const greet = function (name) {
  console.log("Hello, " + name);
}
greet("John");
// output: Hello, John


// function declaration example
function greet(name) {
  console.log("Hello, " + name);
}
greet("John");
// output: Hello, John



// return statement example
function greet(name) {
  return "Hello, " + name;
}
console.log(greet("John"));
// output: Hello, John


// default parameter example
function greet(name = "John") {
  console.log("Hello, " + name);
}
greet();
greet("Jane");
// output: Hello, John
// output: Hello, Jane


// rest parameter example
function greet(...names) {
  console.log("Hello, " + names.join(", "));
}
greet("John", "Jane", "Jim");
// output: Hello, John, Jane, Jim




// arrow function example
const greet = (name) => {
  console.log("Hello, " + name);
}
greet("John");
// output: Hello, John



// rest parameter example
function greet(...names) {
  console.log("Hello, " + names.join(", "));
}
greet("John", "Jane", "Jim");
// output: Hello, John, Jane, Jim



// spread operator example
const names = ["John", "Jane", "Jim"];
greet(...names);
// output: Hello, John, Jane, Jim



// destructuring example
const person = { name: "John", age: 30, city: "New York" };
console.log(person.name);
// output: John
console.log(person.age);
// output: 30
console.log(person.city);
// output: New York

const { name: name1, age: age1, city: city1 } = person;
console.log(name1);
// output: John
console.log(age1);
// output: 30
console.log(city1);
// output: New York



// object literal example
const person1 = { name: "John", age: 30, city: "New York" };
const person2 = { ...person1, country: "USA" };
console.log(person2);
// output: { name: "John", age: 30, city: "New York", country: "USA" }
console.log(person1);
// output: { name: "John", age: 30, city: "New York" }
console.log(person2);
// output: { name: "John", age: 30, city: "New York", country: "USA" }



// object method example
const person3 = { name: "John", age: 30, city: "New York" };
console.log(person3.greet("Hello, " + person3.name));
// output: Hello, John


//=========================================================
// truthy and falsy values

/* ❌ FALSY VALUES (ONLY THESE 8) */
false
0
-0
0n            // BigInt zero
""            // empty string
null
undefined
NaN

/* ✅ TRUTHY VALUES (EVERYTHING ELSE) */
true
1
-1
"0"
"false"
" "
[]
{}
function () {}
Infinity
-Infinity

/* 🔥 COMMON TRAPS */
Boolean("false") // true
Boolean([])      // true
Boolean({})      // true
Boolean(0)       // false
Boolean("")      // false

/* 🧠 RULE TO REMEMBER */
// Falsy → fixed 8 values
// Truthy → everything else

//=========================================================







//=========================================================
// Operator in the javascript
//=========================================================

// arithmatic operator example
console.log(1 + 2); // output: 3
console.log(1 - 2); // output: -1
console.log(1 * 2); // output: 2
console.log(1 / 2); // output: 0.5
console.log(1 % 2); // output: 1

// comparison operator example
console.log(1 == 2); // output: false
console.log(1 === 2); // output: false
console.log(1 != 2); // output: true
console.log(1 !== 2); // output: true
console.log(1 > 2); // output: false
console.log(1 < 2); // output: true
console.log(1 >= 2); // output: false
console.log(1 <= 2); // output: true

// logical operator example
console.log(true && false); // output: false
console.log(true || false); // output: true
console.log(!true); // output: false


// assignment operator example
let a = 1;
a += 2; // a = a + 2
console.log(a); // output: 3

// increment operator example
let b = 1;
b++;
console.log(b); // output: 2

// decrement operator example
let c = 2;
c--;
console.log(c); // output: 1





/* =========================================================
   SWITCH STATEMENT (often miswritten as "sweet")
   SINGLE SCREEN – CLEAR EXAMPLES
   ========================================================= */

/* 1️⃣ BASIC SWITCH */
let day: number = 3;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Invalid day");
}

/* 2️⃣ SWITCH WITH STRING */
let role: string = "admin";

switch (role) {
  case "admin":
    console.log("Full access");
    break;
  case "user":
    console.log("Limited access");
    break;
  default:
    console.log("No access");
}

/* 3️⃣ MULTIPLE CASES (FALLTHROUGH) */
let grade: string = "A";

switch (grade) {
  case "A":
  case "B":
    console.log("Excellent");
    break;
  case "C":
    console.log("Good");
    break;
  default:
    console.log("Fail");
}

/* 4️⃣ SWITCH WITH BOOLEAN EXPRESSION */
let age: number = 20;

switch (true) {
  case age >= 18:
    console.log("Adult");
    break;
  default:
    console.log("Minor");
}

/* 5️⃣ SWITCH WITH ENUM (TypeScript) */
enum Status {
  Success,
  Error,
  Loading
}

let currentStatus: Status = Status.Success;

switch (currentStatus) {
  case Status.Success:
    console.log("Operation successful");
    break;
  case Status.Error:
    console.log("Operation failed");
    break;
  case Status.Loading:
    console.log("Loading...");
    break;
}

/* =========================================================
   KEY POINTS
   - break prevents fallthrough
   - default runs if no case matches
   - switch uses === comparison
   ========================================================= */





   /* =========================================================
   TERNARY OPERATOR ( ? : ) – SINGLE SCREEN EXAMPLES
   ========================================================= */

/* 1️⃣ BASIC EXAMPLE */
let age = 20;

let result = age >= 18 ? "Adult" : "Minor";
console.log(result);

/* 2️⃣ NUMBER CHECK */
let num = 5;

let evenOrOdd = num % 2 === 0 ? "Even" : "Odd";
console.log(evenOrOdd);

/* 3️⃣ BOOLEAN CONDITION */
let isLoggedIn = true;

let message = isLoggedIn ? "Welcome back" : "Please login";
console.log(message);

/* 4️⃣ DEFAULT VALUE */
let userName = "";

let displayName = userName ? userName : "Guest";
console.log(displayName);

/* 5️⃣ TERNARY WITH FUNCTION CALL */
let score = 85;

let grade = score >= 90 ? "A" : score >= 75 ? "B" : "C";
console.log(grade);

/* 6️⃣ JSX STYLE (REACT-LIKE) */
let isLoading = false;

let uiText = isLoading ? "Loading..." : "Data Loaded";
console.log(uiText);

/* =========================================================
   SYNTAX
   condition ? value_if_true : value_if_false
   ========================================================= */


   /* =========================================================
   JAVASCRIPT LOOPS – ALL TYPES (ES5 + ES6)
   SINGLE SCREEN – COMPLETE
   ========================================================= */

/* =========================================================
   1️⃣ for LOOP (classic)
   ========================================================= */
for (let i = 1; i <= 3; i++) {
  console.log("for:", i);
}

/* =========================================================
   2️⃣ for LOOP WITH ARRAY
   ========================================================= */
const nums = [10, 20, 30];

for (let i = 0; i < nums.length; i++) {
  console.log("array for:", nums[i]);
}

/* =========================================================
   3️⃣ break & continue
   ========================================================= */
for (let i = 1; i <= 5; i++) {
  if (i === 2) continue; // skip
  if (i === 4) break;    // stop
  console.log("break/continue:", i);
}

/* =========================================================
   4️⃣ BACKWARD LOOP
   ========================================================= */
for (let i = nums.length - 1; i >= 0; i--) {
  console.log("backward:", nums[i]);
}

/* =========================================================
   5️⃣ NESTED LOOPS
   ========================================================= */
for (let i = 1; i <= 2; i++) {
  for (let j = 1; j <= 2; j++) {
    console.log(`nested i=${i}, j=${j}`);
  }
}

/* =========================================================
   6️⃣ while LOOP
   ========================================================= */
let w = 1;
while (w <= 3) {
  console.log("while:", w);
  w++;
}

/* =========================================================
   7️⃣ do...while LOOP
   ========================================================= */
let d = 1;
do {
  console.log("do while:", d);
  d++;
} while (d <= 2);

/* =========================================================
   8️⃣ for...of (ES6) → values
   ========================================================= */
for (const value of nums) {
  console.log("for...of:", value);
}

/* =========================================================
   9️⃣ for...in (keys / indexes)
   ========================================================= */
const user = { name: "Ajay", age: 25 };

for (const key in user) {
  console.log("for...in:", key, user[key]);
}

/* =========================================================
   🔟 forEach (array method)
   ========================================================= */
nums.forEach((value, index) => {
  console.log("forEach:", index, value);
});

/* =========================================================
   1️⃣1️⃣ map (transform array)
   ========================================================= */
const doubled = nums.map(n => n * 2);
console.log("map:", doubled);

/* =========================================================
   1️⃣2️⃣ filter (select values)
   ========================================================= */
const filtered = nums.filter(n => n > 15);
console.log("filter:", filtered);

/* =========================================================
   1️⃣3️⃣ reduce (accumulate)
   ========================================================= */
const sum = nums.reduce((acc, curr) => acc + curr, 0);
console.log("reduce:", sum);

/* =========================================================
   1️⃣4️⃣ every & some
   ========================================================= */
console.log("every:", nums.every(n => n > 5)); // true
console.log("some:", nums.some(n => n > 25));  // true

/* =========================================================
   1️⃣5️⃣ find & findIndex
   ========================================================= */
console.log("find:", nums.find(n => n === 20));
console.log("findIndex:", nums.findIndex(n => n === 20));

/* =========================================================
   INTERVIEW SUMMARY
   =========================================================
   for        → index based
   while     → condition based
   do..while → runs once minimum
   for...of  → values (ES6)
   for...in  → keys
   forEach   → no break
   map       → transform
   filter    → select
   reduce    → accumulate
   ========================================================= */
