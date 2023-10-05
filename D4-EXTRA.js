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

const shoppingCartTotal = function (array) {
  let tot = 0;
  for (let i = 0; i < array.length; i++) {
    tot += array[i].price * array[i].quantity;
  }
  return tot;
};

console.log("stai spendendo" + shoppingCartTotal(shoppingCart) + "$");

/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Es3");

const addToShoppingCart = function (oggetto) {
  shoppingCart.push(oggetto);
  let oggTot = 0;

  for (let i = 0; i < shoppingCart.length; i++) {
    oggTot += shoppingCart[i].quantity;
  }

  console.log(oggTot);
};
let newOgg = {
  name: "Computer",
  id: "123.123.123.123",
  price: 100,
  quantity: 4
};

addToShoppingCart(newOgg);

/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("Es4");

const maxShoppingCart = function (array) {
  let maxPrice = 0;
  for (let i = 0; i < shoppingCart.length; i++) {
    if (maxPrice < array[i].price) {
      maxPrice = array[i].price;
      console.log("Il " + array[i].name);
    }
  }

  return maxPrice;
};
let expenciveObject = maxShoppingCart(shoppingCart);

console.log("è l'oggetto più costoso del carrello é " + expenciveObject);
/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("Es5");
const latestShoppingCart = function (array) {
  console.log(
    `L'ultimo oggetto del tuo carrello è un ${array[array.length - 1].name}`
  );
};

latestShoppingCart(shoppingCart);

/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("Es6");
let randomEx6 = Math.floor(Math.random() * 10);

console.log(randomEx6);

const loopUntil = function (num) {
  for (let i = 0; i < 1; i++) {
    let randomInside = Math.floor(Math.random() * 10);
    if (randomInside < num) {
      if (randomInside < num) {
        if (randomInside < num) {
          console.log("qunate volte ci saranno volute???");
          return (num = randomInside);
        } else {
          continue;
        }
      } else {
        continue;
      }
    } else {
      continue;
    }
  }
};
console.log(loopUntil(randomEx6));

/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Es7");
const average = function (array) {
  let count = 0;
  let somma = 0;
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "number") {
      somma += array[i];
      count++;
    }
  }
  console.log(somma);
  console.log(count);
  let media = somma / count;
  return media;
};
let arrayEs7 = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, "tigre"];

console.log(average(arrayEs7));

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
