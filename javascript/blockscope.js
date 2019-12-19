let a = -5;
if (a > 0) {
    console.log("positive");
} else {
    console.log("NOT positive");
}
// expected output: "NOT positive"

// Block SCOPE 
//var x = 1;
let y = 1;
var z = 6;
console.log(z); // 6 var

if (true) { // define a new block scope = let defined inside are only available inside here! 
    const PI = 3.14; // only inside the block available 
    var x = 2;
    //let z = 3;
    y = 2;
    //console.log(x);
    //console.log(y);
    //console.log(y);
    console.log(z); // 3 let
}
//console.log(PI); // Not possible to access 

console.log(z); // 6 var 
console.log(x);
// expected output: 2

//console.log(y);
// expected output: 1

// Ternary instead of the if ? 
let markBMI = 20;
let johnBMI = 25;

// safe the name of the higher BMI 
let isHigher = markBMI < johnBMI ? 'John' : 'Mark';
console.log(isHigher);

// Define it before 
let isHigher2; // = null recommendation!
if (markBMI < johnBMI) {
    isHigher2 = 'John';
    console.log(isHigher2);
} else {
    isHigher2 = 'Mark';
    console.log(isHigher2);
}
console.log(isHigher);
console.log(isHigher2);

// When to use the ternary, when is the if better? 
// 1) When we have more than two cases (true/false), take the IF! 
// 2) Always when we do more than one statement, take the IF!
// 3) Ternary is perfect for all occasions where we just save ONE variable only!

