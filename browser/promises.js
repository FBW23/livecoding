let timeoutID;

function delayedAlert2() {
    console.log('hey, before the timeout!')
    timeoutID = window.setTimeout(console.log, 2 * 1000, 'That was really slow!');
    console.log('hey, after the timeout! Race condition!'); // not being blocked by the code before 
}

function clearAlert() {
    window.clearTimeout(timeoutID);
}

// new Promise(<function>), Promise.resolve() ==> Promise.then()
// MINIMUM to have a Promise! Success case 
var promise = new Promise(function (resolve, reject) {
    const x = "geeksforgeeks";
    const y = "geeksforgeeks";
    if (x === y) {
        resolve(); // MUST HAVE A THEN TOO!
    } else {
        reject(); // NICE TO HAVE, MUST HAVE A CATCH! 
    }
}).then(function () { // Good path
    console.log('Success, You are a GEEK');
}).catch(function () { // rejected 
    console.log('Some error has occured');
}).finally(function () { // executed finally
    console.log('okay, promise has finished!');
});// CHAINING ALL TOGETHER 


function delayedAlert() {
    console.log('hey, before the timeout!');
    timeoutID = new Promise(function(resolve) {
        console.log('during the promise!')
        // Setting 2000 ms time 
        window.setTimeout(resolve, 2000);
    }).then(function () { // Good path
        console.log('hey, after the timeout!'); // not being blocked by the code before 
    });
}
