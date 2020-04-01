//const _ = require('lodash'); pure javascript without html (only then!)
import _ from 'lodash'; // if we have a html <script type="module" src="dist/bundle.js">
// import / export is the correct way to do such things
// import <namespace> from <dependency name>
const createElement = message => {
    const element = document.createElement("div");
    element.innerHTML = message;
    debugger
    console.log(message);
    return element;
};
// Try out if comments are removed??? 
//document.body.appendChild(createElement("Webpack lives by the love of Open Source and you. Entering a new hot compilation :D "));

const test = _.defaults({ 'b': 1 }, { 'a': 3, 'b': 2 });
console.log(test);
// → { 'a': 1, 'b': 2 }
const partition = _.partition([1, 2, 3, 4], n => n % 4);
console.log(partition);
// → [[1, 3], [2, 4]]

console.log(_.isUndefined(_));
console.log(_.isString(34));
console.log(_.toInteger(3.14));
console.log(_.round(Math.PI));

// Adding modules to our project
// npm install <modules> (--save ) --save-dev
// --save will also write it in the package.json! 
// npm init / npm install 

// Dependency List: package.json
// "dependencies" vs. "devDevendencies"
// always vs. only during development