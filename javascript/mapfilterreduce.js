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