/**11. XO Create a function that takes a string, checks if it has the same number of 'x's and 'o's and returns either true or false.

Notes:

Return a boolean value (true or false).
The string can contain any character.
When neither an x nor an o is in the string, return true.
Examples:

XO("ooxx") ➞ true
XO("xooxx") ➞ false
XO("ooxXm") ➞ true (case insensitive)
XO("zpzpzpp") ➞ true (returns true if no x and o)
XO("zzoo") ➞ false
XO(); ➞ true
*/

function XO(myString) {
    if (myString) { // nice to have
        // Matching
        let matchXs = myString.match(/x/gi); // searching for x
        let matchOs = myString.match(/o/gi); // searching for o 
        let allXs = 0;
        let allOs = 0;
        // Counting 
        if (matchXs) {
            allXs = matchXs.length; // flag: g is for search global
        }
        if (matchOs) {
            allOs = matchOs.length; // flag: i is for ignore case sensitivity
        }
        console.log(allXs);
        console.log(allOs);
        // Comparison
        if (allXs === allOs) {
            return true;
        } else {
            return false;
        }
    }
    return true; // problematic case nice is to have 
}
console.log(XO()); // problematic!
console.log(XO("ooxx")); // true
console.log(XO("ooxXm")); // true
console.log(XO("zpzpzpp")); // true
console.log(XO("zzoo")); //false


// Balasz Solution

const XO2 = (string2) => {
    let string = string2.toLowerCase();
    let x = 0;
    let o = 0;
    let firstO = string.indexOf('o');
    let firstX = string.indexOf('x');
    let match = false;
    for (let i = 0; i < string.length; i++) {
        if (firstO > -1) {
            o++;
            firstO = string.indexOf('o') + 1;
        }
        if (firstX > -1) {
            x++;
            firstX = string.indexOf('x') + 1;
        }
        // if (firstO > -1 && firstX > -1) {
        // o++;
        // x++;
        // firstO = string.indexOf('o') + 1;
        // firstX = string.indexOf('x') + 1;
        //}
    }
    //match = x === o;
    return match;
}


console.log(XO2("ooxx")); // true
console.log(XO2("ooxXm")); // true
console.log(XO2("zpzpzpp")); // true
console.log(XO2("zzoo")); //false

// Bendis Solution

function XO3(str) {
    const len = str.length;
    for (let sum2 = 1; sum2 <= len / 2; ++sum2) {
        if ((len % sum2 !== 0) || str[0] !== str[sum2]) {
            continue;
        }
        let i = 1;
        for (; i < sum2; ++i) {
            let j = 0;
            for (; j < len; j += sum2) {
                if (str[i] != str[j + i]) {
                    break;
                }
            }
            if (j !== len) {
                break;
            }
        }
        if (i === sum2) {
            return true;
        }
    }
    return false;
}
console.log(XO3('ooxx')); //true
console.log(XO3('xooxx')); //true
console.log(XO3('ooxXm')); //true
console.log(XO3('zpzpzpp')); //false
console.log(XO3('zzoo')); //false

function validateEmail(str) {
    let reg = /^[\w\.]+@\w+\.\w+$/;
    return str.match(reg) ? true : false;
}
console.log(validateEmail('asdasd@dmd.pl'));

// First Task: What do you want repeat next week? 
// Second Task: Edabit.com