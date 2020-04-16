// chained fetch with maybe more than one thens.... 
// synchronous call 
fetch('./music.js')
  .then((response) => {
    return response.json(); // parse json
  })
  .then((data) => {
    console.log(data); // parsed json = Javascript object
  });

// how can we make it better? 
// asynchronous call ?
async fetch()