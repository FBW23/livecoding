function init() {
    let name = 'Mozilla'; // name is a local variable created by init
    function displayName() { // displayName() is the inner function, a closure
        console.log(name); // use variable declared in the parent function
    }
    displayName();
}
init();

// Encapsulation: IIFE 

function displayMartina() { // definition
    console.log('Martina');
}
displayMartina(); // call 

// Anonymous function
const displayMartina2 = function () {
    console.log('Martina2');
}
displayMartina2();

// IIFE Immediately Invoked Function Expression
(function () {
    console.log('Martina3');
})();

function init2() {
    let name = 'Mozilla'; // name is a local variable created by init
    (function () { // displayName() is the inner function, a closure
        console.log(name); // use variable declared in the parent function
    })();
}
init2();

// init: make the init function an immediate invoked function expression, too! 
(function () {
    let name = 'Constantine';
    (function () {
        console.log(name);
    })();
})();

// init: make the init function an immediate invoked function expression, too! 
(function () {
    let name = 'Constantine';
    (function () {
        console.log(name);
    })();
}());

// init: make the init function an immediate invoked function expression, too! 
(function (givenName) {
    let name = givenName;
    (function () {
        console.log(name);
    })();
})('Julia');

// SIAF  Self Invoked Anonymous Function (SIAF)
// Difference to IIFE

(function iife() { // possible to have  a name
    console.log('iife');
})(); // this my recommended one :) 

(function iife() { // possible to have  a name
    console.log('iife');
}()); // never saw this in my life

//Named function expression
! function name() {
    console.log("IIFE!");
}();

// SIAF Self Invoked Anonymous Function (SIAF)
(function () {
    console.log('SIAF');
})();

function calculator(numberOne, numberTwo, operator) {
    let one = numberOne;
    let two = numberTwo;
    let op = operator;

    function makeAnOperation() {
        return function () {
            switch (operator) {
                case '+':
                    console.log(`${numberOne} ${operator} ${numberTwo} = ${numberOne + numberTwo}`);
                    break;
                case '-':
                    console.log(`${numberOne} ${operator} ${numberTwo} = ${numberOne - numberTwo}`);
                    break;
                case '*':
                    console.log(`${numberOne} ${operator} ${numberTwo} = ${numberOne * numberTwo}`);
                    break;
                case '/':
                    console.log(`${numberOne} ${operator} ${numberTwo} = ${numberOne / numberTwo}`);
                    break;
                case '%':
                    console.log(`${numberOne} ${operator} ${numberTwo} = ${numberOne % numberTwo}`);
                    break;
                default:
                    console.log('invalid operator!'); // Error default case
            }
        }
    }
    let myNewFunction = makeAnOperation(); // this is saving the return function
    console.log();
    myNewFunction();
    //makeAnOperation()(); // immediately executed, not saving the return function
};
calculator(1, 2, '+');
calculator(10, 25, '%');

function multiplier(c) {
    return function (d) {
        return c * d;
    };
}
console.log(multiplier(3)(4));