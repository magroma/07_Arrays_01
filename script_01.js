/* Die Satzbau-Maschine | Arrays */

/*** 1.0 Arrays */

let arr;
// arr = new Array(0); // Konstruktor

arr = []; // Literal
arr = [2,6,7,12];
arr = [true,false];
arr = ["Ich","bin","Max","Mütze"];


ausgabe(arr);
ausgabe(arr.length);
ausgabe(arr[0]); // Index, beginnt IMMER mit 0
ausgabe(arr[1]);


/*** 01. Funktionalität mit Einzelparametern */
// --> "Ich bin Max Mütze."
// ausgabe(getSentence("Ich","bin","Max","Mütze")); // Test
function getSentence(word1,word2,word3,word4) {
    let gap = " ";
    let punct = ".";
    let str = word1 + gap +
              word2 + gap +
              word3 + gap +
              word4 + 
              punct;
    
    return str;
}

// Modul: Ausgabe in Konsole | Test:
// ausgabe("hi");
function ausgabe(outputStr) {
    console.log(outputStr);
}


