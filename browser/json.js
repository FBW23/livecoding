'use strict'

const myGlobal = 'hello world';

// JSON is JavaScript Objects in text
const myObject = {
  name: "John",
  lastName: "Smith", // string
  isAlive: true, // boolean
  age: 27 // number
  // "address": {
  //     "streetAddress": "21 2nd Street",
  //     "city": "New York",
  //     "state": "NY",
  //     "postalCode": "10021-3100"
  // },
  // "phoneNumbers": [{
  //         "type": "home",
  //         "number": "212 555-1234"
  //     },
  //     {
  //         "type": "office",
  //         "number": "646 555-4567"
  //     }
  // ],
  // "children": [],
  // "spouse": null
};
console.log(myObject);

// Convert an Object to an Json with JSON.stringify(<object>)
// FROM OBJECT TO JSON!
const myJSON = JSON.stringify(myObject);
console.log(myJSON);

// Parsing an JSON into an Object
// FROM JSON TO OBJECT
const myNewObject = JSON.parse(myJSON);
console.log(myNewObject);

console.log(myObject === myNewObject);

// JSON pitfalls: Be aware!
// Strict notation! All keys needs to be a string ! Validate it after creation!
// https://jsonlint.com/
// Sometimes JSON.parse() causes runtime errors! Try/catch block!!! 

// Better error handling
const promise = new Promise(function (resolve, reject) {
  try {
    const newObject = JSON.parse(myJSON); // throw error? maybe? 
    resolve(newObject); // MUST HAVE A THEN TOO!
  } catch (e) {
    reject(e); // NICE TO HAVE, MUST HAVE A CATCH! 
  }
}).then(function (newObject) { // Good path
  console.log('Success, You are a GEEK ' + newObject.age);
}).catch(function (error) { // rejected 
  console.log('Some error has occured ' + error);
}); // CHAINING ALL TOGETHER 