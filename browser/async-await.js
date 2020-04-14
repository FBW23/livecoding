// function a (callback) {
//     setTimeout( function() {
//         console.log( 'result of a()');
//         callback();
//     }, 1000); // 1 second 
    
// }

// function b (callback) {
//     setTimeout( function() { // blocking code !!!
//         console.log( 'result of b()');
//         callback();
//     }, 500); // 1/2 second 
// }

// function c (callback) {
//     setTimeout( function() {
//         console.log( 'result of c()');
//         callback();
//     }, 200); // 1,2 second 
// }

// // CALLBACK HELL === NOW WE HAVE IT!!! 
// a(() => {
//     console.log(' a() is done!');
//     b(() => {
//         console.log(' b() is done!');
//         c(() => console.log(' c() is done!'));
//     });

// });


// SEQUENTIAL == ONE AFTER THE OTHER == SYNCHRONE

// REWRITE WITH PROMISE

const myPromise = new Promise((resolve, reject) => {
    resolve('success');
    // reject('error');
});

// myPromise
// .then(successCallback)
// .catch(errorCallback)
//.finally(finallyCallback)


// const promiseA = new Promise((resolve, reject) => {
//     console.log('Creating promise');
//     // setTimeout( function() { // BLOCKING CODE :( 
//         resolve( 'result of a()'); // RETURNs a payload (optional)
//         //reject('something bad happend a()');
//     // }, 1000); // 1 second 

//     console.log('Exiting promise executor');
// });

// const promiseA = Promise.resolve('result of a()'); // LATE COMER! 

const promiseA = new Promise ((resolve, reject) => { // pending!`????
    i++; // i is not defined => reject(errormessage)
    setTimeout(() => {
        resolve(i); // resolved state 
    }, 1000); // resolve after 1 second
});

// Normal flow
console.log('I am a sync job');

promiseA
.then((result) => { // resolved state
    console.log('promiseA success: ', result);
}).catch((error) => { // rejected state
    console.error('promiseA error: ', error); // error is shown... but!
}).finally(() => { // fulfilled state 
    console.log('a() is done!'); // its Still running! 
});

console.log('I am a good sync job');
console.log('I am a awesome sync job too');
