let screenLog = document.querySelector('#screen-log');


const logKey = () => {
    screenLog.innerText = `
      Screen X/Y: ${event.screenX}, ${event.screenY}
      Client X/Y: ${event.clientX}, ${event.clientY}`;
}

window.addEventListener('mousemove', logKey);