// Declaring a function
function multiplyWithTwo(number) {
    // here we can define what should happen
    // function block 
    console.log(number * 2);
}

multiplyWithTwo(5);

// Anonymous function // Function declaration as values
const myFunction = function (number) {
    // here we can define what should happen
    // function block 
    console.log(number * 2);
};  

// Calling a function with an argument
myFunction(15);

// THIRD DECLARATION 1048

//Arrow function
const myArrowFunction = (number) => {
    console.log(number * 2);
};
myArrowFunction(8);