// You get a number
// If the number is smaller than 10, write "small number"
// If the number is smaller than 50, write "medium number"
// If the number is smaller than 100, write "large number"
// Also check other cases, write "invalid number"!
// Bonus: Can you turn it into a switch case? (tricky question!)

let myNumber = 5; // variable for the number
// myNumber = 8; not possible with const 
if (myNumber < 10) {
    console.log('small number'); // semicolon ! 
} else if (myNumber < 50) {
    console.log('medium number');
} else if (myNumber < 100) {
    console.log('large number');
} else {
    console.log('invalid number');
}
console.log(myNumber); // undefined if we don't assign the let !

// Try to turn it into a switch case

let expr = myNumber < 10;
console.log(expr);
switch (expr) {
    case true:
        console.log('small number');
        break;
    default: // false
        console.log('invalid number ' + expr + '.');
}

// Because we cannot compare inside of a switch case for bigger or smaller, only for equality or unequality 
// NOT APPLICABLE IN THIS CASE BECAUSE WE ARE COMPARING < and > 
// OKAY for EQUAL SIGN  === or unequal sign !== 
// SO IN THIS CASE NOT POSSIBLE ! 

// Please make two variables for temperature and rainfall!
// Define, which items of 1) sunglasses, 2) umbrella and/or 3) warm jacket is needed! => Console.log the correct items 
// Starting point: 
// IF Weather is good take sunglasses
// IF Weather is bad take another item
// IF it is cold take one item
// IF it is warm take another item
// Make up your mind about the cases! Think of all possibilities and combinations! => Console.log all correct items!
// Test your code! Check for empty /invalid values also! 
// Bonus: Simplify your code ;-) 

let rainfall = 'snowy';
let temperature = 'warm';

// IF Weather is good take sunglasses
if ((rainfall === 'sunny') && (temperature === 'hot')) {
    console.log('You only need sunglasses!');
}
// IF Weather is bad take umbrella & jacket
else if ((rainfall === 'rainy') && (temperature === 'cold')) {
    console.log('You only need umbrella and jacket!');
}
// IF it is cold take only jacket
else if ((temperature === 'cold') && (rainfall === 'sunny')) {
    console.log('You only need jacket!');
} // IF it is warm take the hat 
else if ((rainfall === 'sunny') && (temperature === 'warm')) {
    console.log('You only need a hat!');
} else {
    console.log('invalid values'); // DEFAULT CASE??? 
}

// ONLY ONE VALUE AT A TIME CAN BE COMPARED 
let expr2 = temperature;
console.log(temperature);
console.log(rainfall);
console.log(expr2);
switch (expr2) {
    case 'hot':
        console.log('Please take sunglasses!');
        break;
    case 'cold':
        console.log('Please take your jacket');
        break;
    case 'warm':
        console.log('Please take your hat!');
        break;
    default: // invalid
        console.log('Invalid values ' + expr2 + '.');
}
// PLEASE MAKE A SWITCH CASE FOR THE RAINFALL! rainy sunny dry ... snowy? 
// TEST ALL THE CASES !!! CHECK ALSO FOR INVALID 
// BONUS POINTS FOR FINDING THE BUG IN MY CODE // QUIETLY
// BONUS FOR BONUS: SNOWY??? WHAT CAN YOU TAKE?? 
let expr3 = rainfall;
expr3 = 'snowy';
switch (expr3) {
    case 'rainy':
        console.log('Take the umbrella');
        break;
    case 'sunny':
        console.log('Take your sunglasses 8-)');
        break;
    case 'dry':
        console.log('You don\'t need an umbrella!'); // Escaping the Special characters!
        break;
    case 'snowy':
        console.log('Take your snowboard!');
        break;
    default:
        console.log('Invalid values ' + expr3);
        break;
}