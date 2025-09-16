/* 
RACCOLTA DATI

chiedere all'utente età
chiedere all'utente km
preparare variabile messaggio

ESECUZIONE LOGICA
calcolare prezzo biglietto in base all'età
SE età < 18
    p minorenni = 0,21 * km * (1-0,20)

SE età > 65
    p over 65 = 0,21 * km * (1-0,40)

ALTRIMENTI
    p interno = 0,21 * km

OUTPUT
stampo messaggio
*/

let message = "";
const ageStr = prompt("Quanti anni hai?");
const kmStr = prompt("Quanti km devi percorrere?");

const km = parseInt(kmStr);
const age = parseInt(ageStr)

const prezzoIntero = 0.21 * km;
const prezzoU18 = prezzoIntero * (1 - 0.2);
const prezzoO65 = prezzoIntero * (1 - 0.4);


if (age < 18) {
    message = `Il prezzo del biglietto è ${prezzoU18}`;
} else if (age >= 65) {
    message = `Il prezzo del biglietto è ${prezzoO65}`;
}
else {
    message = `Il prezzo del biglietto è ${prezzoIntero}`;
 }

 console.log(message);

