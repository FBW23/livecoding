// What is the problem with promises? 
// CALLBACK HELL then then finally... 
// PYRAMID OF DOOM new promise=> resolve => then => 
// SCOPING ISSUE  document / body / anything unless we give it... 
// ENDLESS CHAIN... 
// USING PROMISES TODAY :
// "async" function 

function resolveAfter2Seconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 2000);
  });
}
  
async function asyncCall() {
    console.log('calling'); // second
    const result = await resolveAfter2Seconds();
    console.log(result); // fourth
    // expected output: 'resolved'
}
console.log('before calling'); // first 
asyncCall(); // second
console.log('after calling'); // third