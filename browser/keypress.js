const newsletterBox = document.querySelector('#newsletter');
//console.log(newsletterBox);
const hideFunction = () => {
    // console.log('keydown');
    // console.log(event);
    // debugger
    if (event.keyCode === 27) { // 27 equals the escape key
        newsletterBox.style.display = 'none';
    }
};
const showFunction = () => {
    console.log(event.target);
    if (event.keyCode === 13) { // 13 enter Key?
        newsletterBox.style.display = 'block';
    }
};
// better than on the document only
document.body.addEventListener('keydown', hideFunction);
document.body.addEventListener('keyup', showFunction);

const form = document.querySelector('form');

const mySubmit = () => {
    // stop the default behaviour of reloaded
    event.preventDefault();
    console.log('You entered the email adress ' + event.target.elements['email'].value);
}

form.addEventListener('submit', mySubmit);

const myReset = () => {
    // stop the default behaviour of reloaded
    event.preventDefault();
    console.log('hello reset');
}

form.addEventListener('reset', myReset);