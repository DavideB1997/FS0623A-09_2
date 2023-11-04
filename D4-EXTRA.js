// Esercizi aggiuntivi (facoltativi) per D4

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// let randomNumber
// const soglia = 10
// const randomArray = []

// for(i=0;i<=soglia;i++){
//   randomNumber= giveMeRandom()
//   randomArray.push(randomNumber)
// }
// console.log(randomArray)

// checkArray(randomArray)

// function checkArray(array){
//   let somma = 0;
//   for(value of array){
//     if (value>5){
//       console.log(`${value} è maggiore di 5`)
//       somma = Math.floor(somma + value) ;
//       console.log(`${somma} + ${value}`)
//     }else{
//       console.log(`${value} non è maggiore di 5`)
//     }
//   }
//   console.log(somma)
// }

// function giveMeRandom(soglia=10,randomArray){
//   let random = Math.floor(Math.random()* soglia);
//   return random
// }



/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const shoppingCart = [{
  price: 100 ,
  name: "patate",
  id: 22,
  quantity: 7,
},
{
  price: 70 ,
  name: "carciofi",
  id: 22,
  quantity: 1,
},
{
  price: 150 ,
  name: "merendine",
  id: 22,
  quantity: 4,
},
{
  price: 7 ,
  name: "pane",
  id: 22,
  quantity: 2,
}
]


// totale = shoppingCartTotal(shoppingCart)
// console.log(totale)

// function shoppingCartTotal(carrello){
//   let sommaSingola = 0
//   let sommaTotale =0

//   for(const oggetto of carrello){
//     sommaSingola = parseInt(oggetto.price) * parseInt(oggetto.quantity);
//     console.log(`${oggetto.price} ${oggetto.quantity}`)
//     sommaTotale = sommaSingola + sommaTotale
//   }
//   return sommaTotale;
// }



/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// ********* decommentare const shoppingCart dall'esercizio n2

// let numeroProdotto = 1

// totaleCarrello = addToShoppingCart(shoppingCart, numeroProdotto)
// console.log(shoppingCart)

// function addToShoppingCart (array, numero) {
//   oggetto = array[numero]

//   array.push(oggetto)

//   return shoppingCart.length
// }


/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// ********* decommentare const shoppingCart dall'esercizio n2


// oggettoCostoso = maxShoppingCart(shoppingCart)
// console.log(oggettoCostoso)

// function maxShoppingCart(array){
//   const prezzone= []

//   for(oggetto of array){
//     const prezzo = oggetto.price
//     prezzone.push(prezzo)
//   }
//   let prezzoMassimo = Math.max(...prezzone)

//   for(oggetto of array){
//     let prezzo = oggetto.price

//     if(prezzo === prezzoMassimo){
//       prodotto = oggetto
//       return prodotto
//     }
//   }
// }


/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// ********* decommentare const shoppingCart dall'esercizio n2

// latestIteam = latestShoppingCart(shoppingCart)
// console.log(latestIteam)

// function latestShoppingCart(array){
//   const postoUltimoProdotto = Object.keys(array).length -1
//   const ultimoProdotto = array[postoUltimoProdotto]
  
//   return ultimoProdotto
// }

/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// const valoreX = parseInt(prompt("Inserisci un numero"))

// loop= loopUntil(valoreX)

// function loopUntil(cap){
//   let counter = 0;

//   for(i=0;i<=cap;i++){
//     if(counter!==3){
//       let random = Math.floor(Math.random()* 10);
//       console.log(random)
//       if( random >= cap ){
//         counter++
//         console.log(`${random} è maggiore di ${cap} ${counter}`)
//       }
//     }
//     else if(counter===3){
//       console.log(`il counter ha raggiunto ${counter}/3, loop completo`)
//       return
//     }
//   }
// }

/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// const arreyAverage= [ 5 ,"castagne", 19 , "tazzina", 37 , "albero azzurro", 28, "Gastani Frinzi", 40]

// funzioneMedia = average(arreyAverage)
// console.log(funzioneMedia)

// function average(array){
//   const arrayMedio= []  
//   let valoreTotale= 0

//   for(valore of array){
//     if(typeof valore == "number"){
//       arrayMedio.push(valore)
//       valoreTotale+=valore
//     }
//   }
//   let lunghezzaArray = arrayMedio.length
//   let mediaAritmetica = valoreTotale/lunghezzaArray
//   return(mediaAritmetica)
// }

/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// const arrayStringe = ["Mary Poppins", "Pillola", "Zucchero","andare","giù","supercalifragilistichespiralidoso"];

// const check = longest(arrayStringe);
// console.log(check);


// function longest(array){
//   let arrayValori = [];
//   for(parola of array){
//     let lunghezzaParola = parola.length; 
//     arrayValori.push(lunghezzaParola);
//   }

//   let lunghezzaMax = Math.max(...arrayValori);

//   for (parola of array){
//     if(parola.length === lunghezzaMax){
//       return parola;
//     }
//   }
// }

/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// let stringaSpam = "una frase a caso con la parola SPAM giusto per"
// let stringaSCAM = "una frase a caso con la parola SCAM attenzione!"
// let stringaOk = "una frase senza queste le parole."

// checkForSpam = filtoAntiSpam(stringaOk)
// console.log(checkForSpam)

// function filtoAntiSpam(stringa){
//   const spam = stringa.search("SPAM")
//   const scam = stringa.search ("SCAM")

//   console.log(spam,scam)

//   if(scam > 0 || spam > 0 ){
//     return true;
//   }
//   else{
//     return false;
//   }
// }


/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// let dataRichiesta = new Date("2020-02-20")
// let dataOdierna = new Date()


// giorniPassati(dataRichiesta, dataOdierna)
// console.log(giorniPassati(dataRichiesta, dataOdierna))

// function giorniPassati(data){
//   let orePassate = dataOdierna.getTime() - dataRichiesta.getTime();
  
//   let giorniPassati = orePassate/(1000*3600*24)
//   return giorniPassati
// }


/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// let valoreX = 3
// let valoreY = 2


// matrice= matrixGenerator(valoreX,valoreY)
// console.log(matrice)

// function matrixGenerator(valoreX,valoreY){
// let matrice = []

// for (let y=0; y<valoreY;y++){
//   const array = []
//   for(let i=0; i<valoreX;i++){
//     let numero = y.toString() + i.toString()
//     array.push(numero)
//   }
//   matrice.push(array)
// }
// return matrice
// }
