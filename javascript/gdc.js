let a = 1; //First number
let b = 14; //Second number 
let gcd = 1;
while (a !== b) {
    if (a > b) {
        a = a - b;
    } else {
        b = b - a;
    }
}
gcd = a;
console.log(gcd);