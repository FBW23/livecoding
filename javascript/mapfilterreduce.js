// Japanese Robot 
const transformers = [{
        name: 'Optimus Prime',
        form: 'Freightliner Truck',
        team: 'Autobot'
    },
    {
        name: 'Megatron',
        form: 'Gun',
        team: 'Decepticon'
    },
    {
        name: 'Bumblebee',
        form: 'VW Beetle',
        team: 'Autobot'
    },
    {
        name: 'Soundwave',
        form: 'Walkman',
        team: 'Decepticon'
    }
];

// normal function with a name 
function getForm(transformer) {
    return transformer.form;
}
const robotsInDisguise = transformers.map(getForm);
/** robosInDisguise === ['Freightliner Truck', 'Gun', 'VW Beetle', 'Walkman'] */


// We want a new array that lists all the forms that our robots take on. Array.map() makes this easy.
const allTheForms = transformers.map(function (object) {
    //return object.form; // Dot Notation 
    return object['form']; //Bracket Notation
});
console.log(allTheForms);

// arrow function in more than one line 
const allTheForms2 = transformers.map((object) => {
    //return object.form; // Dot Notation 
    return object['form']; //Bracket Notation
});
console.log(allTheForms2);

// arrow function // shortest version  (input) => output/return 
const allTheForms3 = transformers.map(object => object.form);
console.log(allTheForms3);


/// FILTER ONLY FOR AUTOBOTS 
// Array.prototype.filter(callback(item))
/*{
    name: 'Bumblebee',
    form: 'VW Beetle',
    team: 'Autobot'
}*/
function areYouAutobot(transformer) {
    if (transformer.team === 'Autobot') { // checks for value "Autobot" in key "team"
        return true; // if equal, then return
    }; // if not, return nothing! 
}

const autobots = transformers.filter(areYouAutobot);
console.log(autobots);

function areYouAutobot2(transformer) {
    return transformer.team === 'Autobot'; // checks for value "Autobot" in key "team"
    // if equal, then return
    // if not, return nothing! 
}

const autobots2 = transformers.filter(areYouAutobot2);
console.log(autobots2);

const areYouAutobot3 = (transformer) => {
    return transformer.team === 'Autobot'; // checks for value "Autobot" in key "team"
    // if equal, then return
    // if not, return nothing! 
};

const autobots3 = transformers.filter(areYouAutobot3);
console.log(autobots3);

const areYouAutobot4 = (transformer) => transformer.team === 'Autobot' ? true : false;
// checks for value "Autobot" in key "team"
// if equal, then return
// if not, return nothing! 

const autobots4 = transformers.filter(areYouAutobot4);
console.log(autobots4);

const areYouAutobot5 = (transformer) => transformer.team === 'Autobot';
// checks for value "Autobot" in key "team"
// if equal, then return
// if not, return nothing! 

const autobots5 = transformers.filter(areYouAutobot4);
console.log(autobots5);

// checks for value "Autobot" in key "team"
// if equal, then return
// if not, return nothing! 
const autobots6 = transformers.filter(transformer => transformer.team === 'Autobot');
console.log(autobots6);

/* output should be  [{
    name: 'Optimus Prime',
    form: 'Freightliner Truck',
    team: 'Autobot'
},
{
    name: 'Bumblebee',
    form: 'VW Beetle',
    team: 'Autobot'
}]*/

// RECUDE 

function countAutobot(previous, transformer) {
    console.log(previous);
    console.log(transformer);
    // return 1 if Autobot is the team 
    if (transformer.team === 'Autobot') {
        return previous + 1;
    } else {
        return previous;
    }
}

const countAutobots = transformers.reduce(countAutobot, 0); // initially count starts at 0
console.log(countAutobots);

// put all the names in one string
// usecase? only one first 
function assembleString(previous, transformer) {
    console.log(previous);
    console.log(transformer);
    return previous + transformer.name + ' ';
}

const assembledStrings = transformers.reduce(assembleString, ''); // initially string starts as empty string
console.log(assembledStrings);

function canNest(arr1, arr2) {
    let arr1Min = Math.min(...arr1); // spread operator!
    let arr2Min = Math.min(...arr2);
    if (arr1Min > arr2Min) {
        console.log("Maybe!!!");
        let arr1Max = Math.max(...arr1);
        let arr2Max = Math.max(...arr2);
        if (arr1Max < arr2Max) {
            console.log(true);
            return true;
        }
    }
    console.log(false);
    return false;
}

function canNest(arr1, arr2) {
    let arr1Min = Math.min(...arr1); // spread operator!
    let arr2Min = Math.min(...arr2);
    let arr1Max = Math.max(...arr1);
    let arr2Max = Math.max(...arr2);
    if (arr1Min > arr2Min && arr1Max < arr2Max) {
        console.log(true);
        return true;
    }
    console.log(false);
    return false;
}

const findMin = (acc, val) => (acc < val ? acc : val); // function for finding a minimum
const findMax = (acc, val) => (acc > val ? acc : val); // function for finding a maximum

function canNest2(arr1, arr2) {
    const arr1Min = arr1.reduce(findMin);
    const arr1Max = arr1.reduce(findMax);
    const arr2Min = arr2.reduce(findMin);
    const arr2Max = arr2.reduce(findMax);
    return arr1Min > arr2Min && arr1Max < arr2Max;
}

console.log(canNest2([1, 2, 3, 4], [0, 6])); //➞ true
console.log(canNest2([3, 1], [4, 0])); // ➞ true
console.log(canNest2([9, 9, 8], [8, 9])); // ➞ false
console.log(canNest2([1, 2, 3, 4], [2, 3])); // ➞ false

console.log(Math.min);