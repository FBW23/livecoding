let myString = 'hello';
console.log(myString);
// please change it to "world"

myString = 'world'; // change variables 
console.log(myString);

let myNumber = 5;
console.log(myNumber);
// please increment this 

myNumber = myNumber + 1; // increase value by one;
console.log(myNumber);

myNumber += 1;
console.log(myNumber);

myNumber++; // increase value by one
console.log(myNumber);


// THERE LIES DRAGONS =) 

myString += 1; // adds 1 to the string
console.log(myString);

myString++; // String will become NaN 
console.log(myString);

// Decrement 

myNumber = myNumber - 1; // Normal 
console.log(myNumber);

myNumber -= 1; // Shorter 
console.log(myNumber);

myNumber--; // Shortest 
console.log(myNumber);

// String add together? CONCATENATION
let firstString = 'hello';
let secondString = 'world';
myString = firstString + ' ' + secondString;
console.log(myString);

// second try ACCUMULATION BACKTICK STRING 
myString = `Result: ${firstString} ${secondString}`;
console.log(`Result: ${firstString} ${secondString}`);
console.log(myString);

let person = null; // on purpose 
// CONDITIONAL ASSIGNMENTS WITH THE TERNARY OPERATOR
// let [name] = [condition] ? [true case] : [false case];
let name = person ? person : "stranger"; // null is falsy
console.log("Howdy, " + name);


// Declare a variable named isDog. If true, print 'pat, pat' and if not, print 'find me a dog to pat!'

let isDog = true; // probably a boolean, either a dog or not!
console.log(isDog ? 'pat, pat' : 'find me a dog to pat!');

// second solution
let dog;
let isDog2 = dog ? 'pat, pat' : 'find me a dog to pat!';
console.log(isDog2);

// play around with the conditions and true/false cases to understand better 
let mySpeed = 49;
let speedLimit = (mySpeed < 50? 'you are driving like a grandmother' : 'attention!!! you are too fast!!!');
console.log(speedLimit);