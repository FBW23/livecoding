function capitalizeFirstLetter(myString) {
    let capitalizedString = myString.charAt(0).toUpperCase();
    for (let i = 1; i < myString.length; i++) {
        console.log(i);
        console.log(capitalizedString);
        if (myString.charAt(i) === ' ') { // if its empty we want to capitalize the next letter 
            capitalizedString += ' ' + myString.charAt(++i).toUpperCase();
            // copy the empty space & big next letter
        } else {
            capitalizedString += myString.charAt(i); // copy // string concatenation
        }
    }
    return capitalizedString;
}
console.log(capitalizeFirstLetter('maria mary jones'));
console.log(capitalizeFirstLetter('john james smith'));