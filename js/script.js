/* 
RACCOLTA DATI

chiedere all'utente età
chiedere all'utente km
preparare variabile messaggio

ESECUZIONE LOGICA
calcolare prezzo biglietto 
p interno = 0,21 * km
p minorenni = 0,21 * km * (1-0,20)
p over 65 = 0,21 * km * (1-0,40)

OUTPUT
stampo messaggio
*/

let message = "";
const age = prompt("Quanti anni hai?");
const km = prompt("Quanti km devi percorrere?");

const prezzoIntero = "0,21" * km;
const prezzo18 = prezzoIntero * ("1-0,20")
const prezzoO65 = prezzoIntero * ("1-0,40")

if (age <= 18) {
    message = `Il prezzo del biglietto è ${prezzo18}`;
} else if (age >= 65) {
    message = `Il prezzo del biglietto è ${prezzoO65}`;
}
else {
    message = `Il prezzo del biglietto è ${prezzoInterno}`;
}

