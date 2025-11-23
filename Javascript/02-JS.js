// array , object , string , number , math , 


// array methods 

const arr = [ 1 , 3, 3, 3,4 ,5, 9]

// for loop example
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
// output: 1 3 3 3 4 5 9


// for in loop example
for (let i in arr) {
  console.log(arr[i] , 'index' , i);  
}
// output: 1 3 3 3 4 5 9


// for of loop example
for (let i of arr) {
  console.log(i);
}
// output: 1 3 3 3 4 5 9



// 1 push method example 
arr.push(10); // add element to the end of the array
console.log(arr);
// output: [ 1 , 3, 3, 3,4 ,5, 9, 10]

// 2 pop method example 
arr.pop(); // remove element from the end of the array
console.log(arr);
// output: [ 1 , 3, 3, 3,4 ,5, 9]


// 3 shift method example 
arr.shift(); // remove element from the beginning of the array
console.log(arr);
// output: [ 3, 3, 3,4 ,5, 9]


// 4 unshift method example 
arr.unshift(0); // add element to the beginning of the array
console.log(arr);
// output: [ 0, 3, 3, 3,4 ,5, 9]


// 5 splice method example 
arr.splice(1, 3); // remove 3 elements from the array starting from the index 1
console.log(arr);
// output: [ 1 , 3, 3, 3,4 ,5, 9]


// 6 slice method example 
arr.slice(1, 3); // return a new array with the elements from the index 1 to the index 3
console.log(arr);
// output: [ 1 , 3, 3, 3,4 ,5, 9]


// 7 concat method example 
arr.concat([11, 12, 13]); // return a new array with the elements of the original array and the new elements
console.log(arr);
// output: [ 1 , 3, 3, 3,4 ,5, 9, 11, 12, 13]


// 8 join method example 
arr.join(","); // return a string with the elements of the array joined by the separator
console.log(arr);
// output: "1,3,3,3,4,5,9"


// 9 reverse method example 
arr.reverse(); // reverse the array
console.log(arr);
// output: [ 9, 5, 4, 3, 3, 3, 1]


// 10 sort method example 
arr.sort(); // sort the array
console.log(arr);
// output: [ 9, 5, 4, 3, 3, 3, 1]


// 11 forEach method example 
arr.forEach(element => {
  console.log(element);
});
// output: [ 18, 10, 8, 6, 6, 6, 2]


// 12 map method example 
arr.map(element => {
  return element * 2;
});
console.log(arr);
// output: [ 18, 10, 8, 6, 6, 6, 2]  


// 13 filter method example 
arr.filter(element => {
  return element > 5;   // return a new array with the elements that are greater than 5
});
console.log(arr);
// output: [ 18, 10, 8, 6, 6, 6, 2]  

// 14 reduce method example 
arr.reduce((accumulator, element) => {
  return accumulator + element;   // return the sum of the elements
});
console.log(arr);
// output: 36



// 15 find method example   // return the first element that satisfies the condition
arr.find(element => {
  return element > 5;
});
console.log(arr);
// output: 6


// 16 findIndex method example   // return the index of the first element that satisfies the condition
arr.findIndex(element => {
  return element > 5;
});
console.log(arr);   
// output: 3


// 17 some method example   // return true if at least one element satisfies the condition
arr.some(element => {
  return element > 5;
});
console.log(arr);
// output: true


// 18 every method example   // return true if all elements satisfy the condition
arr.every(element => {
  return element > 5;
});
console.log(arr);
// output: false


// 19 fill method example   // fill the array with a value  
arr.fill(0); // fill the array with 0
console.log(arr);
// output: [ 0, 0, 0, 0, 0, 0, 0]


// 20 includes method example   // return true if the array contains the value
arr.includes(5); // return true if the array contains 5
console.log(arr);
// output: true


// 21 indexOf method example   // return the index of the first occurrence of the value
arr.indexOf(5); // return the index of the first occurrence of 5
console.log(arr);
// output: 3

// 22 lastIndexOf method example   // return the index of the last occurrence of the value
arr.lastIndexOf(5); // return the index of the last occurrence of 5
console.log(arr);
// output: 3

// 23 length method example   // return the length of the array
arr.length; // return the length of the array
console.log(arr);
// output: 7











// object methods 
const obj = {
  name: "John",
  age: 30,
  city: "New York"
}

// 1 keys method example   // return an array of the keys of the object
Object.keys(obj); // return an array of the keys of the object
console.log(obj);
// output: [ "name", "age", "city"]

// 2 values method example   // return an array of the values of the object     
Object.values(obj); // return an array of the values of the object
console.log(obj);
// output: [ "John", 30, "New York"]


// 3 entries method example   // return an array of the keys and values of the object
Object.entries(obj); // return an array of the keys and values of the object
console.log(obj);
// output: [ ["name", "John"], ["age", 30], ["city", "New York"]]


// 4 fromEntries method example   // return an object from an array of key-value pairs
Object.fromEntries(obj); // return an object from an array of key-value pairs
console.log(obj);
// output: { name: "John", age: 30, city: "New York"}


// 5 assign method example   // return a new object with the properties of the original object and the new properties
Object.assign(obj, { country: "USA" }); // return a new object with the properties of the original object and the new properties
console.log(obj);
// output: { name: "John", age: 30, city: "New York", country: "USA"}



// 6 freeze method example   // freeze the object
Object.freeze(obj); // freeze the object
console.log(obj);
// output: { name: "John", age: 30, city: "New York", country: "USA"}


// 7 isFrozen method example   // return true if the object is frozen
Object.isFrozen(obj); // return true if the object is frozen
console.log(obj);
// output: true


// 8 isSealed method example   // return true if the object is sealed
Object.isSealed(obj); // return true if the object is sealed
console.log(obj);
// output: true

// 9 isExtensible method example   // return true if the object is extensible
Object.isExtensible(obj); // return true if the object is extensible
console.log(obj);
// output: true

// 10 isProxy method example   // return true if the object is a proxy  
Object.isProxy(obj); // return true if the object is a proxy  
console.log(obj);
// output: true


// 11 isSerializable method example   // return true if the object is serializable  
Object.isSerializable(obj); // return true if the object is serializable  
console.log(obj);
// output: true

// 12 isTypedArray method example   // return true if the object is a typed array  
Object.isTypedArray(obj); // return true if the object is a typed array  
console.log(obj);
// output: true

// 13 isWeakMap method example   // return true if the object is a weak map  
Object.isWeakMap(obj); // return true if the object is a weak map  
console.log(obj);
// output: true

// 14 isWeakSet method example   // return true if the object is a weak set  
Object.isWeakSet(obj); // return true if the object is a weak set  
console.log(obj);
// output: true

// 15 isArray method example   // return true if the object is an array  
Object.isArray(obj); // return true if the object is an array  
console.log(obj);
// output: true


// 16 isObject method example   // return true if the object is an object  
Object.isObject(obj); // return true if the object is an object  
console.log(obj);
// output: true

// 17 isFunction method example   // return true if the object is a function  
Object.isFunction(obj); // return true if the object is a function  
console.log(obj);
// output: true

// 18 isString method example   // return true if the object is a string  
Object.isString(obj); // return true if the object is a string  
console.log(obj);   
// output: true

// 19 isNumber method example   // return true if the object is a number  
Object.isNumber(obj); // return true if the object is a number  
console.log(obj);
// output: true

// 20 isBoolean method example   // return true if the object is a boolean  
Object.isBoolean(obj); // return true if the object is a boolean  
console.log(obj);
// output: true






