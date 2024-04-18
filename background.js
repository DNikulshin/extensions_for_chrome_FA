//import test from './script.js'
//console.log(test());
chrome.runtime.onMessage.addListener(data => {
    switch(data.event) {
        case 'copyUrl':
            console.log('copyUrl')
            break
        case 'sendToServer':
            console.log('sendToServer')
            break
        default:
            break
    }
})