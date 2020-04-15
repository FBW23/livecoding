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

// const promiseA = new Promise ((resolve, reject) => { // pending!`????
//     i++; // i is not defined => reject(errormessage)
//     setTimeout(() => {
//         // pending
//         resolve(i); // resolved state 
//     }, 1000); // resolve after 1 second
// });

// // Normal flow
// console.log('I am a sync job');

// promiseA
// .then((result) => { // resolved state
//     console.log('promiseA success: ', result);
// }).catch((error) => { // rejected state
//     console.error('promiseA error: ', error); // error is shown... but!
// }).finally(() => { // fulfilled state 
//     console.log('a() is done!'); // its Still running! 
// });

// console.log('I am a good sync job');
// console.log('I am a awesome sync job too');


// Promise.reject('Reject DATA') // throw an error which leads to a catch
// .then((result) => {
//     console.log('[1] then', result) // won't be called
//     return "[1] then payload";
// })
// .finally(() => { // ALWAYS
//     console.log('[1] finally'); // first finally will be called
//     return "[1] finally payload";
// })
// .then((result) => {
//     console.log("[2] then", result); // won't be called
//     return "[2] then payload"; 
// })
// .catch((error) => {  // catching the thrown error from before!
//     console.log('[1] catch error ', error); // first catch will be called
//     return '[1] catch payload '; // this will throw a successfull event "resolved"
// })
// .catch((error) => {
//     console.log('[2] catch error ', error); // won't be called
//     return '[2] catch payload ';
// })
// .then((result) => { // catching the event "resolved" from before
//     console.log("[3] then", result); // will be called 
//     return "[3] then payload"; // this will throw a successfull event "resolved"
// })
// .finally(() => { // ALWAYS
//     console.log('[2] finally'); // will be called
//     return "[2] finally payload";
// })
// .catch((error) => {
//     console.log('[3] catch error ', error); // won't be called
//     return '[3] catch payload ';
// })
// .then((result) => { // catching the event "resolved" from before
//     console.log("[4] then", result); // is this called??? 
//     return "[4] then payload"; 
// });

// CHAINING HELL :D

// Promise.resolve('Fulfill DATA!')// throws an "successfull" event
// .then((result) => { // catch the successfull event
//     console.log('[1] then', result);

//     return new Promise( resolve => {
//         setTimeout(() => {
//             resolve('Nested promise data!');
//         }, 1000); // resolve after 1 second
//     }).then((data) => {
//          return `Inner promise data: ${data}`;
//     });
// })
// .then((result) => {
//     console.log('[2] then', result);
// })
// .catch((error) => {
//     console.log('[1] catch', error);
// });

// const a = () => new Promise(resolve => {
//     setTimeout(() => resolve('result of a()'), 1000); //1s delay
// });
// const b = () => new Promise(resolve => {
//     setTimeout(() => resolve('result of b()'), 500); //1/2s delay
// });

// const c = () => new Promise(resolve => {
//     setTimeout(() => resolve('result of c()'), 1100); //1.1s delay
// });

// a()
// .then((result) => {
//     console.log('a() success: ', result);

//     return b()
//     .then((result) => {
//         console.log('b() success: ', result);

//         return c()
//         .then((result) => {
//             console.log('c() success: ', result);
//         });
//     })
// })
// .catch((error) => {
//     console.log('a() error: ', error);
// });

// async function myFunction() {
//     const result = await new MyPromise();
//     console.log( result );
//  }
//  myFunction(); // returns a promise

 const a = () => new Promise(resolve => {
    setTimeout(() => resolve('result of a()'), 1000); //1s delay
});
const b = () => new Promise((resolve, reject) => {
    setTimeout(() => reject('result of b()'), 500); //1/2s delay
});

const c = () => new Promise(resolve => {
    setTimeout(() => resolve('result of c()'), 1100); //1.1s delay
});

const doJobs = async () => {
    // try {
        const resultA = await a();
        const resultB = await b();
        const resultC = await c();
    
        return [resultA, resultB, resultC];
    // }
    // catch(error) {
    //     return [null, null, null]; // still a successfull message!
    // }
}

doJobs()
.then((result) => {
    console.log('success: ' , result);
})
.catch((error) => {
    console.log('error: ' , error);
});

// normal flow
console.log('I am a sync operation!');