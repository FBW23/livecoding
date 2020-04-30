// Make a request to fetch weather forecast from a city, in this case Munich.
//
let authToken2 = 'b844b2fa75300bd7fb228f3ac667c8f9';
// let cityToSearch = 'Munich';


// let urlServiceAddress = `https://api.openweathermap.org/data/2.5/weather?q=${cityToSearch}&APPID=${authToken}`;
// //console.log(urlServiceAddress);

// // Fetch returns a promise always
// fetch(urlServiceAddress)
// .then(weatherResponse => {
//     //console.log(weatherResponse);
//     return weatherResponse.json();// must parse it
//     // RETURNS ALSO A PROMISE!
// }).then(weatherData  => {
//     //console.log(weatherData);
// });

// Make a request to fetch weather forecast from a city, in this case Damascus.
//

let city = 'Damascus';
let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${authToken2}`;

let getWeather = async (url) => {
    try {
        let res = await fetch(url);// we are waiting until finished => returns a promise
        let data = await res.json(); // blocked until then => returns a promise
        console.log(data);
    } catch (error) {
        console.warn(error);
    }
}

getWeather(weatherUrl); // calling an asynchronous function => at the end
console.log('after'); // first !

const container = document.querySelector('.container');
const imageNames = ['home', 'bahnhof', 'syvota', 'athens'];

let makeFetch = collection => {
    let imagePromises = [];
    for (imageName of collection) {
        let promiseImage = new Promise((resolve, reject) => {
            resolve(fetch(`../images/${imageName}.jpg`));
        });
        imagePromises.push(promiseImage);
    }
    return Promise.all(imagePromises);
}

let fetchImages = async (collection) => {
    let allImages = await makeFetch(collection);
    for (image of allImages) {
        let newImage = document.createElement('IMG');
        newImage.src = image.url;
        container.appendChild(newImage);
    }
}
fetchImages(imageNames);
//document.addEventListener('DOMContentLoaded', fetchImages)