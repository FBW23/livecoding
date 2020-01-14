let varOne = 0;
for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
        //console.log(varOne);
        varOne++;
    }
}
console.log(varOne);

// is a sentence an alliteration or not? 
let isAlliteration = false; // helper value
const input = 'aello asd asdasdasd'; // Original Input should be saved
const myString = input.toLowerCase().trim(); //formatting into the correct string
const firstChar = myString.charAt(0); //p
console.log(firstChar);
for (let nextSpace = myString.indexOf(' '); nextSpace > -1; nextSpace = myString.indexOf(' ', nextSpace+1)) {
    console.log(myString.charAt(nextSpace + 1));
    if (firstChar === myString.charAt(nextSpace + 1)) {
        //console.log('It\'s a match! It could be an alliteration!');
        isAlliteration = true;
    } else {
        //console.log('It\'s not an alliteration!');
        isAlliteration = false;
        break;
    }
}
console.log('The given example "' + input + '" is an Alliteration: ' + isAlliteration);