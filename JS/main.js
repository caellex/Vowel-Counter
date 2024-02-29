    // Modell
    let aCounter = 0;
    let stringLength;
    let getString;




    // View
    updateView();
    function updateView(){
    document.getElementById('app').innerHTML = /*HTML*/`
    <h1> Vowel Finder </h1>
    <input id="inputField" oninput="getInput()" />
    <button onclick="countVowels()">Count Vowels</button>
    <div id="result" class="result"><ul></ul></div>
    `


    }







    // Controller

    function getInput(){
    getString = document.getElementById('inputField').value
    }


    function countVowels(){
        let vowelsArray = [];

    for(i=0; i <= getString.length; i++){
        if(getString[i] === "a" || getString[i] === "e" || getString[i] === "i" || getString[i] === "o" || getString[i] === "u" || getString[i] === "y"){
            aCounter++;
            vowelsArray.push(getString[i])
            }
    }
    vowelsFound(aCounter, vowelsArray);
    }

    function vowelsFound(aCounter, vowelsArray){
        let listItems = vowelsArray.map(vowel => `<li>${vowel}</li>`).join('')
    document.getElementById('result').innerHTML = /*HTML*/`
    Vowels Found! There are ${aCounter} vowel(s) present.<br>
    The vowels are:
    <ul>${listItems}</ul>

    `
    }