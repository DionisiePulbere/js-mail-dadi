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


// Lista di E-Mail 
const emailList = ["mariorossi@mail.it", "markcaltagirone@mail.it", "lisa@mail.it", "bart@mail.it" , "homer@mail.it", "marge@mail.it", "flanders@mail.it", "apu@mail.it", "meggie@mail.it"];

// chiedere all'utente la propria Mail
const userEmail = prompt("Inserire la propria E-Mail");

let emailFound = false;
let userMessage = "La tua E-Mail non è presente";
// creare il ciclo 
for (let i = 0; i < emailList.length; i++){
    const thisEmail =emailList[i];
    // stabilire le condizoni
    if (thisEmail === userEmail){
        emailFound = true;
    }
    // creare il messaggio di risposta
    if (emailFound === true){
        userMessage = "La tua E-Mail è presente";
    }
}
// Stamapre la rispsota 
alert(userMessage);


