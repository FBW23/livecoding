/* eslint-disable indent */
/* eslint-disable eol-last */
/* eslint-disable semi */
const inlineJavascript = 'hello world';
console.log(inlineJavascript);

console.log(window);
console.log({});

//const name = prompt('What is your name?'); // asking for information
//alert('Hello World ' + name); // giving information

// WET PRINCIPLE NOT OPTIMIZED :)
function game() {
    const randomNumber = Math.floor(Math.random() * 10 + 1);
    console.log(randomNumber);
    let inputNumber = prompt('Guess a number between 1 - 10:');
    let attempts = 1;
    //console.log(typeof(inputNumber));
    //console.log(typeof(randomNumber));
    if (randomNumber === parseInt(inputNumber)) {
        alert('Success, the number was ' + randomNumber + '! Attempts: ' + attempts);
    } else {
        attempts++;
        inputNumber = prompt('Nope, sorry!!! Try again:');
        if (randomNumber === parseInt(inputNumber)) {
            alert('Success, the number was ' + randomNumber + '! Attempts: ' + attempts);
        } else {
            attempts++;
            inputNumber = prompt('Nope, sorry!!! Try again:');
            if (randomNumber === parseInt(inputNumber)) {
                alert('Success, the number was ' + randomNumber + '! Attempts: ' + attempts);
            } else {
                alert('Nope, sorry!!! the correct number was ' + randomNumber);
            }
        }
    }
}
console.log(document);
console.log(document.head);
console.log(document.title);
// get html nodes 
const title = document.getElementById('websiteTitle');
console.log(title);
// changes the old css 
title.style.color = '#123123';

// get one link and change color
const link = document.querySelector('a');
console.log(link);
link.style.color = 'purple';


// get all the links and change colors
const links = document.querySelectorAll('a'); // get an array of all the links
console.log(links);
for (let i = 0; i < links.length; i++) {
    links[i].style.color = 'hotpink';
}
