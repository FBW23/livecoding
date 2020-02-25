// map double the values
let oldArray = [1, 2, 3];
let newArray = oldArray.map(function (constantin) {
    return constantin * 2; // change value times two
});
console.log(newArray);

// filter only odd values
let newArrayFilter = oldArray.filter(function (value) {
    return value % 2; // condition, no value change! 
});
console.log(newArrayFilter);

let arrayOfObjects = [{
        fullName: 'Plamen',
        courseHasTaken: 'Ruby Course',
        levelOfSatisfaction: 100
    },
    {
        fullName: 'Julia',
        courseHasTaken: 'JS Course',
        levelOfSatisfaction: 100
    },
    {
        fullName: 'Nicolo',
        courseHasTaken: 'PHP Course',
        levelOfSatisfaction: 77
    },
    {
        fullName: 'Julien',
        courseHasTaken: 'JS Course',
        levelOfSatisfaction: 25
    },
    {
        fullName: 'Joao',
        courseHasTaken: 'PHP Course',
        levelOfSatisfaction: 25
    },
    {
        fullName: 'Balasz',
        courseHasTaken: 'PHP Course',
        levelOfSatisfaction: 40
    },
    {
        fullName: 'Nagster',
        courseHasTaken: 'JS Course',
        levelOfSatisfaction: 45
    },
    {
        fullName: 'Constantin',
        courseHasTaken: 'Ruby Course',
        levelOfSatisfaction: 9.7
    },
    {
        fullName: 'Bendis',
        courseHasTaken: 'JS Course',
        levelOfSatisfaction: 30
    },
    {
        fullName: 'Aghy',
        courseHasTaken: 'PHP Course',
        levelOfSatisfaction: 7
    },
    {
        fullName: 'Bianca',
        courseHasTaken: 'Ruby Course',
        levelOfSatisfaction: 50
    }
];
//For every object add a new property that is going to be a string and it's value  depends on levelOfSatifaction value. For example if the levelOfSatisfaction is more than 80 add a new property with a name of stateOfHappy and assign to it a 'Found the course perfect'. For just more than 50 assign the value into it 'Content overall', For 50 or lower, assign a value of  'Customer is complaining, potential refund is going to be asked'.
const newArrayOfObjects = arrayOfObjects.map(function (object) {
    if (object.levelOfSatisfaction > 80) {
        object.stateOfHappy = 'Found the course perfect';
    } else if (object.levelOfSatisfaction > 50) {
        object.stateOfHappy = 'Content overall';
    } else if (object.levelOfSatisfaction <= 50) {
        object.stateOfHappy = 'Customer is complaining, potential refund is going to be asked';
    }
    return object;
});
console.log(newArrayOfObjects);

// After that, calculate the average satisfaction level per course. Store the results for each into an array and print the title of the course that has the biggest average of the three courses. 

function average(arrayOfObjects) {
    let resultJS = [];
    let resultPHP = [];
    let resultRuby = [];
    // same as for(item of array){...}
    arrayOfObjects.forEach(item => {
        if (item.courseHasTaken === 'PHP Course') {
            resultPHP.push(item.levelOfSatisfaction);
        } else if (item.courseHasTaken === 'Ruby Course') {
            resultRuby.push(item.levelOfSatisfaction);
        } else if (item.courseHasTaken === 'JS Course') {
            resultJS.push(item.levelOfSatisfaction);
        }
    });
    console.log(resultJS);
    console.log(resultPHP);
    console.log(resultRuby);
}
average(arrayOfObjects);