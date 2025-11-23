

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
const greet = function(name) {
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



