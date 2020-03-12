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
    if (event.keyCode === 13) { // 13 enter Key?
        newsletterBox.style.display = 'block';
    }
};

document.addEventListener('keydown', hideFunction);
document.addEventListener('keyup', showFunction);