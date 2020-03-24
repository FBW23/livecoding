document.addEventListener('DOMContentLoaded', function () {

    const ul = document.querySelector('ul');
    const li = document.querySelector('li'); // take first LI ONLY 
    const myAlert = function () {
        alert('hey, you clicked on the ul !');
        console.log(event.currentTarget); // container which handles the event
        console.log(event.target); // originally clicked on item
    };
    const myAlertLi = function () {
        // stop the bubbling
        event.stopPropagation(); // ignored because useCapture!!! 
        alert('hey, you clicked on the li !');
        console.log(event.currentTarget); // container which handles the event
        console.log(event.target); // originally clicked on item
    };
    ul.addEventListener('click', myAlert, true); // useCapture boolean true
    // event.currentTarget = UL !== event.target
    li.addEventListener('click', myAlertLi); // useCapture default = false
    // event.currentTarget = LI === event.target

});

// DELEGATE EVENTS WITH USECAPTURE FROM PARENT TO CHILD 
// WE COME FIRST!!! FORCE IT FIRST COME FIRST SERVE ;) 

// DOMCONTENTLOADED? => IT WILL BE THROWN AS SOON AS DOM IS LOADED 

const myLoad = function () {
    prompt('How are you?');
}

document.addEventListener('DOMContentLoaded', myLoad, true);

// PROBLEMATIC IF WE ADD EVENTS DYMAMICALLY TO LISTS 
// PERFORMANCE ISSUES POSSIBLE!!!

// LI => UL => BODY => DOCUMENT => WINDOW
// BUBBLING TAKES PLACE UNTIL HANDLED BY ANY NODE IN BETWEEN
// EVENT LISTENERS WILL STOPP THE BUBBLING UP!!! 
// INNERMOST TO OUTERMOST ELEMENTS 

// EVENT.STOPPROPAGATION()
// METHOD TO STOP BUBBLING UP 

// EVENTS WHICH ARE DEFAULT
// FORM SUBMIT => TYPICAL "DEFAULT" CASE
// ALL FORMS WILL THROW AUTOMATICALLY A FORM SUBMIT EVENT
// IF WE CLICK ON A BUTTON INSIDE 
// IF WE ARE IN AND PRESS ENTER KEY 