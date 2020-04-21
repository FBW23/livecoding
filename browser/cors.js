// slower than the local
// Workaround with cors-anywhere as a proxy script, npm install cors-anywhere
const url = 'https://cors-anywhere.herokuapp.com/https://joke-api-strict-cors.appspot.com/random_joke';
//const url = 'https://jsonplaceholder.typicode.com/posts';
//const url = 'https://bar.other/resources/public-data/';
const myBody = {
    foo: 'bar'
};

console.log(document.domain); // shop.example.com => same-origin
// document.domain = "example.com";
//document.domain = '127.0.0.1'; // we could change the origin if we want to access some other subdomains

console.log(document.domain); // www.example.com would be accessible with same-origin-policy

const options = {
    method: 'GET',// GET always needs to be big
    //body: JSON.stringify(myBody),
    mode: 'no-cors', //    mode: 'cors', no-cors, (*cors), same-origin,
    "origin,x-requested-with": 'XMLHTTPRequest'
};   

fetch(url, options)
.then(response => response.json())
.then(response => console.log(response));

// faster than the abroad
const url2 = 'json.json';

const options2 = {
    method: 'GET',// GET always needs to be big
    mode: 'same-origin' //    mode: 'cors', no-cors, (*cors), same-origin
};   

fetch(url2, options2)
.then(response => response.json())
.then(response => console.log(response));