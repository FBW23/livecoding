let applesInTheBox = 0;
let applesOnTheTable = 0;

// applesInTheBox--;
// applesOnTheTable++;

// applesInTheBox--;
// applesOnTheTable++;

// applesInTheBox--;
// applesOnTheTable++;

// applesInTheBox--;
// applesOnTheTable++;

// applesInTheBox--;
// applesOnTheTable++;

// applesInTheBox--;
// applesOnTheTable++;

// applesInTheBox--;
// applesOnTheTable++;

// applesInTheBox--;
// applesOnTheTable++;

// applesInTheBox--;
// applesOnTheTable++;

// applesInTheBox--;
// applesOnTheTable++;

while (applesInTheBox > 0) { // as long as there are apples in the box
    applesInTheBox--;
    applesOnTheTable++;
    console.log(applesInTheBox); // expected output: 0
    console.log(applesOnTheTable); // expected output: numbers of apple which have been in the box
}


// do {
//     applesInTheBox--; // decrement
//     applesOnTheTable++; // increment
//     console.log(applesInTheBox); // expected output: 0
//     console.log(applesOnTheTable);
// } while (applesInTheBox > 0)

let str = "";

// for (define iterator; condition; increment iterator)
for (let i = 0; i < 9; i++) {
    str = str + i;
    console.log(str);
    console.log(i);
}
// console.log(i); // Runtime error because i is only available in the block scope of the loop
// expected output: "012345678"

let n = 0;
while (n < 3) {
    let blockVar = 'hello';
    console.log(n);
    n++;
}
console.log(n);
// console.log(blockVar); // not available outside of the block!

//for(definition of iterator; condition; increment of iterator) {...}
for (let m = 0; m < 3; m++) {
    console.log(m);
    // more code
}
console.log(n);
//console.log(m); // not available outside of the block!