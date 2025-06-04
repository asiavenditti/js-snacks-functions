/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.

function getFirstLetter(names) {

    let firstLetters = [];

    for (let i = 0; i < names.length; i++) {
        let singleName = names[i];
        const initialLetters = singleName.charAt(0);
        firstLetters.push(initialLetters);


    }
    return firstLetters;
}


// Invoca la funzione qui e stampa il risultato in console

const initialList = getFirstLetter(names);
console.log(initialList);


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]