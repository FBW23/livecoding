function isSpecialArrayConstantin(arr) {
    return arr.every((x, y) => x % 2 === y % 2);
}

function isSpecialNumber(previous, number, index) {
    //console.log(previous);
    //console.log(number);
    //console.log(index);
    let isIndexEven = index % 2 ? true : false; // boolean
    //console.log(isIndexEven);
    let isNumberEven = number % 2 ? true : false;
    //console.log(isNumberEven);
    return previous && (isIndexEven === isNumberEven);
}

function isSpecialArray(arr) {
    return arr.reduce(isSpecialNumber);
}

console.log([2, 7, 4, 9, 6, 1, 6, 3].reduce(isSpecialNumber)); // true
console.log([2, 7, 8, 8, 6, 1, 6, 3].reduce(isSpecialNumber)); // false
console.log([2, 2, 2, 2].reduce(isSpecialNumber)); //false /
/*
Test.assertEquals(isSpecialArray([2, 2, 2, 2]), false)
Test.assertEquals(isSpecialArray([2, 1, 2, 1]), true)
Test.assertEquals(isSpecialArray([4, 5, 6, 7]), true)
Test.assertEquals(isSpecialArray([4, 5, 6, 7, 0, 5]), true)*/


// Big O Notation = O(1) best case szenario :) 
function isFirstElementNull(arr) {
    return arr[0] === null; // one statement it will run the same time no matter how long the array is 
}

// Big O Notation = O(N) <== Worst case szenarion, if the value is in the last array item or not there at all, it will run as long as the length of the array = N
function containsValue(arr, value) {
    for (element in arr) {
        if (element === value) {
            return true;
        }
    }
    return false;
}

// Big O Notation = O(N²) // maximum run time would be the length of the array to the power of two 
function containsDuplicates(arr) {
    for (var outer = 0; outer < arr.length; outer++) {
        for (var inner = 0; inner < arr.length; inner++) {
            // Don't compare with self
            if (outer === inner) {
                continue;
            }
            if (arr[outer] === arr[inner]) {
                return true;
            }
        }
    }
    return false;
}

// Big O Notation O(2^N) // Worst of the worst case szenarios !!!
function fibonacci(number) {
    if (number <= 1) {
        return number;
    }
    return fibonacci(number - 2) + fibonacci(number - 1);
}

// Array.prototype.sort()

const months = ['March', 'Jan', 'Feb', 'Dec', 'May'];
months.sort();
console.log(months);
// expected output: Array ["Dec", "Feb", "Jan", "March"]

const array1 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array1);
// expected output: Array [1, 100000, 21, 30, 4]

// let temp = null;
// if (firstEl > secondEl) { // ascending
//     temp = secondEl;
//     secondEl = firstEl;
//     firstEl = temp;
// }
// const sortedArray = arr.map(() => {  
//         if (item > arr[item + 1]) {
//             arr[item + 1] = arr[item];
//             arr[item] = arr[item + 1];
//         }
// });
// return arr.sort();

function sortNumbers(firstEl, secondEl) {
    console.log('firstel: ' + firstEl);
    console.log('secondel: ' + secondEl);
    console.log(firstEl - secondEl);
    return firstEl - secondEl; // [1, 4, 21, 30, 100000]
}

const myArray = [11, 2, 22, 1];
console.log(myArray);
console.log(myArray.sort(sortNumbers));

// If sortNumber(a, b) is less than zero, b is given a lower index than a.
// If sortNumbers(a, b) returns zero, the order of a and b is unchanged.
// If sortNumbers(a, b) is greater than zero, b is given a higher index than a.