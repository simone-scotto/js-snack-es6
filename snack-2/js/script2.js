/* Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”. Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console. */

const serieA = [
  {
    nome: "juventus",
    punti: 0,
    fallisubiti: 0,
  },
  {
    nome: "inter",
    punti: 0,
    fallisubiti: 0,
  },
  {
    nome: "milan",
    punti: 0,
    fallisubiti: 0,
  },
  {
    nome: "lazio",
    punti: 0,
    fallisubiti: 0,
  },
  {
    nome: "roma",
    punti: 0,
    fallisubiti: 0,
  },
  {
    nome: "napoli",
    punti: 0,
    fallisubiti: 0,
  },
  {
    nome: "torino",
    punti: 0,
    fallisubiti: 0,
  },
  {
    nome: "bologna",
    punti: 0,
    fallisubiti: 0,
  },
  {
    nome: "fiorentina",
    punti: 0,
    fallisubiti: 0,
  },
  {
    nome: "como",
    punti: 0,
    fallisubiti: 0,
  },
];

// ASSEGNARE A PUNTI E FALLI SUBITI UN NUMERO CASUALE CON MATH RANDOM
for (const key in serieA) {
  serieA[key].punti = Math.floor(Math.random() * 100);
  serieA[key].fallisubiti = Math.floor(Math.random() * 100);
}

console.log(serieA);

// ORDINATI IN CLASSIFICA

serieA.sort(function (a, b) {
  return b.punti - a.punti;
});

// NUOVO ARRAY CON NOME E FALLI SUBITI
let statsSeriea = [];
// CICLO FOR E PUSHARE NE NUOVO ARRAY NOME E FALLI SUBITI
for (let i = 0; i < serieA.length; i++) {
  const squadre = serieA[i];
  statsSeriea.push({
    nome: squadre.nome,
    fallisubiti: squadre.fallisubiti,
  });
}

console.log(statsSeriea);

// CREA FUNZIONI

/* function dilteredTeams(serieA) {
  let statsSeriea = [];

  for (let i = 0; i < serieA.length; i++) {
    const squadre = serieA[i];
    statsSeriea.push({
      nome: squadre.nome,
      fallisubiti: squadre.fallisubiti,
    });
  }
  return statsSeriea;
}

const filtered = dilteredTeams(serieA);

console.log(filtered);
 */
