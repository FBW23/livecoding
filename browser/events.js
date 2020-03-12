// Function to change the content of t2
function modifyText() {
    const t2 = document.querySelector("#t2");
    if (t2.firstChild.nodeValue === "three") {
        t2.firstChild.nodeValue = "two";
    } else {
        t2.firstChild.nodeValue = "three";
    }
}


const myFunction = () => {
    console.log('DOM fully loaded and parsed');
    // now we can start changing stuff!!! 

    // Add event listener to table
    const el = document.querySelector("#outside");
    el.addEventListener("click", modifyText);
    //el.addEventListener("mouseenter", modifyText);
    //el.addEventListener("mouseleave", modifyText);
    console.log('added Event Listener');
    //el.removeEventListener("mouseleave", modifyText);
    console.log(new Date().toLocaleString('en-EN', {
        weekday: 'long'
    }));
}

// Browser Event which marks that complete DOM is loaded and ready :D 
document.addEventListener('DOMContentLoaded', myFunction);