/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = 'Mario';


// Dichiara la funzione qui.

function greeting(name) {
    const hiUser = `Ciao ${name}`;
    return hiUser;


}

// Invoca la funzione qui e stampa il risultato in console

const sayHi = greeting(userName);


//Risultato atteso se si passa 'Mario': // ciao Mario

console.log(sayHi);
