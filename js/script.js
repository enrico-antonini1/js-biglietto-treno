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

let message= "";
const age = prompt("Quanti anni hai?");
const km = prompt("Quanti km devi percorrere?");