
// chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
//     if (message.action == "changecolor") {
//          let textcolor = window.getSelection().toString();

//          if (textcolor) {
//             let range = window.getSelection().getRangeAt(0);
//             let span = document.createElement('span');
//              span.style.color = message.color;
//              span.textContent = textcolor;

//              range.deleteContents();
//              range.insertNode(span);
//          }
//     }
// });



// chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
//     if (message.action === "changecolor") {
//         let textcolor = window.getSelection().toString();

//         if (textcolor) {
//             let range = window.getSelection().getRangeAt(0);
//             let span = document.createElement('span');
//             span.style.color = message.color;
//             span.textContent = textcolor;

//             range.deleteContents();
//             range.insertNode(span);
//         }
//     }
// });       // this code 20 to 34 use to change the text color to any website

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "changecolor") {
        let selectedText = window.getSelection();
        if (selectedText.rangeCount > 0) {
            let range = selectedText.getRangeAt(0);
            let span = document.createElement('span');
            span.style.backgroundColor = message.color;
            span.textContent = selectedText.toString();
            range.deleteContents();
            range.insertNode(span);
        }
    }
});


