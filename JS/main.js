// Modell
let aCounter = 0; // Counts vowels.
let stringLength; // Keeps track of input string length.
let getString; // Used in multiple places, so needed it global.




// View
updateView();
function updateView() {
    document.getElementById('app').innerHTML = /*HTML*/`
    <h1> Vowel Finder </h1>
    <input id="inputField" oninput="getInput()" /> <!-- See function getInput() on line 26. -->
    <button onclick="countVowels()">Count Vowels</button>
    <div id="result" class="result"><ul></ul></div>
    `


}



// Controller

function getInput() {
    getString = document.getElementById('inputField').value // Gets current input value, combined with a oninput on line 14.
}


function countVowels() {
    aCounter = 0; // Makes sure that aCounter is 0 when the function is ran, so the values don't carry over from the previous execution.
    let vowelsArray = []; // Empty array that gets filled in the if statement below.

    for (i = 0; i <= getString.length; i++) { // Simple for loop to make sure it loops through the entire input
        if (getString[i] === "a" || getString[i] === "e" || getString[i] === "i" || getString[i] === "o" || getString[i] === "u" || getString[i] === "y") { // Gets the current value index and compares it to all vowels.
            aCounter++;
            vowelsArray.push(getString[i])
        }
    }
    vowelsFound(aCounter, vowelsArray);
}

function vowelsFound(aCounter, vowelsArray) { // aCounter and vowelsArray are being pulled as params to make sure they are up to date. It also makes the it so 
    let listItems = vowelsArray.map(vowel => `<li>${vowel}</li>`).join('') // .map creates a new array, giving each value the <li> tags. .join is used to choose a seperator between values in arrays. Example: "val1, val2" (", " is the seperator).
    document.getElementById('result').innerHTML = /*HTML*/`
        Vowels Found! There are ${aCounter} vowel(s) present.<br>
        The vowels are:
        <ul>${listItems}</ul> <!-- <ul> is required with <li>
        `
}