console.log(Math.sqrt(4)); // Math Square Root 
console.log(Math.pow(3, 2)); // x to the power of y 
console.log(Math.round(9.5)); // because .5 > .4 its rounded up
console.log(Math.round(1.4)); // because .4 < .5 its rounded down
let randomNumber = Math.random(); // always produces a new number 
console.log(randomNumber);
console.log(Math.round(randomNumber)); // always produces a new number 
console.log(randomNumber * 10);
console.log(Math.round(randomNumber * 10)); // random number between 0 and 10

let integer = 23;
// Rounding up 
console.log(Math.ceil(integer)); // nothing happens
console.log(Math.ceil(23.23));
// Rounding down
console.log(Math.floor(integer)); // nothing happens
console.log(Math.floor(23.23));
// Maximum and minimum 
console.log(Math.max(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)); // 10
console.log(Math.min(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)); // 1
// Math.floor(Math.random() * (max - min + 1)) + min
let min = 1;
let max = 6;
let dice = Math.floor(Math.random() * (max - min + 1)) + min;
console.log("role the dice: " + dice);
// Number Pitfalls 
console.log(typeof(NaN)); // number
console.log(isNaN(23)); // boolean outcome  = false
console.log(isNaN('string')); // true = String is not a number
console.log(isNaN(1/0)); // false 
console.log(1/0); // Infinity 
console.log(typeof(Infinity)); //number
// e = m * c²
//e = 2.7...
//pi = 3.14...
console.log(Math.PI);
console.log(Math.E);
console.log(Math.exp(10));
console.log(Math.E/Math.PI); // rounding errors may occur 
console.log(Math.round(Math.PI)); // cuts off all the digits after the point
console.log(Math.PI)
console.log(Math.PI.toFixed(1)); // leaves one digit after the comma
console.log(Math.PI.toFixed(2)); // Money calculation! 
//Number.prototype.toFixed(1);
console.log(Math.PI.toFixed(20)); // more digits available!
console.log(Math.E.toFixed(100)/Math.PI.toFixed(100)); // no change to previous calculation 
// toFixed will output a String if we don't calculate afterwards
console.log(2.71/3.14);
let calculation = 2.71/3.14;
console.log(calculation.toFixed(2));
console.log(calculation.toFixed(100));
console.log(typeof(-Infinity));
console.log(Infinity-Infinity); // calculate NaN
console.log(Infinity+Infinity); // Infinity
console.log(-Infinity+Infinity); // NaN again!
console.log(Infinity-(-Infinity));
// calculating with Infinity possible but strange! 

// Logical Operators 

let weather = 'bad';
let takeTheTaxi = false;
let umbrella = (weather !== 'good') && (takeTheTaxi !== true) ? 'umbrella yes!' : 'no umbrella'; // and and && combine conditions, both have to be true at the same time! 
console.log(umbrella);
// let umbrella2 = (weather !== 'good') || (takeTheTaxi === false) ?'umbrella yes!' : 'no umbrella'; // or or || combine conditions, only one condition has to be true at the same time! 
// console.log(umbrella2);

let hungry = false;
let thirsty = false;
let goToRestaurant = (hungry === true) || (thirsty === true) ? 'go to Restaurant!' : 'go to the Bar!';
console.log(goToRestaurant);

let break2 = true;
let summer = true;
let raining = false; 
let leaveJacketAtHome = ( raining || break2 && summer) ? 'yes, leave it at home' : 'bring it to school!';
console.log(leaveJacketAtHome);

// truthy or falsy? 
let something = null;
console.log(something? true:false);

let myNumber = '1.1';
console.log(myNumber == 1? true:false); //true
console.log(myNumber === 1? true:false ); // false = TYPE CONVERSION
console.log(parseInt(myNumber) === 1? true:false ); // true
console.log(parseFloat(myNumber) === 1? true:false ); // false now

let two = 2;
let three = 3;
console.log(two === three); // equality check
console.log(two !== three); // unequality check 
console.log(!(two === three)); //true braces are betten than no braces! 
console.log(!two === three); //false

// BOOLEAN INVERSION WITH EXLAMATION MARK !!! 

let input = null; // falsy values will loose
let myVar = undefined ||  input || 42 || 'hello';  // fallback for better experience 
console.log(myVar); // truthy values will win! 
