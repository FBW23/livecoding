// chained fetch with maybe more than one thens.... 
// synchronous call 
// fetch('./music.json') 
//   .then((response) => {
//     return response.json(); // parse json
//   })
//   .then((data) => {
//     console.log(data); // parsed json = Javascript object
//   });

// how can we make it better? 
// asynchronous call ?
//async fetch()

async function fetchMusic() {
  const response = await fetch('./music.json');
  const data = await response.json() // parse json
  return data;
}

fetchMusic() // return a promise
.then(data => console.log(data));

// repetition
class Data {
  constructor(url) {
    this.url = url;
    this.myData = {};
    this.fetchData();
  }
  async fetchData(url) {
    // API CALL 
    this.myData = await myJsonData;
  }
}

const myMusicData = new Data('./music.json'); // independent Data fetching 
const myProfileData = new Data('./profile.json'); // from each other 
myMusicData.myData // <== this should be filled with the correct 