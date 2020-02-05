// Create a function named "geometricalSequence" and use a loop to print the following sequence: 
// 1 2 4 8 16 32 64 128 256
//Concatenate each value to a string and return a string.

function geometricalSequence() {
    let myString = '';
    for (let i = 1; i <= 256; i *= 2) {
        console.log(i);
        myString += i + ' ';
    }
    return myString;
}
console.log(geometricalSequence());

function mathPow(n) {
    let myString = '';
    for (let i = 0; i <= 8; i++) {
        console.log(Math.pow(n, i));
        myString += Math.pow(n, i) + ' ';
    }
    return myString;
}
console.log(mathPow(2));