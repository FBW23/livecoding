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

// make a decimal number under 1000 into a binary number
function toBinary(number) {
    let binaryNumber = '';
    for (let i = 9; i > -1; i--) {
        if (number >= Math.pow(2, i)) {
            binaryNumber += '1';
            number = number - Math.pow(2, i);
        } else {
            binaryNumber += '0';
        }
    }
    return Number(binaryNumber);
}
console.log(toBinary(123));
console.log(toBinary(1023));
console.log(toBinary(682));

function toDecimal(binaryNumber2) {
    let binaryNumber = binaryNumber2.toString();
    let decimalNumber = 0;
    const last = binaryNumber.length - 1; // 9
    //console.log(last);
    for (let i = 0; i < binaryNumber.length; i++) {
        //console.log('last char: ' + binaryNumber.charAt(last-i));
        if (binaryNumber.charAt(last - i) === '1') {
            //console.log(decimalNumber);
            decimalNumber += Math.pow(2, i);
        }
    }
    return decimalNumber;
}
console.log(toDecimal(1010101010)); //682
console.log(toDecimal(1111111111)); //1023

// REAL LIFE SCENARIOS 
// GEOCACHING 
// PUZZLE: 

function sumPowerOfs(number) {
    let sum = 0;
    let binaryNumber = toBinary(number).toString();
    //console.log(binaryNumber);
    const last = binaryNumber.length - 1; // 9
    for (let i = 1; i < binaryNumber.length; i++) {
        if (binaryNumber.charAt(last - i) === '1') {
            //console.log(sum);
            sum += i;
        }
    }
    return sum;
}
//console.log(sumPowerOfs(123));

function findNumbersWhichFit() {
    let xxx = new Array();
    let yyy = new Array();
    let sum = new Array();
    let dif = new Array();
    for (let i = 100; i < 1000; i++) {
        let check = sumPowerOfs(i);
        if (check === 35) { // XXX
            xxx.push(i);
            //console.log('It fits to XXX: ' + i);
        }
        if (check === 11) {
            yyy.push(i);
            //console.log('It fits to YYY: ' + i);
        }
    }
    for (let j = 200; j < 2000; j++) {
        let check = sumPowerOfs(j);
        if (check === 37) {
            sum.push(j);
            //console.log('It fits to ZZZ: ' + j);
        }
    }
    for (let k = 0; k < 900; k++) {
        let check = sumPowerOfs(k);
        if (check === 36) {
            dif.push(k);
            //console.log('It fits to DDD: ' + k);
        }
    }
    console.log(xxx.length + ' numbers fitting to xxx: ' + xxx);
    console.log(yyy.length + ' numbers fitting to yyy: ' + yyy);
    console.log(sum.length + ' numbers fitting to sum: ' + sum);
    console.log(dif.length + ' numbers fitting to diff: ' + dif);
    let a, b, c, sums = 0;
    for (; a < xxx.length; a++) {
        for (; b < yyy.length; b++) {
            sums = xxx[a] + yyy[b];
            for (; c < sum.length; c++) {
                //console.log(xxx[a] + ' + ' + yyy[b] + ' = ' + sums + ' === ' + sum[c] + ' ?');
                if (sums === sum[c]) {
                    console.log('its a match');
                }
            }
        }
    }
}
findNumbersWhichFit();