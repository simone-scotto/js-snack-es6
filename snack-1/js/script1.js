/* Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore.
 */

//CREA ARRAY DI BICI CON PROPRIETA' DI NOME E PESO

const bici = [
  {
    nome: "mountainbike",
    peso: 15,
  },
  {
    nome: "bmx",
    peso: 10,
  },
  {
    nome: "corsa",
    peso: 8,
  },
  {
    nome: "downhill",
    peso: 14,
  },
  {
    nome: "dirt",
    peso: 11,
  },
];

console.log(bici);

// IMPOSTA LA VARIABILE BICI LEGGERA = ALL ELEMENTO IN POSIZIONE 0 (PRIMA) DELL ARRAT BICI

let biciLight = bici[0];

// CICLA ALL'INTERNO DELL ARRAY BICI E IF UNO DEI VALORI .PESO DEI VARI ELEMENTI è < RISPETTO AL .PESO DELLA VARIABILE BICILIGHT APPENA CREATA ALLORA PRENDE IL SUO POSTO

for (let i = 1; i < bici.length; i++) {
  if (bici[i].peso < biciLight.peso) {
    biciLight = bici[i]; //BICI CON PESO MINORE
  }
}

console.log(
  `La bici più leggera è la bici da ${biciLight.nome} perchè pesa solo ${biciLight.peso}kg`
);
