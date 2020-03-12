const newsletterBox = document.querySelector('#newsletter');

//console.log(newsletterBox);

const myFunction = () => {
    // console.log('keydown');
    // console.log(event);
    // debugger
    if (event.keyCode === 27) { // 27 equals the escape key
        newsletterBox.style.display = 'none';
    }
};

document.addEventListener('keydown', myFunction);