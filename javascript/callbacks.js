// MAGIC METHODS FOR ARRAYS

function greeting(name) {
    console.log('Hello ' + name);
}

function processUserInput(callback, name) { // Higher order function because its accepting a callback as value 
    if (typeof (name) === 'string') { // check if its really a string
        let myName = name.trim(); // remove whitespace from beginning to end
        callback(myName);
    } else {
        console.log('Please provide valid input!');
    }
}

processUserInput(greeting, 'Martina'); // call the callback after execution
processUserInput(greeting, 23); // nothing happens
greeting('Constantin');

const array1 = ['a', 'b', 'c'];
array1.forEach(item => console.log(item)); // yes it's an array function!

const object1 = {
    1: 'a',
    2: 'b',
    3: 'c'
};
for (key in object1) { // forEach is not a object function!
    console.log(object1[key]);
}
// second example 
const arraySparse = [1, 3, , 7, , 8]; // jump over the empty value 
let numCallbackRuns = 0;

arraySparse.forEach(function (element) {
    console.log(element);
    numCallbackRuns++;
});

console.log("numCallbackRuns: ", numCallbackRuns); // 3 times only!


const items = ['item1', 'item2', 'item3', , ];
const copy = [];
const copy2 = [];
console.log(items);

// normal for loop
for (let i = 0; i < items.length; i++) {
    copy.push(items[i]); // copy also the undefined/empty ones
}

console.log(copy);

// forEach loop 
items.forEach(function (julia) { // forEach only makes sense if we need to do something with the items 
    copy2.push(julia); // eliminate the undefined/empty 
});

console.log(copy2);

// MAP function from [] to []

const arrayMap = [1, 4, 9, 16, , ];

// pass a function to map
const map1 = arrayMap.map(balasz => balasz * 2); // need to save the return 
// not as smart as the foreach

console.log(map1);
// expected output: Array [2, 8, 18, 32] // doubles the numbers 

let numbers = [1, 4, 9];
let roots = numbers.map(function (num) {
    return Math.sqrt(num);
});
console.log(roots); // [1, 2, 3]
let shorter = numbers.map(num => Math.sqrt(num));
console.log(shorter);


// REDUCER METHOD 

const arrayReduce = [1, 2, 3, 4]; // whats the sum of our array? 
const reducer = (accumulator, currentValue) => accumulator + currentValue;

console.log(reducer);

// 1 + 2 + 3 + 4
const sum = arrayReduce.reduce((a, b) => a + b); // a = return Value; b = currentValue
// expected output: 10

const myFunction = (a, b) => a + b; // save function to a variable 
const sumFunction = arrayReduce.reduce(myFunction); // give this function as argument 

// 5 + 1 + 2 + 3 + 4
console.log(sum);
console.log(sumFunction);

//GETTING A SUBSET OF AN ARRAY 
const ages = [1, 2, 20, 33, , ];
const over18 = ages.filter(item => item > 18);
const definedOnes = ages.filter(item => item);
console.log(over18);
console.log(definedOnes);

const allKindOfNumbers = [1, 2, 3, 4, 5, 6];
const even = allKindOfNumbers.filter(item => item % 2 === 0);
const odd = allKindOfNumbers.filter(item => item % 2);
console.log(even); // [2, 4, 6]
console.log(odd); // [1, 3, 5]

// EXERCISE 
const orders = [{
        amount: 250
    },
    {
        amount: 400
    },
    {
        amount: 100
    },
    {
        amount: 325
    }
];

const totalAmount = orders.reduce(function (a, b) {
    // type your code here 
}, 0); // Initial assignment would be zero! 

console.log(totalAmount);

const food = ['cow', 'potato', 'hen', 'corn']; // original food sources
const cook = (foodItem) => { // we cook each individually
    switch (foodItem) {
        case 'cow':
            return '🍔'; // an emoji needs to be wrapped in string quotation marks, too! 
        case 'potato':
            return 'pommes';// no need for break because we return immediately
        case 'hen':
            return 'chicken';
        case 'corn':
            return 'popcorn';
        default: // error handling
            console.log('this is no valid input!'); // we could also return that, but then it would land inside of the array!
    }
};
const processedFood = food.map(foodItem => cook(foodItem)); // we map each original food item to its cooked equivalent
console.log(processedFood); // [ '🍔', 'pommes', 'chicken', 'popcorn' ]

