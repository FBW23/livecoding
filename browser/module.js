// IIFE 

// Immediately Invoked Function Expression

// About Modules

// MUST HAVE EXPORT DEFAULT ALWAYS!!! 
export default function() {
    console.log( "Why do I need this?");
};

function myFunction() {
    console.log('hello world');
}; 
// <<--- immediately invoking (calling) expression

// we can make modules with javascript 
// if we want to make a function indepent from surroundings 
// don't want that anybody else can change it from outside 
// module would be the solutions! 
// relies on the module pattern

function myModule() {
    // keep it from changing stuff
    'use strict'; // more strict than normal ecmascript
    return {
        // showing stuff
        consoleLog: function () {
            console.log('hello module');
        }
    }
};


// need to export the module itself
// everything whats public available should be in the return ! 
function myModule2() {
    // hiding stuff
    'use strict';
    const _PI = 3.14;
    // underscore indicated privateness
    const _privateProperty = 'Hello Plamen';


    // same can be done for methods
    function _privateMethod() {
        console.log(_privateProperty);
    }

    function differentNameMethod() {
        console.log('Hello Module!');
        _privateMethod();
    }

    function multiplyWithPI(number) {
        console.log(number * _PI);
    }

    return {
        // what we want to show
        myConst: 3.14, // variables
        // public name left, right is internal function
        publicMethod: differentNameMethod,
        mysteriousFunction: multiplyWithPI // functions
    };
};
// if you want to export more than one thing 
// the export needs to come at the end
export {myFunction, myModule, myModule2 }; 