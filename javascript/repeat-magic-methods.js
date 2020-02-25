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
        // if (item.courseHasTaken === 'PHP Course') {
        //     resultPHP.push(item.levelOfSatisfaction);
        // } else if (item.courseHasTaken === 'Ruby Course') {
        //     resultRuby.push(item.levelOfSatisfaction);
        // } else if (item.courseHasTaken === 'JS Course') {
        //     resultJS.push(item.levelOfSatisfaction);
        // }
        switch (item.courseHasTaken) {
            case 'PHP Course':
                resultPHP.push(item.levelOfSatisfaction);
                break;
            case 'Ruby Course':
                resultRuby.push(item.levelOfSatisfaction);
                break;
            case 'JS Course':
                resultJS.push(item.levelOfSatisfaction);
                break;
            default:
                console.log('Error');
        }
    });
    const sum = (previous, current) => previous + current;
    const sumJS = resultJS.reduce(sum);
    const sumPHP = resultPHP.reduce(sum);
    const sumRuby = resultRuby.reduce(sum);
    const averageJS = {
        name: 'JavaScript Course',
        average: (sumJS / resultJS.length).toFixed(2)
    };
    const averagePHP = {
        name: 'PHP Course',
        average: (sumPHP / resultPHP.length).toFixed(2)
    };
    const averageRuby = {
        name: 'Ruby Course',
        average: (sumRuby / resultRuby.length).toFixed(2)
    };
    let average = [];
    average.push(averageJS, averagePHP, averageRuby);
    console.log(average);
    let highestCourse = average.reduce((previous, current) => {
        if (previous.average > current.average) {
            return previous;
        } else {
            return current;
        }
    });
    console.log(highestCourse);
    console.log(`${highestCourse.name} was the highest: ${highestCourse.average}`); // highest
}
average(arrayOfObjects);

/*Imagine that you work currently as an HR manager in a company that wants to hire developers. The prerequisites for hiring someone is to know 3 of the 5 following programming languages. PHP, JavaScript, Ruby, Python and or Java.
If the candidate has at least 3 of these 5 skills then he should be hire. 
Create an array that holds the prerequisites. And a different array that holds every candidate's skills. Write a function so it can be re-usable for multiple pre-requisites and multiple candidates at the same time.
Create an empty array to store the full name of the ones that got hired.
If the guy is hired, push his name to the employed ones array. At the end this array is going to contain the names for every person that got hired.
Hint: You may want to use the "includes" array method, which allows you to check if a specific value is included into an array or not and returns a boolean value.*/
let prerequisites = ['PHP', 'JavaScript', 'Java', 'Python', 'Ruby'];
prerequisites.reverse();
console.log(prerequisites);
let candidates = [{
        fullName: 'Plamen',
        skillSet: ['JavaScript', 'Ruby', 'R']
    },
    {
        fullName: 'Aghy',
        skillSet: ['JavaScript', 'Laravel', 'Delphi']
    },
    {
        fullName: 'Martina',
        skillSet: ['Java', 'JavaScript', 'PHP']
    }
];

function hiringManager(prerequisites, candidates) {
    let hiredPeople = [];
    candidates.forEach(candidate => {
        for (let i = 0; i < prerequisites.length; i++) {
            if (candidate.skillSet.includes(prerequisites[i])) {
                if (candidate.includedSkills) {
                    candidate.includedSkills++;
                } else {
                    candidate.includedSkills = 1;
                }
            }
        }
    });
    console.log(candidates);
    hiredPeople = candidates.filter(candidate => {
        return (candidate.includedSkills >= 3)
    });
    console.log(hiredPeople);
    return hiredPeople;
}

hiringManager(prerequisites, candidates);