// Easiest creation of variables

var first = 2; // Number
var second = 'hello world'; // String
var third = true; // Boolean


// Better creation of variables 
let fourth = 12; // Number
let fifth = 'hello world 2'; // String
let sixth = false; // Boolean

console.log(first); //2
 // Overwriting
var first = 13;
console.log(first); //13

console.log(fourth); // 12
// let fourth = 4; // this is not possible 
// var fourth = 4; // also not possible because has already been declared
console.log(fourth); // 4

let twentieth = 'hello';
console.log(twentieth);  // it's not defined

let twentytwo;  // declared the variable 
console.log(twentytwo); // runs through

let myName = 'Martina';
console.log(myName); // runs not through

let message = "hallo";
function printFunction() {
    // It starts a complete new memory
    // happening in the background: make a box for s;
    // === HOISTING 
    console.log(message);  // undefined 
    var message = "test";  // define s as "test"
    console.log(message);  // test 
}
printFunction();

// Empty variable
let something; //  = 'undefined' // not on purpose // on accident
let number = null; // on purpose = type is object! // my recommendation if we want to start from a fresh plate =) 
// let something = 5; // no new box for something possible
something = 5; // overwrite on purpose !
console.log(number);
console.log(typeof(number));
// let anything missing 
let anything = 4;
console.log(anything);

let somethingEqualsAnything = anything;
console.log(somethingEqualsAnything);

something = anything;
console.log('something = ' + something); // more overview in the console

console.log(); // makes an empty line