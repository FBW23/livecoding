const vanillaOld = document.getElementById('vanilla');
const vanillaNew = document.querySelector('#vanilla');
console.log(vanillaOld); // HTML ELEMENT => ONLY ITSELF => only HTMLElement Methods!
console.log(vanillaNew); // NODE ELEMENT => incl CHILDREN => Node Element Methods possible 

console.log($()); // MULTI PURPOSE FUNCTION

// HOW TO SELECT THINGS IN JQUERY 
const jq = $('#vanilla');
console.log(jq);

const myClass = $('.myClass');
console.log(myClass);

const tagName = $('h3');
console.log(tagName);

// JQUERY ELEMENT = jQueryElement
// Does not distinguish between HTMLELement and NodeElement => all methods available 
// easier especially for beginners 

const callbackFunction = function() {
    console.log('hello call back!');
}

//myClass.addEventListener('click', callBackFunction); SAME AS 

// HOW TO ATTACH EVENTS
myClass.on('click', callbackFunction);
// and much more events... like? 
// keypress
// mouseover
// mousein
// mouseout... 
// load
// submit = HTTP POST/GET
// reset 

// DELEGATING EVENTS ? USECAPTURE NORMALLY DEFAULT FALSE, IF WE WANT WE CAN CHANGE IT TO TRUE 'i want to execute first'
//myClass.addEventListener('click', callBackFunction, true); delegated to children
const myH3Function = function (){
    console.log('hello h3');
}
const body = $('body');
body.on('click', '#h3', myH3Function);

const mySpanFunction = function () {
    console.log('span');
}

jq.on('click', 'span', mySpanFunction);