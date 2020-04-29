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
    for (name of names) {
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
//console.log(sitsOnTheIronThrone);

let changeRuler = (name) => {
    setTimeout(() => { // asynchronous function
        sitsOnTheIronThrone = name;
        console.log(sitsOnTheIronThrone);
        setTimeout(() => { // asynchronous function
            sitsOnTheIronThrone = 'Jon Snow';
            console.log(sitsOnTheIronThrone);
            setTimeout(() => { // asynchronous function
                sitsOnTheIronThrone = 'Euron Greyjoy';
                console.log(sitsOnTheIronThrone);
                setTimeout(() => { // asynchronous function
                    sitsOnTheIronThrone = 'Jaimie Lannister';
                    console.log(sitsOnTheIronThrone);
                    setTimeout(() => { // asynchronous function
                        sitsOnTheIronThrone = 'The Nightking';
                        console.log(sitsOnTheIronThrone);
                        // CALLBACK HELL
                    }, 1000); // 1 seconds
                    // CALLBACK HELL
                }, 2000); // 2 seconds
                // CALLBACK HELL
            }, 2000); // 2 seconds
            // CALLBACK HELL
        }, 3000); // 5 seconds
    }, 5000); // 5 seconds
}

//changeRuler('Danny');

//changeRuler('The nights King');

// synchronous code === blocking operations
// At the current moment, Cersei sits on the iron throne!
let currentRuler = 'Cersei Lannister';
console.log(currentRuler);
// Reutnr a new Promise object instead! Define in resolve the data that will be passed
let changeRuler2 = ruler => {
    let newRuler = new Promise((resolve, reject) => {
        // PENDING STATE
        setTimeout(() => { // asynchronous function
            if(ruler === 'Jon Snow') {
                reject('The ruler cannot be a bastard!');
                // REJECTED STATE, VALUE === "The ruler cannot be a bastard"
            }
            resolve(ruler);// RESOLVED STATE, VALUE ==="DANNY"
        }, 3000); // 3 seconds
    });
    console.log(newRuler); //logging the PROMISE
    return newRuler; // must return Promise!
}// Build a promise chain
changeRuler2('Danny')
.then(function (data) {
    console.log(data);
    return changeRuler2('Jon Snow');
})// chaining thens
.then(function(data){
    console.log(data);
    return changeRuler2('Euron Greyjoy');
}).then(data => {
    console.log(data);
    return changeRuler2('Jaimie Lannister');
})
.then(function (data) {
    console.log(data);
    return changeRuler2('Nightking');
})
.then(data => {
    console.log(data);
})
.catch(error => {
    console.warn(error); // REJECTED STATE, VALUE ="The ruler cannot be a bastard"
});
console.log(currentRuler);

// Make a request to fetch a local file!
// in this case fetch from the images folder the home.jpg
// Don't forget that fetch returns a promise!!!
fetch('../images/home.png')
    .then(imageResponse => {
        // See the response object
        console.log(imageResponse);
        // Create the image element, put the url of the response as a source!
        let newImage = document.createElement('IMG');
        newImage.src = imageResponse.url;
        // Append the body to he HTML body
        document.body.appendChild(newImage);
    });

// Make a request to fetch weather forecast from a city, in this case Munich.
//
let authToken = '863793cc22941cea1aa6dfae08073bbf';
let cityToSearch = 'Munich';
let urlServiceAddress = `https://api.openweathermap.org/data/2.5/weather?q=${cityToSearch}&APPID=${authToken}`;
console.log(urlServiceAddress);

fetch(urlServiceAddress)
.then(weatherResponse => {
    console.log(weatherResponse);
    return weatherResponse.json();
}).then(weatherData  => {
    console.log(weatherData);
})