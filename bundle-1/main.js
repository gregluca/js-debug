/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1
for (let i = 0; i < 5; i++) {
    console.log(i);
}
// ESERICIZIO 1 
// ERRORE (BISOGNA INVERTIRE DA MAGGIORE A MINORE ALTRIMENTI IL CICLO FOR NON SI ATTIVERA MAI)


// ESERCIZIO 2
function addIfEven(num) {
    if (num % 2 == 0) {
        return num + 5;
    }
    return num;
}
addIfEven();
// ESERICIZO 2 
// ERRORE SINTASSI (MANCA IL DOPPIO UGUALE)


// ESERCIZIO 3
function loopToFive() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
}
loopToFive();
// ESERCIZIO 3 
// ERRORE SINTASSI (VIRGOLE AL POSTO DI PUNTO E VIRGOLA)
// BISOGNA RICHIAMARE LA FUNZIONE


// ESERCIZIO 4 (suggerimento: ci sono 7 errori)
function displayEvenNumbers() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            evenNumbers.push(numbers[i]);
        }
    }
    return evenNumbers;
}
console.log(displayEvenNumbers()); // dovrebbe restituire [2,4,6,8]

// ESERCIZIO 4 
// BISOGNA TOGLIERE IL MENO UNO A LENGTH
// TOGLIERE PUNTO E VIRGOLA DOPO LA PARENTESI DELL'IF
// BISOGNA SPOSTARE IL RETURN AL DI FUORI DEL CICLO FOR 
// ERRORE SINTASSI (PUNTO E VIRGOLA DOPO I++, MANCA DOPPIO UGUALE)