// String Check.**
// Create a function that takes a string and a word, and then returns true or false depending on whether the word starts with the initial string.
// Examples:
// * dictionary("bu", "button") ➞ true
// * dictionary("tri", "triplet") ➞ true
// * dictionary("beau", "pastry") ➞ false

let beginning = 'bu';
let testWord = 'button';

if (testWord.startsWith(beginning)) { // condition
    console.log(true);
} else {
    console.log(false);
}

// ternary operator ? 
// condition ? true case : false case;
testWord.startsWith(beginning) ? console.log(true) : console.log(false);

// save it for later
let result = testWord.startsWith(beginning) ? true : false;
console.log(result);

// write a function
const dictionary = (beginning, testWord) => {
    // Case insensitive! Always a good thing
    beginning = beginning.toLowerCase(); // must be done twice
    testWord = testWord.toLowerCase(); // must be done twice with the same method
    if (testWord.startsWith(beginning)) { // condition
        //console.log(true); // debugging
        return true;
    } else {
        //console.log(false); // debugging
        return false;
    }
};

// Copy test cases 
console.log(dictionary("bu", "button")); // ➞ true
console.log(dictionary("tri", "triplet")); // ➞ true
console.log(dictionary("beau", "pastry")); //  ➞ false
console.log(dictionary("Mu", "museum")); // true
console.log(dictionary("mu", "Museum")); // true


// Count Occurrences.**
// Create a function that accepts two arguments: a string and a letter. The function should count the number of occurrences of that letter in the string.
// i.e.
// countOccurrences("this is a string", "i") ➞ 3

let myString = "this is a string";
let letter = "i";
let count = 0;
// string method could be helping? indexOf() / includes() / charAt()
for (let i = 0; i < myString.length; i++) {
    if (myString.charAt(i) === letter) {
        count++;
    }
}
console.log(count);

const countOccurrences = (myString, letter) => {
    let count = 0;
    // string method could be helping? indexOf() / includes() / charAt()
    for (let i = 0; i < myString.length; i++) {
        if (myString.charAt(i) === letter) {
            count++;
        }
    }
    return count;
};
console.log(countOccurrences("this is a string", "i")); // ➞ 3

// Write a function that takes an integer and returns a string with the given number of "a"s in Edabit.
//howManyTimes(5) ➞ "Edaaaaabit"
//howManyTimes(0) ➞ "Edbit"
//howManyTimes(12) ➞ "Edaaaaaaaaaaaabit"
//Notes: You'll only be given integers as test input.

let myNumber = 5;
let repeatLetter = "a";
//let myEdabit = "Edbit";
// String method helping us? repeat
console.log("Ed" + repeatLetter.repeat(myNumber) + "bit");

// without recursion
const howManyTimes = (n) => {
    let repeatLetter = "a";
    let output = "Ed" + repeatLetter.repeat(n) + "bit";
    console.log(output);
    return output;
}
howManyTimes(5); //➞ "Edaaaaabit"
howManyTimes(0); //➞ "Edbit"
howManyTimes(12); //➞ "Edaaaaaaaaaaaabit"

// with recursion
const numberTimesLetter = (n) => {
    let letter = 'a';
    let begin = 'Ed';
    let end = 'bit';
    let result = begin;
    if (n >= 1) {
        //console.log(n);
        //return `Ed  ${letter+ numberTimesLetter(n-1)} bit`;
        return numberTimesLetter(n - 1) + letter;
    } else {
        return begin;
    }
}
let result2 = numberTimesLetter(5) + 'bit'; // postprocess add bit
console.log(result2);

let result3 = numberTimesLetter(0) + 'bit'; // postprocess add bit
console.log(result3);

let result4 = numberTimesLetter(12) + 'bit'; // postprocess add bit
console.log(result4);

// **2. Cubed.**
// Create a function that takes in three numbers and returns the sum of its cubes.
// // Examples:
// * sumOfCubes(1, 5, 9) ➞ 855 // Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
// * sumOfCubes(2) ➞ 8
// * sumOfCubes() ➞ 0

let first = 1;
let second = 5;
let third = 9;
console.log(Math.pow(first, 3) + Math.pow(second, 3) + Math.pow(third, 3));

// default parameters 0 
const sumOfCubes = (first = 0, second = 0, third = 0) => {
    // if condition
    return Math.pow(first, 3) + Math.pow(second, 3) + Math.pow(third, 3);
}
console.log(sumOfCubes(1, 5, 9));
console.log(sumOfCubes(2));
console.log(sumOfCubes()); // no arguments at all 

// recursion 
const sumOfCubes2 = (...args) => {
    for (let i = 0; i < args.length; i++) {
        console.log('Number ' + i + ' : ' + args[i]);
    }
    if (args.length === 1) {
        return Math.pow(args[0], 3);
    } else if (args.length === 0) {
        return 0;
    }
    for (let j = 0; args.length > 1 && j < args.length; j++) {
        return sumOfCubes2(args[j], args[j + 1]);
    }
};
console.log(sumOfCubes2(1, 5, 9));
console.log(sumOfCubes2(2));
console.log(sumOfCubes2());