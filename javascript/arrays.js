// arrays

const myArray = [1, 2, 3]; // array of numbers
console.log(myArray[0]);
console.log(myArray);
console.log(typeof (myArray)); // onject
console.log(myArray.length); // 3

// array of strings 
const stringArray = ['hello', 'world', 'good', 'morning'];
console.log(typeof (stringArray)); // object
console.log(stringArray.length); //4 

// array of booleans

const boolArray = [true, false, true, false, false];
console.log(typeof (stringArray)); // object 
console.log(boolArray.length); // 5

// mixed Array 

const mixedArray = [123, 'hello world', true];
console.log(typeof (mixedArray)); // object 
console.log(mixedArray.length); // 3
console.log(mixedArray);

// Assigning array literals: 
// const <array name> = [ <value 1>, <value 2>, ...]; 

// Accessing an array: 
// <array name>[0...n] 
console.log(boolArray[boolArray.length - 1]); // accessing last if we don't know length

// Change items on an array
console.log(mixedArray);
mixedArray[0] = 321; // changed the first element of the array
console.log(mixedArray);

// mixedArray = [1, 2, 3]; not working because of const
console.log(mixedArray);
mixedArray[mixedArray.length-1] = false; // changing last  if we don't know length
console.log(mixedArray);

// empty Array 
const emptyArray = [];
console.log(emptyArray);
// all the class names 
console.log(emptyArray.indexOf('Plamen'));

// add something to an array? 
emptyArray.push('Plamen');
console.log(emptyArray);

emptyArray.push('Julia'); // recommend 
console.log(emptyArray);

console.log(emptyArray.length); // 2
emptyArray[2] = 'Balasz'; // unrecommended (you have to know how long your array is... )
console.log(emptyArray);

emptyArray.push('Julien', 'Joao', 'Bianca'); // recommended 
console.log(emptyArray);

emptyArray[10] = 'Bendis'; // thats why i would not recommend. you get 4 empty items 
console.log(emptyArray);
console.log(emptyArray.length); // 11

// ADDING TO AN ARRAY
classArray = ['Plamen', 'Julia', 'Julien'];
classArray.push('Balasz', 'Joao');
console.log(classArray.length); // 5 
classArray.unshift('Bendis', 'Bianca'); // unshift adds at the beginning
console.log(classArray);

// REMOVING FROM AN ARRAY
classArray.pop(); // removes the last one 
console.log(classArray);

classArray.pop();
console.log(classArray);
//REMOVING WITH SHIFT

classArray.shift();
console.log(classArray);

classArray.shift();
console.log(classArray);

