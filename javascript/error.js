// RUNTIME ERROR 
// User should put three numbers
const myArray = [1, 2]; // length -1 = 1
const ArrayIsTooShortError = new Error('Array Is Too Short Error');
const UserArrayIsTooShortError = new Error('Please provide three numbers like [23, 42, 53]');
console.log(typeof (ArrayIsTooShortError));

// Preventing Runtime Errors from stopping executing the code 
try {
    if (myArray[2]) {
        console.log(myArray[2]); // logical Error undefined
    } else {
        //throw `${ArrayIsTooShortError} [${myArray}]`;
        throw `${UserArrayIsTooShortError}. You provided: [${myArray}]`;
    }

    callAFunctionNotExisting(); // Runtime error

} catch (e) {
    console.error(e);
    //alert(e);
    // expected output: ReferenceError: nonExistentFunction is not defined
    // Note - error messages will vary depending on browser
}