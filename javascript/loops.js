let n = 0;

//while (n < -Infinity) {
while (n > -100) {
    console.log('Beginning of the loop ' + n);
    n--;
    console.log('End of the loop ' + n);
}

console.log(n);
// expected output: 3

let m = 0;
let x = 0;

while (m < 3) {
    m++; // increment
    x = x + m; // addition x += m;
}
console.log(x);


let result = "";
let i = 0;

do {
    i = i + 1; // increment i++;
    result += i; // result += i;
    //console.log(i);
} while (i < 5); // condition is checked at the end
// do while runs at least once! 

console.log(result);
// expected result: "12345"

do {
    i++;
    console.log(i);
} while (true);