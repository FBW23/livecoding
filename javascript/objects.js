const newNumber = new Number();
const newBoolean = new Boolean();
const myString = new String();

const newArray = new Array(); // = []; create empty array 
console.log(newArray);
console.log(typeof (newArray));
console.log(Array.isArray(newArray));

const newString = 'hello world'; // instantly created new String 
console.log(Array.isArray(newString));
const newStringArray = newString.split('');
console.log(Array.isArray(newStringArray));
console.log(newStringArray);
console.log(newString);
// how to make an Object (which is not an array!)
const myObject = new Object();
const shortObject = {
    key1: true,
    key2: 'value',
    key3: 123
};
console.log(myObject);
console.log(shortObject);
console.log(Array.isArray(shortObject));
console.log(typeof (shortObject));
console.log(shortObject['key2']); // Access bracket notation with strings as a key 
console.log(typeof (shortObject['key2']));

const martina = {
    name: 'Martina Freundorfer',
    age: 35,
    homeTown: 'Munich',
    married: false
};
console.log(martina['age']); // one option: bracket notation myObject['key']
console.log(martina.age); // second option: dot notation myObject.key

function volumeOfBox(sizes) {
    //let volume = sizes['width'] * sizes['height'] * sizes['length'];
    let volume = sizes.width * sizes.height * sizes.length;
    return volume;
}

console.log(volumeOfBox({
    width: 2,
    length: 5,
    height: 1
})); // ➞ 10

console.log(volumeOfBox({
    width: 4,
    length: 2,
    height: 2
})); // ➞ 16

console.log(volumeOfBox({
    width: 2,
    length: 3,
    height: 5
})); // ➞ 30




function hasKey(obj, key) {
    if (Object.keys(obj).includes(key)) { // Object.keys turns all keys into an array (works for values as well - in that case it would be Object.values())
        return true;
    } else {
        return false;
    }
}
// Examples
console.log(hasKey({
    a: 44,
    b: 45,
    c: 46
}, "d"));
// ➞ false
console.log(hasKey({
    craves: true,
    midnight: true,
    snack: true
}, "morning"));
// ➞ false
console.log(hasKey({
    pot: 1,
    tot: 2,
    not: 3
}, "not"));
// ➞ true

function spaceWeights(planetA, weight, planetB) {
    const PLANET_LIST = {
        Mercury: 3.7,
        Venus: 8.87,
        Earth: 9.81,
        Mars: 3.711,
        Jupiter: 24.79,
        Saturn: 10.44,
        Uranus: 8.69,
        Neptune: 11.15
    };
    return +((weight / PLANET_LIST[planetA] * PLANET_LIST[planetB]).toFixed(2));

}

console.log(spaceWeights("Earth", 1, "Mars")); // ➞ 0.38
console.log(spaceWeights("Earth", 1, "Jupiter")); // ➞ 2.53
console.log(spaceWeights("Earth", 1, "Neptune")); // ➞ 1.14


const howMuchIsOneWord = (word) => {
    let sum = 0;
    const ALPHABET = '_abcdefghijklmnopqrstuvwxyz';
    let currentChar, currentNumber;
    // console.log(ALPHABET.length); // 27 
    for (let i = 0; i < word.length; i++) {
        currentChar = word.charAt(i).toLowerCase(); // H
        // search in Array? indexOf() => position where it finds first
        currentNumber = ALPHABET.indexOf(currentChar); // 8
        sum += currentNumber;
        // console.log(sum);
    }
    return sum;
};
console.log(howMuchIsOneWord('World'));

// 5. Word Ranking. Create a function that takes a string of words and returns the highest scoring word. Each letter of a word scores points according to it's position in the alphabet: a = 1, b = 2, c = 3, etc.The returned string should only contain alphabetic characters (a-z). Preserve case in the returned string (see 4th example above). Examples:

const wordRank = (sentence) => {
    let word = '';
    let newArray = new Array();
    const myArray = sentence.split(' ');
    for (let i = 0; i < myArray.length; i++) {
        newArray.push(howMuchIsOneWord(myArray[i]));
        console.log(newArray);
    }
    let biggestNumber = Math.max(...newArray);
    //console.log(biggestNumber);
    let position = newArray.indexOf(biggestNumber);
    //console.log(position);
    word = myArray[position];
    //console.log(word);
    return word;
};

console.log(wordRank("The quick brown fox.")); // ➞ "brown"
console.log(wordRank("Nancy is very pretty.")); //  ➞ "pretty"
console.log(wordRank("Check back tomorrow, man!")); //  ➞ "tomorrow"
console.log(wordRank("Today is Wednesday.")); // ➞ "Wednesday"