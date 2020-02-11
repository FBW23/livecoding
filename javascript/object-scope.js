console.log(typeof (Array));

// Object literal context, simple properties and methods mixed: 
const fatma = {
    // properties:
    name: 'Fatma',
    age: 14,
    // methods: 
    eat: function (food) {
        console.log('poop');
    },
    sleep: function () {
        console.log('snore');
    },
    breakThings: function () {
        console.log('poker face');
    },
    getAge: function () {
        return this.age; // get the current age 
    },
    setAge: function (newAge) {
        this.age = newAge; // set a new age depending on input
    },
    getInformation: function () { // function scope knows about the object scope 
        return `Hello, my name is ${this.name} and my age is ${this.age}`;
    },
    getInfo: () => `hello`, // no object scope available
    getLength: () => Object.keys(this).length // this is available 
};
console.log(fatma.age); // normal property
fatma.eat(); // method execution
fatma.sleep();
console.log(fatma.getAge()); // getter 
fatma.setAge(15); // setter
console.log(fatma.getAge()); // getter 
console.log(fatma.getInformation());
console.log(fatma.getInfo());
console.log(fatma.getLength());


const test = {
    x: 42,
    getX: function () {
        return this.x;
    }
}


const unboundGetX = test.getX;
console.log(unboundGetX()); // The function gets invoked at the global scope
// expected output: undefined

const boundGetX = unboundGetX.bind(test);
console.log(boundGetX());
// expected output: 42

// test.x = 23;
console.log(boundGetX());

//  1

const student = {
    firstName: "John",
    lastName: "Smith",
    class: 12,
    printDetails : function() {
        return `${this.firstName} ${this.lastName} is in class ${this.class}.`;
    }
};

console.log(student.printDetails());

// 2

const person = {
    firstName: "Jane",
    lastName: "Jackson",
    age: 25,
    job: "Teacher",
    city: "Berlin",
    printDetails() {
        return `${this.firstName} ${this.lastName} is a ${this.age} year old ${this.job} who lives in ${this.city}`;
    },
    // 3
    getLengthOfObject() {
        let size = 0;
        let key;
        for (key in this) {
            size++;
        }
        return size;
    }
}
console.log(person.printDetails());
console.log(person.getLengthOfObject());

const object = {
    a: 1,
    b: 2,
    c: 3
};

for (const property in object) {
    console.log(`${property}: ${object[property]}`);
}

// expected output:
// "a: 1"
// "b: 2"
// "c: 3"

let sum = 0;
// for...in loop = special loop for complex data types 
for (const key in object) {
    sum += object[key]; // sum up the values
}
console.log(sum);

// how many keys??? 
let count = 0;
for (const something in object) {
    count++;
}
console.log(count);

const array = Object.keys(object);
console.log(array);

// also arrays can use this
let string = '';
for (const index in array) { // always go over the full object/array from beginning to the end 
    string += array[index];
}
console.log(string);

// also strings can use this 
for (const i in string) {
    console.log('hello: ' + string.charAt(i));
}
// normal for always replacable by for...in!
for (let i = 0; i < array.length; i++) {}