let fruit = 'banana';

switch (fruit) {
    case 'banana':
        console.log('Banana costs 1 Dollar');
        break;
    case 'ananas':
        console.log('Ananas costs 3 Dollars');
        break;
    default:
        console.log('It\'s not fitting to my cases');
}

// FOR LOOP IS NOT SO USEFUL IF YOU DON'T HAVE AN ITERATOR

for (let fruit = 'Ananas'; fruit === 'Kiwi'; fruit = 'Strawberry') {
    console.log(fruit + ' costs ' + fruit.length + ' Euro');
}

// FOR LOOP WITH ITERATOR == CHRISTMAS TREE? 
let three = '';
for (let i = 0; i < Infinity; i++) {
    three += '*';
    if (i === 1) {
        continue; // prevent printing **
    }
    if (i === 3) {
        continue; // prevent printing ****
    }
    console.log(three);
    if (i === 10) {
        break; // earlier than normal 
    }
}

// Multiplication Tables. Write a program that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18"). Bonus: Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).

for (let multiplier = 0; multiplier <= 10; multiplier++) {
    for (let secondMulti = 0; secondMulti <= 10; secondMulti++) {
        //console.log(multiplier + ' * 9 = ' + multiplier * 9);
        console.log(multiplier + ' * ' + secondMulti + ' = ' + multiplier * secondMulti);
    }
}

// NESTED LOOPS NORMALLY GO WITH THE ITERATORS CALLED I and J
for (let i = 0; i <= 10; i++) {
    for (let j = 0; j <= 10; j++) {
        //console.log(i + ' * 9 = ' + i * 9);
        console.log(i + ' * ' + j + ' = ' + i * j);
    }
}

// FOR LOOP WITH ITERATOR == CHRISTMAS TREE? 
let stars = '';
for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 10 - i; j++) {
        stars += ' '; // add whitespace accordingly
    }
    for (let k = 0; k < 2 * i + 1; k++) {
        stars += '*';
    }
    // if (i === 4) {
    //     break;
    // } else {
    //     stars += '\n'; // Break sign for making a new line
    // }
    if (i < 4) {
        stars += '\n';
    }
}
console.log(stars);

// TASK: Please produce this output with nested loops

// 1 1 1 2 2 2 3 3 3 4 4 4

// 0 1 2 3 4 0 1 2 3 4 0 1 2 3 4

// Tell me if you have something that works

// isPalindrome ? 

let checkWord = 'EVE';
let bigWord = checkWord.toUpperCase();
let isPalindrome = false; // Helper Variables 
console.log(bigWord);

//for (let i = 0; i < bigWord.length / 2 ; i++) { EVEN WORDS
// for (let i=0; i !== bigWord.length - (i + 1); i++) { UNEVEN WORDS 
for (let i = 0;
    (i < bigWord.length / 2) && (i !== bigWord.length - (i + 1)); i++) {

    console.log('compared' + bigWord.charAt(i) + ' to ' + bigWord.charAt(bigWord.length - (i + 1)));

    if (bigWord.charAt(i) === bigWord.charAt(bigWord.length - (i + 1))) {
        console.log('It might be a palindrome!');
        isPalindrome = true;
    } else {
        console.log('It is not a palindrome!');
        isPalindrome = false;
        break;
    }
}

console.log(checkWord + ' is a Palindrome? Answer is ' + isPalindrome);

let reverse = bigWord.reverse; // Later with ARRAYS, not possible like this right now
console.log(reverse);

// BREAKTIME 15 MINUTES 1408 +15 

// Exercise
// #1 Output: 9 7 5 3 1 

for (let i = 9; i >= 0; i -= 2) {
    // if (i % 2) {
    console.log(i);
    //}
}

// Bonus: #2 "Peter Picker picked pickles" isAlliteration? yes or no? 
// Tell me when you're ready

let string = 'Peter Picker picked pickles';
let array = string.toUpperCase().split(' ');
let helper = false;
for (let i = 1; i < array.length; i++) {
    if(array[i].charAt(0) === array[i-1].charAt(0)) {
        console.log('It might be a Alliteration');
        helper = true;
    } else {
        console.log('Its not an alliteration');
        helper = false;
        break;
    }
}
console.log(array);