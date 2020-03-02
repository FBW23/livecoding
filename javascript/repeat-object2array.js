let myObject = {
    name: 'Martina',
    age: 35,
    cats: 2,
    married: false
};

// convert all the values to an array [['name', 'Martina'], ['age', 35], ['cats', 2], ['married', false]];
// starting point ???  split/join is only for strings 
console.log(myObject);
let outerBox1 = []; // new Array();
//console.log(Object.keys(myObject).length);
for (let i = 0; i < Object.keys(myObject).length; i++) {
    let innerBox = [];
    // go crazy
    innerBox.push(Object.keys(myObject)[i]);
    innerBox.push(Object.values(myObject)[i]);
    //console.log(Object.keys(myObject));
    //console.log(Object.values(myObject));
    outerBox1.push(innerBox);
}
console.log(outerBox1);

let outerBox2 = Object.entries(myObject); // new Array();
outerBox2[3][1] = true; // change married status to true
console.log(outerBox2);
//console.log(myObject);

let outerObject = Object.fromEntries(outerBox2);
console.log(outerObject);

const object1 = {
    a: 'somestring',
    b: 42
};

for (const [key, value] of Object.entries(object1)) {
    console.log(`Buy ${key} times ${value} groceries`);
}


function doctorHello() {
    // setIntervall & setTimeOut 
    console.log('Hello, I am your doctor!');
}

function phoneMyDoctor(callBackFunction) {
    console.log('By the way, I will call my doctor now!')
    // find out the number
    callBackFunction(); // call the doctor
    // do things after the call
    console.log('Okay, I have talked to the doctor now!');
}

phoneMyDoctor(doctorHello);