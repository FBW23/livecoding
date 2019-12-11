var myVar = 4;
let myLet = 5;
const PI = 3.14; // make sure to put the right thing here! 
const PI_SECOND = 3.14159265; // number
const SQUARE_ROOT_OF_MINUS_ONE = Math.sqrt(-1); // number
const MY_NAME = "Martina Freundorfer"; // String
const IS_STUDENT = false; // boolean

// PI = 2.14; // cannot reassign to const 

console.log(PI);

console.log(PI_SECOND);

// const PI = 2.14; // cannot declare again like let 

// String Escaping 

console.log('Hello World\n');

console.log('Hello \' World');

console.log("Hello \" World");

console.log("\"Not knowing anything is the sweetest life.\"");
console.log('\'Not knowing anything is the sweetest life.\'');

console.log('"Not knowing anything is the sweetest life."');
console.log("'Not knowing anything is the sweetest life.'");

let name = MY_NAME;
let city = 'Berlin'
let mySentence = `${name} is living in ${city}`; // String interpolation 
console.log(mySentence);

console.log("'Not knowing anything is the sweetest life.'");
// Careful of unclosed quotationmarks, Invalid or unexpected token SyntaxError possible

// USE String.prototype.length
console.log(name.length);
console.log(city.length);
console.log(mySentence.length);

let helloWorld = 'hello world';
console.log(helloWorld.length);
let w = helloWorld[6]; // getting one character
console.log(w);
let h = helloWorld[0]; // getting first Character
console.log(h);
const LENGTH = helloWorld.length;
console.log(helloWorld[LENGTH-1]); // Method getting last char when we don't know length
console.log(helloWorld[45]);
// console.log(helloWorld[LENGTH--]); // Method getting last char when we don't know length ==> tries to change old values! Be careful! 
console.log(helloWorld);
console.log(LENGTH);
// INCREMENT AND DECREMENT ALWAYS CHANGE THE VAR
// --var removes 1 before reading var, var-- removes 1 after reading the var
// ++var adds 1 before reading var, var++ adds 1 after reading the var


// BASIC STRING METHODS

helloWorld.length;

// String.prototype.toUpperCase()
let upperCase = helloWorld.toUpperCase();
console.log(upperCase);
// makes all letters big

let lowerCase = upperCase.toLowerCase();
console.log(lowerCase);
// makes all letters small 

// Output: Hello World
let bigH = helloWorld[0].toUpperCase();
let bigW = helloWorld[6].toUpperCase();
console.log(helloWorld[0].toUpperCase());

// String.prototype.substring
let ello = helloWorld.substring(1, 6);
console.log(ello);
console.log(ello.length);

let orld = helloWorld.substring(7);
console.log(orld);

console.log(bigH + ello + bigW + orld); // put it all together
console.log(`${bigH}${ello}${bigW}${orld}`); 

// String.prototype.includes 
// Check if another String is part of a String 
let earth = 'Earth';
let art = 'art';
console.log(earth.includes(art)); //  true: Earth - art = Eh ;-) 
console.log(earth.includes('sky')); // false case

console.log(earth.includes('e')); // false because case sensitive
// COMBINATION ALL THOSE METHODS = CHAINING THE METHODS
console.log(earth.toLowerCase().includes('e')); // true because we converted everything to lowercase
console.log(earth);

let chickenDay = "             Wednesday               ";
// STRING.PROTOTYPE.TRIM
console.log(chickenDay.trim());
console.log(chickenDay.trim().length);

// EXERCISE AFTER THE BREAK :D


