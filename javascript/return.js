let input = 0;
let output = ++input;
console.log(output);

const convert = (minutes) => {
    // calculate from minutes to seconds
    // minutes * 60 = seconds
    //console.log(minutes*60);
    return minutes*60;
};
const myOutput = convert(5); // expect 300 
console.log(myOutput);

// lazy developers want it shorter again! 
// arrow function without explicit return
const convert2 = (minutes) => minutes*60; // implicite return 
const myOutput2 = convert2(100); // 6000 save it in a variable
console.log(myOutput2); // console.log that 

console.log(convert2(2)); // return directly

//const cubed3 = (a, b) => b.slice(0, a.length) === a ? true : false;
//console.log(cubed3( 'dfgh'));

const exercise11 = (string2) => {
    let match = false;
    let string = string2.toLowerCase();
    let numberOfO = 0;
    let numberOfX = 0;
    let firstMatchOfO = string.indexOf('o');
    let firstMatchOfX = string.indexOf('x');
    for (let i = 0; i < string.length; i++) {
        if (firstMatchOfO > -1) {
            numberOfO++;
            firstMatchOfO = string.indexOf('o', firstMatchOfO)+1;
            //console.log(string.indexOf('o', firstMatchOfO)+1);
        }
        if (firstMatchOfX > -1) {
            numberOfX++;
            firstMatchOfX = string.indexOf('x', firstMatchOfX)+1;
            //console.log(string.indexOf('x', firstMatchOfX)+1);
        }
    }
    match = numberOfO === numberOfX;
    return match;
}
console.log(exercise11('xxoo')); //true
console.log(exercise11('xooxx')); //false
console.log(exercise11('ooxXm')); //true
console.log(exercise11('zpzpzpp')); // 
console.log(exercise11('zzoo'));






