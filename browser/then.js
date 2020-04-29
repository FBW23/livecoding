const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer is set to false to represent an unsuccessful response from a server
    let responseFromServer = false;

    if (responseFromServer) {
        resolve("We got the data");
    } else {
        reject("Data not received");
    }
}).then(result => { // always asynchronous
    console.log(result);
}).catch(error => { // always asynchronous
    console.log(error);
    return 'hello then!';
}).then(result => { // always asynchronous
    console.log(result);
});

try {
    for(name of names) {
        console.log(name);
    }
} catch (er) {
    console.warn(er);
} finally {
    document.write('You will now be redirected to our home page regardless!');
}

console.log(10);
// synchronous code === blocking operations
let sitsOnTheIronThrone = 'Cersei Lannister';
console.log(sitsOnTheIronThrone);

let changeRuler = (name) => {
    setTimeout(() => { // asynchronous function
        sitsOnTheIronThrone = name;
        console.log(sitsOnTheIronThrone);
        setTimeout(() => { // asynchronous function
            sitsOnTheIronThrone = 'The nightking';
            console.log(sitsOnTheIronThrone);
            // CALLBACK HELL
        }, 5000); // 5 seconds
    }, 5000); // 5 seconds
}

changeRuler('Danny');

//changeRuler('The nights King');

