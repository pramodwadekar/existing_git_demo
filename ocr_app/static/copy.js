// console.log('copy.js');

// // copy to clipboard on copy btn click
// function copy() {
//     /* Get the text field */
//     var copyText = document.getElementById("ocrtext");
//     // get text inside of copytext element
//     var text = copyText.innerText;
//     /* Copy the text inside the text field */
//     navigator.clipboard.writeText(text);
//     // set the text to be copied
//     document.querySelector('#copybtn').innerText = "Copied!";
// }

// // on upload button click , change text to clicked
// function uploaded() {
//     console.log('uploaded');
//     document.querySelector('#upload-btn').innerText = "Uploaded!";
// }
function copy() {
    var text = document.getElementById("ocrtext").value;
    var tempInput = document.createElement("input");
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    tempInput.setSelectionRange(0, 99999);
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    alert("Text copied to clipboard");
}