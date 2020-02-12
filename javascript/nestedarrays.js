const array = ['hello', 'world']; // string array
const nested = [array];
console.log(nested);



const days31 = [];
for (let i = 1; i < 32; i++) {
    days31.push(i);
}
console.log(days31);

const days30 = [];
for (let i = 1; i < 31; i++) {
    days30.push(i);
}
console.log(days30);

const days28 = [];
for (let i = 1; i < 29; i++) {
    days28.push(i);
}
console.log(days28);

// const year = [];
// for (let i = 1; i < 13; i++) {
//     // three cases 
//     switch (i) {
//         case 1:
//             year.push(days31);
//             break;
//         case 2:
//             year.push(days28);
//             break;
//         case 3:
//             year.push(days31);
//             break;
//         case 4:
//             year.push(days30);
//             break;
//         case 5:
//             year.push(days31);
//             break;
//         case 6:
//             year.push(days30);
//             break;
//         case 7:
//             year.push(days31);
//             break;
//         case 8:
//             year.push(days31);
//             break;
//         case 9:
//             year.push(days30);
//             break;
//         case 10:
//             year.push(days31);
//             break;
//         case 11:
//             year.push(days30);
//             break;
//         case 12:
//             year.push(days31);
//             break;
//         default:
//             console.log('Not a valid month');
//     }
// }
// console.log(year);

// simpler version with two nested loops??? 
const simpleYear = [];
for (let month = 1; month < 13; month++) { // month
    const currentMonth = [];
    for (let day = 1; day < 32; day++) { // day
        if (month === 2 && day === 29) {
            break;
        } else if (day === 31 && (month === 4 || month === 6 || month === 9 || month === 11)) {
            break;
        }
        currentMonth.push(day); // easiness every month has 31 days
    }
    simpleYear.push(currentMonth);
}
console.log(simpleYear);

// joao birthday 5th of august 
console.log(simpleYear[7][4]); // array starts counting at 0, thats why we need to decrement!

// please access your own birthday now! [month-1] [day -1]


const months = [];
for (let i = 1; i < 13; i++) {
    months.push(i);
}
console.log(months);

const object = {
    hello: 'world'
}; // string object
const nestedObject = {
    object
};
console.log(nestedObject);

const unpackedObject = {
    ...object
};
console.log(unpackedObject);

const curlyObject = {
    ...object
};
console.log(curlyObject);