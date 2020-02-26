class AllSpecies {
    constructor(species, numOfEyes, numOfLegs, hasTail) {
        this.species = species; // string
        this.numOfEyes = numOfEyes; // num
        this.numOfLegs = numOfLegs; // num
        this.hasTail = hasTail; // bool
    }
}
class Tiger extends AllSpecies {
    constructor(colorFur, eyeColor, region, eatMeat, name, age, height, length, gender) {
        super('Tiger', 2, 4, true);
        this.colorFur = colorFur; // string
        this.eyeColor = eyeColor; // string
        this.region = region; // string
        this.eatMeat = eatMeat; // boolean

        this.name = name; // string
        this.age = age; // number
        this.height = height; // number
        this.length = length; // number
        this.gender = gender; // string

        this.printColorFur = function () {
            return this.colorFur;
        }
    }
    roar = function () {
        return 'I am the best tiger, i make ROOOOARRR!!!';
    }
}
class SiberianTiger extends Tiger {
    constructor() {
        super('Black-White', 'blue', 'Siberia', false, ...arguments); //vegetarian
        // this.name = name; // string
        // this.age = age; // number
        // this.height = height; // number
        // this.length = length; // number
        // this.gender = gender; // string
    }
}
class BengalTiger extends Tiger {
    constructor(name, age, height, length, gender) {
        super('Orange-Black', 'brown', 'India', false, name, age, height, length, gender);
        // this.name = name; // string
        // this.age = age; // number
        // this.height = height; // number
        // this.length = length; // number
        // this.gender = gender; // string
    }
}
// create two tigers, one Siberian, one Bengal, let them roar! 
const richardParker = new BengalTiger('Richard Parker', 15, 82, 220, 'male');
console.log(richardParker.roar());
console.log(richardParker.printColorFur()); // Orange-Black

const theKnightsKing = new SiberianTiger('The Nights King', 990, 88, 204, 'White Walker');
console.log(theKnightsKing.roar());
console.log(theKnightsKing.printColorFur()); // Black-White
console.log(richardParker);
console.log(theKnightsKing);

// for...in OBJECT METHOD iteration over all keys one by one => ONLY KEY 
for (const key in theKnightsKing) {
    console.log(key); // keys
    //console.log(theKnightsKing.key); // <--- key is a variable, dot notation will not work!
    console.log(theKnightsKing[key]); // values, bracket notation needed!
}

let array = [1, 2, 3];
// for...of ARRAY METHOD : iteration over all values one by one => ONLY VALUES
for (const value of array) {
    console.log(value);
}

// lets use the for...in on the array? 
for (const key in array) {
    key++;
    console.log(key); // 0, 1, 2
} // does it make sense? not so much 

const groceries = ['chocolate', 'bananas', 'rice', 'beers', 'deodorant'];
const amount = [5, 5, 2, 6, 1];
const result = [];

// loop with indices 0, 1, 2, 3, 4
//      make an empty item array
//      push same parts of groceries & amount at the same indices
//      push to the result array


// print function:
// loop over the result
        // print new line with "buy" $amount "x of " $grocery 
        // two dimensional array [first][second]

