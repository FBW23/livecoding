// what is the output of this program? 
// private counter 

let add = (function () {
    let counter = 0;
    return function () {
        return ++counter;
    }
})();

let reduce = (function () {
    let counter = 0;
    return function () {
        return --counter;
    }
})();

// console.log(counter);
console.log(reduce()); // 1
console.log(reduce()); // 2
console.log(reduce()); // 3

// Possible answers are: 
// [ ] 0 
// [ ] 1 
// [ ] 2
// [x] 3 ? 

// Which principles we learned yesterday are applied here? 
// [ ] IIFE
// [ ] SIAF 
// [ ] Nested Scope? 
// [ ] Higher Order Function? 
// [ ] Closure 

// Recursive Functions 

// (function myRecursive() {
//     console.log('call me!');
//     myRecursive(); // call itself 
// })();

// for(let i=0; i<10; i++)
let i = 0; // iterator
let arrowFunction = () => {
    console.log('arrow function ' + i);
    i++; // increment
    if (i < 10) { // condition
        arrowFunction(); // call itself
    } else {
        return; // stop the execution
    }
};
arrowFunction();
// endless calls produce an error :)

// For example, the following loop...

let x = 0;
while (x < 10) { // "x < 10" is the loop condition
    // do stuff
    x++;
}

// ...can be converted into a recursive function declaration, followed by a call to that function

const whileFunction = (number) => {
    console.log(number);
    number++;
    if (number < 10) {
        whileFunction(number); // recursive call with recursive number
    } else {
        return;
    }
}; // <-- semicolon

whileFunction(-10);

// RECURSIVE FUNCTION 

function foo(i) {
    if (i < 0) {
        return; // if i reaches -1 
    } else {
        console.log('begin: ' + i); // in the beginning 
        foo(i - 1); // recursive call with decrement
        console.log('end: ' + i); // after call finished we go on with this 
        return;
    }
}
foo(5);


// length
function length(str) {
    if (!str) {
        console.log('return 0 exit point');
        let sum = 0;
        return sum;
    } else {
        console.log(str);
        console.log('call');
        let waitForReturn = length(str.substr(1)); // only call 
        let sum2 = waitForReturn+1; // only plus 
        console.log(sum2);
        return sum2 ; // later after the callback 
    }
}
length('apple');

// // length without empty 
// function length(str) {
//     if (str.length === 1) {
//         console.log('return 1 exit point');
//         return 1;
//     } else {
//         console.log(str);
//         console.log('call');
//         return length(str.substr(1)) + 1;
//     }
// }
// console.log(length('apple'));

function reverse(str) {
	if (!str) {
        console.log('return "" exit point');
        return '';
    } else {
        console.log(str);
        console.log('call');
        let waitForReturn = reverse(str.substr(1)); // only call 
        let sum2 = waitForReturn + str.charAt(0); // only concatenation 
        console.log(sum2);
        return sum2 ; // later after the callback 
    }
}
reverse('hello');

