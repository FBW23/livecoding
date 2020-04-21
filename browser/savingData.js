// window

// window.localeStorage
// Permanent saving data 


localStorage.setItem('myCat', 'Fatma');
localStorage.getItem('myCat');
localStorage.removeItem('myCat');
localStorage.clear();

// window.sessionStorage
// only saving until browser window is closed!


sessionStorage.setItem('myCat', 'Fatma');
sessionStorage.getItem('myCat');
sessionStorage.removeItem('myCat');
sessionStorage.clear();

const asyncLocalStorage = {
    setItem: function (key, value) {
        return Promise.resolve().then(function () {
            localStorage.setItem(key, value);
        });
    },
    getItem: function (key) {
        return Promise.resolve().then(function () {
            return localStorage.getItem(key);
        });
    }
};

// Demo
const data = Date.now() % 1000;
asyncLocalStorage.setItem('mykey', data).then(function () {
    return asyncLocalStorage.getItem('mykey');
}).then(function (value) {
    console.log('Value has been set to:', value);
});
console.log('waiting for value to become ' + data + 
            '. Current value: ', localStorage.getItem('mykey'));