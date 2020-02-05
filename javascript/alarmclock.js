// Find all numbers where you have three in a row :) 
let numberOne, numberTwo, numberThree, numberFour, counter = 0;
for (let i = 1; i < 13; i++) { // hour loop 
    numberOne = Math.floor(i / 10); // leading hour
    numberTwo = i % 10; // last hour
    for (let j = 0; j < 60; j++) { // minute loop 
        numberThree = Math.floor(j / 10); // leading minute
        numberFour = j % 10; //last minute  
        if (numberOne === numberTwo && numberTwo === numberThree || 
            numberTwo === numberThree && numberThree === numberFour) {
            console.log(`${numberOne}${numberTwo}:${numberThree}${numberFour}`);
            counter++;
        }
    }
}
console.log(counter);
console.log(counter*2);

let counter2 = 0;
console.log(`test ${counter2 -1}`);
console.log(`test ${counter2 +1}`);
console.log(`test ${++counter2}`);
console.log(`test ${--counter2}`);
console.log(`test ${counter2++}`);
console.log(`test ${counter2--}`);