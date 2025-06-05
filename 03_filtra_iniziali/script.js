/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.

function nameSelection(names_list, letter) {

    let namesWithLetter = []

    for (let i = 0; i < names_list.length; i++) {
        const singleName = names_list[i];
        if (singleName[0] === letter) {

            namesWithLetter.push(singleName);

        }

    }

    return namesWithLetter;
}

// Invoca la funzione qui e stampa il risultato in console

const only_with_a = nameSelection(names, 'A');
console.log(only_with_a);


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]


// with Arrow function

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];

const nameSelection = (names_list, letter) => {
    let namesWithLetter = [];

    for (let i = 0; i < names_list.length; i++) {
        const singleName = names_list[i];
        if (singleName[0] === letter) {
            namesWithLetter.push(singleName);
        }
    }

    return namesWithLetter;
};

const only_with_a = nameSelection(names, 'A');
console.log(only_with_a);
