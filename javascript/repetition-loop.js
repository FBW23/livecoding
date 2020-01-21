let name = 'Julien';
//console.log('Bless you' + name );

name = 'Constantine';
//console.log('Bless you' + name);

// Thats not following which principle? 
// DONT REPEAT YOURSELF. 
let numberOfStudents = 9;
let asLongAsSomebodySneezes = 1;

// while (condition) { // loop code }
// runs at least zero times! 
while (asLongAsSomebodySneezes <= numberOfStudents) {
    console.log(asLongAsSomebodySneezes + '. WHILE: Bless you ' + name);
    switch (name) {
        case 'Constantine':
            name = 'Bendis';
            break;
        case 'Bendis':
            name = 'Nagster';
            break;
        case 'Nagster':
            name = 'Balasz';
            break;
        case 'Balasz':
            name = 'Joao';
            break;
        case 'Joao':
            name = 'Julien';
            break;
        case 'Julien':
            name = 'Nicolo';
            break;
        case 'Nicolo':
            name = 'Bianca';
            break;
        default:
            name = 'Julia';
    }
    asLongAsSomebodySneezes++;
}

asLongAsSomebodySneezes = 1; // reset
name = 'Constantine';
// do {} while (condition)
// runs at least once !
do {
    console.log(asLongAsSomebodySneezes + '. DO-WHILE: Bless you ' + name);
    switch (name) {
        case 'Constantine':
            name = 'Bendis';
            break;
        case 'Bendis':
            name = 'Nagster';
            break;
        case 'Nagster':
            name = 'Balasz';
            break;
        case 'Balasz':
            name = 'Joao';
            break;
        case 'Joao':
            name = 'Julien';
            break;
        case 'Julien':
            name = 'Nicolo';
            break;
        case 'Nicolo':
            name = 'Bianca';
            break;
        default:
            name = 'Julia';
    }
    asLongAsSomebodySneezes++;
} while (asLongAsSomebodySneezes <= numberOfStudents)

// reset what? 
name = 'Constantine';
// for (condition) { // loop code }

for (let i = 1; i <= numberOfStudents; i++) {
    // loop content? 
    console.log(i + '. FOR LOOP: Bless you ' + name);
    switch (name) {
        case 'Constantine':
            name = 'Bendis';
            break;
        case 'Bendis':
            name = 'Nagster';
            break;
        case 'Nagster':
            name = 'Balasz';
            break;
        case 'Balasz':
            name = 'Joao';
            break;
        case 'Joao':
            name = 'Julien';
            break;
        case 'Julien':
            name = 'Nicolo';
            break;
        case 'Nicolo':
            name = 'Bianca';
            break;
        default:
            name = 'Julia';
    }
}

// GENERAL RULE 
// LOOP HAS ALWAYS 4 THINGS : 

// 1) ITERATOR => Or ENDLESS!
// 2) CONDITION => Or ENDLESS! 
// 3) INCREMENT => Or ENDLESS!
// 4) Block of Code => Or Meaningless! 

// You can decide, which one you like best! 
// In most cases, all of those are applicable! 
// Only be careful with Do-while, it will be executed at least once! 
// Make sure, that thats okay, too! Or use while/for if in doubt!

let test = 123456000;
console.log(test.toString().length); // 9 
// test is still a number afterwards































let numberCount = 0;
for (let startingNumber = 1; numberCount < 5; startingNumber++) {
    let result = startingNumber;
    while (true) { // endless loop
        if (result === 1) {
            numberCount++;
            console.log('Yeah! We found the ' + numberCount + '. happy number: ' + startingNumber + ' :-)');
            break; // stop endless loop
        } else if (result === 4 || result === 37 || result === 58) {
            //console.log('Oops, we found an unhappy number :' + startingNumber + ' :-(');
            break; // stop endless loop 
        } else {
            if (result < 10) {
                result = result * result;
            } else if (result < 100) {
                let modulo = result % 10;
                result = (Math.floor(result / 10) * Math.floor(result / 10)) + (modulo * modulo);
            } else {
                let firstNumber = Math.floor(result / 100); // 1
                let secondNumber = Math.floor((result - firstNumber * 100) / 10); // 4 
                let modulo = result % 10; // 5
                result = (firstNumber * firstNumber) + (secondNumber * secondNumber) + (modulo * modulo);
            }
            //console.log(result);
        }
    }
}

for (let start = 100; start < 1000; start++) {
    let firstNumber = Math.floor(start / 100); // 1
    let secondNumber = Math.floor((start - firstNumber * 100) / 10); // 0
    let modulo = start % 10; // 0
    let calculation = Math.pow(firstNumber, 3) + Math.pow(secondNumber, 3) + Math.pow(modulo, 3);
    if (calculation === start) {
        console.log('We found an Armstrong Number ' + start);
    }
}