/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.

// 'javascript'
function countVowels(text) {

    const vowels = ['a', 'e', 'i', 'o', 'u']

    let vowelsOnly = []
    for (let i = 0; i < text.length; i++) {

        const letter = text[i]



        if (vowels.includes(letter)) {
            vowelsOnly.push(letter)
        }


    }

    return vowelsOnly.length

}

// Invoca la funzione qui e stampa il risultato in console

const numberOfVowels = countVowels(word)
console.log(numberOfVowels)
//Risultato atteso se si passa 'javascript': 3 (a, a, i)

