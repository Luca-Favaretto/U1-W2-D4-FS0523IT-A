/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("Es 1");

const areaRettangolo = function (l1, l2) {
  return l1 * l2;
};
let latoAEs1 = 4;
let latoBEx1 = 2;
console.log(`L'area del rettangolo é ${areaRettangolo(latoAEs1, latoBEx1)}`);

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("Es 2");

const crazySum = function (num1, num2) {
  if (num1 !== num2) {
    return num1 + num2;
  } else {
    return (num1 + num2) * 3;
  }
};

let val1Ex2 = 4;
let val2Ex2 = 4;

console.log(`Il risultato pazzo è ${crazySum(val1Ex2, val2Ex2)}`);

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("Es 3");

const crazyDiff = function (num1) {
  if (num1 < 19) {
    return Math.abs(num1 / 19);
  } else {
    return Math.abs(num1 / 19) * 3;
  }
};
let val1Ex3 = 38;

console.log(crazyDiff(val1Ex3));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("Es 4");
const boundary = function (n) {
  return (n >= 20 && n <= 100) || n === 400 ? true : false;
};
let valEx4 = 4000;

console.log(boundary(valEx4));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("Es 5");
const epify = function (stringa) {
  if (stringa === "EPICODE") {
    return stringa;
  } else {
    return "EPICODE" + stringa;
  }
};

let stringEx5 = " è fantastico";

console.log(epify(stringEx5));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("Es 6");

const check3and7 = function (numPos) {
  return numPos % 3 === 0 || numPos % 7 === 0
    ? "Il numero é divisbile per 3 e 7"
    : "Il numero non è divisbile per 3 e 7";
};

let valEx6 = 100;
console.log(check3and7(valEx6));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("Es 7");

const reverseString = function (string) {
  const arrayString = string.split("");
  console.log(arrayString);
  let reverseStingArray = [];

  for (let i = arrayString.length; i < 0, i--; ) {
    reverseStingArray.push(arrayString[i]);
  }

  return reverseStingArray.join("");
};

let stringEx7 = "EPICODE";

console.log(reverseString(stringEx7));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("Es 8");

const upperFirst = function (string) {
  const arrayString = string.split(" ");
  let upperResult = "";

  for (let i = 0; i < arrayString.length; i++) {
    upperResult +=
      arrayString[i].charAt(0).toUpperCase() + arrayString[i].slice(1) + " ";
  }

  return upperResult;
};

let stringEs8 =
  "Ciao, mi chiamo luca e le prime lettere le scrivo sempre in maiuscolo grazie a javascript.";

upperFirst(stringEs8);

console.log(upperFirst(stringEs8));

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("Es 9");

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("Es 10");
