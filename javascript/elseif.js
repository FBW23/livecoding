let christmas = true;
let newYearsEve = false;
let decoration;

if (christmas) {
    decoration = 'Christmas Decoration';
} else if (newYearsEve) {
    decoration = 'NYE';
    console.log(decoration);
} else {
    decoration = null;
}

console.log(decoration);


// Expected output: Christmas Eve

// some time later....
christmas = false;
newYearsEve = true;

if (christmas) {
    decoration = 'Christmas Decoration';
} else if (newYearsEve) {
    decoration = 'NYE';
} else {
    decoration = null;
}
console.log(decoration);
// Expected output: NYE

// some time later.... January?
christmas = false;
newYearsEve = false;

if (christmas) {
    decoration = 'Christmas Decoration';
} else if (newYearsEve) {
    decoration = 'NYE';
} else {
    decoration = null;
}
console.log(decoration);
// Expected output: null

// ELSE IF IS TESTING MULTIPLE CONDITIONS! (>= 1 condition)
// NOT POSSIBLE WITH THE TERNARY ANYMORE! (two cases only = 1 condition)

var expr = 'Mangoes';
switch (expr) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Papayas':
  case 'Mangoes':
    console.log('Mangoes and papayas are $2.79 a pound.');
    // expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  case 'Kiwi': 
    console.log('Kiwis are 1 Euro');
    break;
  default:
    console.log('Sorry, we are out of ' + expr + '.');
}

// Make a calendar which tells the month! 
let month; 

switch(month) {
    case 1:
        console.log('January');
        break;
    case 2: 
        console.log('February');
        break;
    case 3: 
        console.log('March');
        break;
    case 4: 
        console.log('April');
        break;
    case 5: 
        console.log('May');
        break;
    case 6: 
        console.log('June');
        break;
    case 7:
        console.log('July');
        break;
    case 8: 
        console.log('August');
        break;
    case 9: 
        console.log('September');
        break;
    case 10: 
        console.log('October');
        break; 
    case 11: 
        console.log('November');
        break;
    case 12: 
        console.log('December');
        break;
    default: 
        console.log('Error! Not a valid month!');
}


// // We will switch the if else cases into a switch case statement! 
// if (month === 1) {
//     console.log('January');
// } else if (month === 2) {
//     console.log('February');
// } else if (month === 3) {
//     console.log('March');
// } else if (month === 4) {
//     console.log('April');
// } else if (month === 5) {
//     console.log('May');
// } else if (month === 6) {
//     console.log('June');
// } else if (month === 7) {
//     console.log('July');
// } else if (month === 8) {
//     console.log('August');
// } else if(month === 9) {
//     console.log('September');
// } else if(month === 10) {
//     console.log('October');
// } else if(month === 11) {
//     console.log('November');
// } else { // must be 12 // default case
//     console.log('Happy New Year! #####');
// }