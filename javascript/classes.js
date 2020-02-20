class Animal {
    constructor(name, legs) {
        this.name = name;
        this.age = 15; // standard age predefined
        this.legs = legs; // fixed definition 
        this.country = 'Turkish'; // just as showcase 
    }
    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}

class Squirrel extends Animal {
    constructor(name, legs, nuts) {
        super(name, legs); // save side 
        this.nuts = nuts;
    }
    // 1. call the super constructor and add some more features
    // 2. let it speak with its own voice
    // 3. make a method which is very special to your animal 
}

const scratchy = new Squirrel('Scratchy', 4, 'Mandel');
console.log(scratchy);
console.log(scratchy.legs);
// debugger; Keyword 


class Cat extends Animal { // subclasses
    // define our class in details
    constructor(name, age, weight) {
        //this.name = name;
        super(name); // calling the parent constructor with this argument
        this.age = age;
        this.weight = weight;
    }

    // Prototype Methods
    eat() {
        console.log('Poop!');
    }
    sleep() {
        console.log('Snore!');
    }
    speak() { // overwrite super method
        console.log(`${this.name} purrs and meows!`);
    }
}

const fatma = new Cat('Fatma', 14, 4);

console.log(typeof (fatma));
console.log(fatma);
console.log(typeof (Cat));

fatma.eat();
fatma.sleep();
fatma.speak();

const tosun = new Cat('Tosun', 13, 6);
console.log(tosun.name); // 6
console.log(fatma.name); // 4

console.log('Which cat weighs more? ');
console.log(tosun.weight > fatma.weight ? 'Tosun younger but bigger': 'Fatma older and bigger');

//fatma.name = tosun.name; // this is possible 
//console.log(fatma.name); // but not normal ;-) 

const myDate = new Date();
console.log(myDate);
console.log(myDate.getFullYear());
console.log(myDate.getMinutes());

// No Hoisting available! Don't create an instance before defining the class
//const newRectangleBefore = new Rectangle();
class Rectangle {
    constructor(height = 0, width = 0) { // predefine with 0
        this.height = height; // define values from outside
        this.width = width;
    }

    // Getter
    get area() {
        return this.calcArea(); // call own method
    }

    // Methods
    calcArea() {
        return this.height * this.width; // use own properties 
    }
}
// subclass of Rectangle is Square
class Square extends Rectangle {
    constructor(length) {
        super(length, length);
    }
}

const mySquare = new Square(7);
console.log(mySquare.area); // 49 

// one Instance of the Rectangle Class 
const newRectangle = new Rectangle(3, 6);
console.log(newRectangle);
console.log(newRectangle.width);
// console.log(newRectangle.calcArea()); // calling the method directly
console.log(newRectangle.area); // call the getter instead of direct method
// change width from 10 to 20 
newRectangle.width = 20;
console.log(newRectangle);
//console.log(newRectangle.calcArea());
console.log(newRectangle.area);


class Balasz { // Abstraction 
    constructor(age) {
        this.age = age;
    }
    laugh(){
        console.log('Balasz laughes :)');
    }
}

// if every key/property/methods is the same 


class BalaszTwo extends Balasz {
    constructor(age, nationality) {
        super(age);
        this.nationality = nationality;
    }
}

const balasz = new BalaszTwo(20, 'Hungarian');
console.log(balasz);
