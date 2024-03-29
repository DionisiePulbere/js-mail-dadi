// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
// Mail
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.
// Per la soluzione di questo esercizio NON è consentito utilizzare .includes di js!
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Che ci sia un array da qualche parte?
// Se dobbiamo confrontare qualcosa che "cosa" ci serve?
// Consigli del giorno:
// 1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
// 2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
// 3. si ma noi cosa vogliamo fare?
// 4. torniamo a scrivere in italiano
// 5. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"


// Genero 2 numeri casuali 
const userNumber = Math.floor(Math.random() * 6) + 1;
const computerNumber = Math.floor(Math.random() * 6) + 1;

// Stabilisco le condizioni 
let userMessage = "Mi dispaice, hai perso!";

if (userNumber > computerNumber){
    userMessage = "Complimenti, hai vinto!";
} else if (userNumber === computerNumber){
    userMessage = "Pareggio"
}
// Raccolgo il risultato
let showUserNumber = "Il tuo numero è " + userNumber;
let showComputerNumber = "Il numero del computer è " + computerNumber;

// stampo le risposte
alert(showUserNumber);
alert(showComputerNumber);
alert(userMessage);