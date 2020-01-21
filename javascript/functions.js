// Declaring a function == FIRST
function multiplyWithTwo(number, secondNumber) {
    // here we can define what should happen
    // function block 
    console.log(number * secondNumber);
}
// Calling a function
multiplyWithTwo(5, 2);

// Anonymous function // Function declaration as values == SECOND
const myAnonymousFunction = function (number, secondNumber) {
    // here we can define what should happen
    // function block 
    console.log(number * secondNumber);
};  
// Calling a function with two arguments
myAnonymousFunction(15, 2);

// THIRD DECLARATION 1048 

//Arrow function == THIRD
const myArrowFunction = (number, secondNumber) => {
    console.log(number * secondNumber);
};
// Calling the Arrow functions
myArrowFunction(8, 19);

const myFunction = function (param) {
    console.log('hello world ' + param); // parameter scope
    console.log(param);
}
myFunction('martina');
myFunction('Julien');
//console.log(param); // not in the scope of the function anymore!

console.log(myFunction);

// Declare Variables in functions
const myFunction2 = function (param) {
    // let functionVariable = parameter;
    let name = param;
    console.log('hello world ' + param); // parameter scope
    console.log(name); // variable scope 
}
myFunction2('Nicolo');
myFunction2('Julia');
//console.log(name);

// Declare Variables in functions
const myFunction3 = function (first, last) {
    // let functionVariable = parameter;
    let firstName = first;
    let lastName = last;
    console.log('hello world ' + firstName + ' ' + lastName); // parameter scope
    console.log(firstName); // variable scope 
}
myFunction3('Nicolo', 'Tommasi');
myFunction3('Julia', 'Reis');
// console.log(name); undefined outside of the function scope

let name = 'Constantine'; // Bad styling, global variables

const myFunction4 = function (firstName1, lastName1, name) {
    // let functionVariable = parameter;
    let firstName = firstName1;
    let lastName = lastName1;
    console.log('hello world ' + name); // parameter scope
    console.log(firstName); // variable scope 
    name = 'Nagster';
    console.log(name); // Nagster
}
console.log('helloooooooo ' + name); // constantine

myFunction4('Nicolo', 'Tommasi', name);
myFunction4('Julia', 'Reis', name);

console.log('finally ' +name); // still constantine

testFunction(); // will work, but bad style 
function testFunction() {
    console.log('How are you?');
}
testFunction(); // Always call after the definition 

// Create a function named printFavoriteFruit. Declare a variable outside of the function and store your favorite fruit as a value. Reassign the variable within the function and print "My favorite fruit is: x".

function printFavoriteFruit() {
    // Stub function 
    // REASSIGNMENT name = value; 
    favoriteFruit = 'ananas'; // Reassignment name = value
    console.log('My favorite fruit is: ' + favoriteFruit);
}
//console.log(favoriteFruit); // undefined
let favoriteFruit = 'banana'; // Assignment let name = value, const would save it!
console.log(favoriteFruit); // banana?
printFavoriteFruit(); // changes the favorite fruit
console.log(favoriteFruit); // ananas??? we changed in the function 

//5. Count Occurrences. Create a function that accepts two arguments: a string and a letter. The function should count the number of occurrences of that letter in the string.
// i.e. countOccurrences("this is a string", "i") ➞ 3

const exercise11 = (string2) => {
    let string = string2.toLowerCase();
    let numberOfO = 0;
    let numberOfX = 0;
    let firstMatchOfO = string.indexOf('o');
    let firstMatchOfX = string.indexOf('x');
    let match = false;
    for (let i = 0; i < string.length; i++) {
        if (string.indexOf('o') > -1) {
            numberOfO = +1;
            firstMatchOfO = string.indexOf('o', firstMatchOfO + 1);
            console.log(string.indexOf('o', firstMatchOfO + 1));
        }
        if (string.indexOf('x') > -1) {
            numberOfX = +1;
            firstMatchOfX = string.indexOf('x', firstMatchOfX + 1);
            console.log(string.indexOf('x', firstMatchOfX + 1));
        }
    }
    if (string.indexOf('o') === -1 && string.indexOf('x') === -1) {
        match = true;
    }
    match = numberOfO === numberOfX;
    return match;
}
console.log(exercise11('xxoo'));
console.log(exercise11('xooxx'));
console.log(exercise11('ooxXm'));
console.log(exercise11('zpzpzpp'));
console.log(exercise11('zzoo'));





