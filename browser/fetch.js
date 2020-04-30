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
});