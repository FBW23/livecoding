const object = {
    hello: 'world'
};

Object.seal(object);
// still possible to change properties
object.hello = 'earth';
console.log(object);
// not possible to delete 
delete object.hello;
console.log(object);

object.world = 'hello';
console.log(object);

console.log(Object.isFrozen(object)); // false
console.log(Object.isSealed(object)); // true

const oldObject = { // reference by default 
    winter: 'cold',
    spring: 'sexy',
    summer: 'hot',
    autumn: 'orange'
};
Object.seal(oldObject); // this does not help
Object.freeze(oldObject); // this helps :) 
const newObject = oldObject; // link to the old reference
console.log(newObject);
newObject.spring = 'bunny'; // changes also the old Object 
console.log(newObject);
console.log(oldObject); // unwanted side effect !!!!

const thirdObject = newObject;
thirdObject.autumn = 'fall';
console.log(thirdObject);
console.log(newObject);
console.log(oldObject);

// Shallow cloning objects and arrays

// ... <-- the spread operator
const numbers = [1, 2, 3];
console.log(...numbers); // array becomes numbers

const objClone = { ...oldObject }; // makes a real clone of the object = shallow cloning
console.log(objClone); 
objClone.summer = 'i have been under the shower'; // this change is only on the new object
console.log(objClone);
console.log(oldObject);

const arrayClone = [...numbers]; // makes a real clone of the array = shallow cloning
arrayClone[0] = 5; // this change is only on the new array
console.log(arrayClone);
console.log(numbers);

// Deep cloning objects and array : recursive function 
// will go as deep as needed 
const food = ["Paella", "Rise with Chicken", "Bob"];
const drinks = ["Wine", "Beer", "Water"];
const newVariable = ([...food, ...drinks]).toString();
console.log(newVariable);
