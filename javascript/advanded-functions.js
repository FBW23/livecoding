function printOrigin(name = 'Alice', country = 'US') { // default values
    return console.log('Hello, my name is ' + name + ' and I am from ' + country);
}

printOrigin('Martina', 'Germany');
printOrigin('Martina');
printOrigin();

printOrigin(undefined, 'Brasil'); // undefined gets default values
printOrigin(null, 'Italy'); // null is already overwriting default 

// default parameters 
// function name(<parameter> = <default value>) {...}

// if I don't know how many arguments will come... i can use ...args
function printNames(...args) {
    return console.log('Hello' + args + '!');
}
printNames(' Plamen', ' Nicolo', ' Julien', ' Julia');

// Bracket Notation for arguments: first args[0], second args[1], third args[2]
function printNamesIndividually(...args) {
    for (let i = args.length - 1; i > -1; i--) {
        console.log('Hello' + args[i] + '!');
    }
}
printNamesIndividually(' Constantine', ' Nagster', ' Balasz', ' Joao');