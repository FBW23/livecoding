let a, b, rest; // declaring variables 
[a, b] = [
    [10], 20
]; // assign values to the variables 

console.log(a);
// expected output: 10

console.log(b);
// expected output: 20

[a, b, ...rest] = [10, [20, 30, 40], 50, 60, 70]; // assigning more than one value in one line
console.log(b);

console.log(...rest); // leftovers 
// expected output: Array [30,40,50]

// rest element must be last element

let x, y;
({
    x,
    y
} = {
    x: {
        inside: 10
    },
    y: [20]
}); // more theoratical approach
console.log(x); // 10
console.log(y); // 20

const object = {
    name: 'Martina',
    job: 'teacher',
    age: 23,
    cats: 2
};
let name, job, age, cats; // must be same property names 
({
    name,
    job,
    cats,
    age
} = object); // Destructuring 
// name = object.name; 
// job = object.job; 
// age = object.age;
// cats = object.cats;
console.log(name);
console.log(job);
console.log(age);
console.log(cats);

const sayHello = (bla) => {
    let name, age, cats;
    ({
        name,
        age,
        cats
    } = bla);
    return 'hello ' + name + ', how are you? You are ' + age + ' years old and have ' + cats + ' number of cats';
};
console.log(sayHello(object));

// Super practical for functions parameters = object destructuring !!!

const sayHello2 = ({
    name,
    age,
    cats
}) => { // here we need that really! 
    return 'hello ' + name + ', how are you? You are ' + age + ' years old and have ' + cats + ' number of cats';
};
console.log(sayHello2(object));

const sayHello3 = ({
    name,
    age,
    cats
}) => `hello ${name}, how are you? You are ${age} years old and have ${cats} number of cats`;
console.log(sayHello3(object));