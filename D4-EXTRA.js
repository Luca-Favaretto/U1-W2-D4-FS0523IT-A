// Esercizi aggiuntivi (facoltativi) per D4

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const giveMeRandom = function (n) {
  let arrayRandom = [];

  for (let i = 0; i < n; i++) {
    arrayRandom.push(Math.floor(Math.random() * 11));
  }
  return arrayRandom;
};

const checkArray = function (array) {
  let somma = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 5) {
      console.log("Il valore è superiore a 5");
      somma += array[i];
    } else {
      console.log("Il valore era minore di 5");
    }
  }
  return somma;
};
let arrayRandom = giveMeRandom(10);
console.log(arrayRandom);

let sommaRandom = checkArray(arrayRandom);

console.log(sommaRandom);

/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("Es2");

const shoppingCart = [
  {
    name: "Forno",
    id: "123.123.123.123",
    price: 10,
    quantity: 4
  },
  {
    name: "Televisore",
    id: "123.123.123.123",
    price: 10,
    quantity: 4
  },
  {
    name: "Phone",
    id: "123.123.123.123",
    price: 10,
    quantity: 4
  }
];

const shoppingCartTotal = function (array, numArt, numOgg) {
  return array[numArt].price * numOgg;
};

console.log("stai spendendo" + shoppingCartTotal(shoppingCart, 2, 1) + "$");

/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("Es3");
let shoppingCart2 = 0;
let oggCarello = 0;

const addToShoppingCart = function (array, numArt, numOgg) {
  shoppingCart2 += array[numArt].price * numOgg;
  oggCarello++;
  return;
};
addToShoppingCart(shoppingCart, 2, 1);
addToShoppingCart(shoppingCart, 2, 1);

console.log(shoppingCart2);
addToShoppingCart(shoppingCart, 2, 1);
console.log(`stai spendendo ${shoppingCart2}$`);
console.log(`hai ${oggCarello} oggetti nel carrello`);

/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Es");
/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Es");
/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Es");
/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Es");

/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Es");
/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Es");
/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Es");
/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Es");
