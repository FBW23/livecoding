// HTTP REQUEST
// GET
// POST 
// What is the difference?
// <form method="GET/POST">

/// Is this a get or a POST request? 
// http://example.com?query=name&folder=submit
// =>> always GET! 

// POST would be like
// http://example.com
// body... query = name 
// body... folder = submit... 

// checkout POSTMAN 
// checkout DEVTOOLS
const form = document.querySelector('form');
const userName = document.querySelector('input[type=text]');
const password = document.querySelector('input[type=password]');

const handleSubmit = (event) => {
    event.preventDefault();
    const myOptions = {
        method : 'GET' // 'GET'
    };

    const myBody = {
        username: userName.value,
        password: password.value // possibilities to secure the password /encrypt 
    };
    
    const url = "https://jsonplaceholder.typicode.com/posts"
    
    fetch(url, {
        method: 'POST', 
        body: JSON.stringify(myBody)
    })
    .then(response => response.json()) // parse JSON
    .then(json => console.log(json)); // console.log it!
}

form.addEventListener('submit', handleSubmit);



// const request = fetch('https://example.com', {
//     method: 'POST', 
//     body: '{"foo": "bar"}'
// });

