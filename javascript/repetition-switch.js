let daysLeftUntilAnniversary = 1000;

let startYear = 2017;
let startMonth = 'May';
let startDay = 26;

let years = Math.floor(daysLeftUntilAnniversary / 365); // 2
let endYear = startYear + years;
let endMonth = startMonth;
let endDay = startDay;

daysLeftUntilAnniversary -= years * 365;
console.log(daysLeftUntilAnniversary); //270

while (daysLeftUntilAnniversary > 0) {
    switch (endMonth) {
        case 'January':
            daysLeftUntilAnniversary -= 31;
            endMonth = 'February';
            break;
        case 'February':
            daysLeftUntilAnniversary -= 29;
            endMonth = 'March';
            break;
        case 'March':
            daysLeftUntilAnniversary -= 31;
            endMonth = 'April';
            break;
        case 'April':
            daysLeftUntilAnniversary -= 30;
            endMonth = 'May';
            break;
        case 'May':
            daysLeftUntilAnniversary -= 31;
            endMonth = 'June';
            break;
        case 'June':
            daysLeftUntilAnniversary -= 30;
            endMonth = 'July';
            break;
        case 'July':
            daysLeftUntilAnniversary -= 31;
            endMonth = 'August';
            break;
        case 'August':
            daysLeftUntilAnniversary -= 31;
            endMonth = 'September';
            break;
        case 'September':
            daysLeftUntilAnniversary -= 30;
            endMonth = 'October';
            break;
        case 'October':
            daysLeftUntilAnniversary -= 31;
            endMonth = 'November';
            break;
        case 'November':
            daysLeftUntilAnniversary -= 30;
            endMonth = 'December';
            break;
        case 'December':
            daysLeftUntilAnniversary -= 31;
            endMonth = 'January';
            endYear++; // 2020
            break;
    }
}

console.log(daysLeftUntilAnniversary); //25

while (daysLeftUntilAnniversary > 0) {
    switch (endMonth) {
        case 'January':
            let leftOverDays = 31 - endDay;
            daysLeftUntilAnniversary -= leftOverDays;
            endDay = 1;
            endMonth = 'February';
            break;
        case 'February':
            endDay = daysLeftUntilAnniversary;
            daysLeftUntilAnniversary = 0;
            break;
        case 'March':
            daysLeftUntilAnniversary -= 31;
            endMonth = 'April';
            break;
        case 'April':
            daysLeftUntilAnniversary -= 30;
            endMonth = 'May';
            break;
        case 'May':
            daysLeftUntilAnniversary -= 31;
            endMonth = 'June';
            break;
        case 'June':
            daysLeftUntilAnniversary -= 30;
            endMonth = 'July';
            break;
        case 'July':
            daysLeftUntilAnniversary -= 31;
            endMonth = 'August';
            break;
        case 'August':
            daysLeftUntilAnniversary -= 31;
            endMonth = 'September';
            break;
        case 'September':
            daysLeftUntilAnniversary -= 30;
            endMonth = 'October';
            break;
        case 'October':
            daysLeftUntilAnniversary -= 31;
            endMonth = 'November';
            break;
        case 'November':
            daysLeftUntilAnniversary -= 30;
            endMonth = 'December';
            break;
        case 'December':
            daysLeftUntilAnniversary -= 31;
            endMonth = 'January';
            break;
        default: // error case 
            console.log('Something is wrong');
    }
}
console.log('The Anniversary would be on the ' + endDay + 'th of ' + endMonth + ' ' + endYear);

const expr = 'Mangoes and Papayas';
// Needs to be a comparison for equality or unequality
switch (expr) {
    case 'Oranges':
        console.log('Oranges are $0.59 a pound.');
        break;
    case 'Mangoes and Papayas': // this is not a real AND condition
        console.log('Both costs together $5 Dollar each.');
        break;
    case 'Mangoes':
    case 'Papayas':
        console.log('Mangoes and papayas are $2.79 a pound.');
        // expected output: "Mangoes and papayas are $2.79 a pound."
        break;
    case 'Banana':
        console.log('Bananas are $0.50 a pound');
    default: // error case always good :) 
        console.log('Sorry, we are out of ' + expr + '.');
}

// Both is fine, as long as it works! 

if (expr === 'Oranges') {
    console.log('Oranges are $0.59 a pound.');
} else if (expr === 'Mangoes' || expr === 'Papayas') {
    console.log('Mangoes and papayas are $2.79 a pound.');
} else if (expr && expr === 'Banana') { // this is a real AND condition
    console.log('Bananas are $0.50 a pound');
} else { // error case always good :) 
    console.log('Sorry, we are out of ' + expr + '.');
}


//Write a JavaScript program to switch case of the minimum possible number of letters to make a given string written in the upper case or in the lower case.

//For example "Write" will be write and "PHp" will be "PHP"

function roundString(inputString2) {
    let inputString = inputString2.trim(); // removes whitespace around, optional
    let outputString = '';
    let smallLetter = 0;
    let bigLetter = 0;
    for (let i = 0; i < inputString.length; i++) {
        let currentChar = inputString.charAt(i); // current Letter
        // Possible to use a switch case instead!
        if (currentChar === ' ') {
            // Do nothing!
        } else if (currentChar === currentChar.toLowerCase()) {
            smallLetter++;
        } else {
            bigLetter++;
        }
    }
    // Not possible to do a switch case here because of >= 
    if (smallLetter >= bigLetter) {
        outputString = inputString.toLowerCase();
    } else {
        outputString = inputString.toUpperCase();
    }
    return outputString;
}
console.log(roundString('Write')); // write
console.log(roundString('PHp')); // PHP

function roundString2(inputString2) {
    let inputString = inputString2.trim(); // removes whitespace around, optional
    let outputString = '';
    let smallLetter = 0;
    let bigLetter = 0;
    for (let i = 0; i < inputString.length; i++) {
        let currentChar = inputString.charAt(i); // current Letter
        // Possible to use a switch case instead!
        switch (currentChar) {
            case ' ':
            case '@':
            case 1: 
            case '_':
            case '#': // become creative => Regular Expressions to the rescue! 
                // Do nothing! must be the first 
                break;
            case currentChar.toLowerCase():
                smallLetter++;
                break;
            case currentChar.toUpperCase():
                bigLetter++;
                break;
            default: // throw an error if nothing else fits 
                console.log('Something is wrong!');
        }
    }
    // Not possible to do a switch case here because of >= 
    if (smallLetter >= bigLetter) {
        outputString = inputString.toLowerCase();
    } else {
        outputString = inputString.toUpperCase();
    }
    return outputString;
}
console.log(roundString2('Write')); // write
console.log(roundString2('PHp')); // PHP
console.log(roundString2('HELLO world')); // PHP