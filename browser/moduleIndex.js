//import { myFunction, myModule } from './module.js';
// import <namespace> from <path> 
// IF WE WANT TO HAVE EVERYTHING
// import * as <namespace> from <path>
// IMPORT SHOULD COME IN THE BEGINNING
import * as modules from './module.js';
// import balasz from './module.js';

document.modules = modules; 

// This shows how it works! 
document.showImport = function showImport () {
    modules.myFunction();
}

modules.default; // default

modules.myFunction();
console.log(modules.myModule2);