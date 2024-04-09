/* ESERCIZIO 1
  Scrivi una funzione per concatenare due stringhe ricevute come parametri, selezionando solamente i primi 2 caratteri della
  prima e gli ultimi 3 della seconda. Converti la stringa risultante in maiuscolo e mostrala con un console.log().
*/
function concatenaStringhe(str1, str2) {
  const parte1 = str1.substring(0, 2);
  
  const parte2 = str2.substring(str2.length - 3);
  
  const risultato = parte1.concat(parte2);
  
  const risultatoMaiuscolo = risultato.toUpperCase();
  
  console.log(risultatoMaiuscolo);
}

const stringa1 = "daje";
const stringa2 = "Roma";
concatenaStringhe(stringa1, stringa2); 
/* ESERCIZIO 2 (for)
  Scrivi una funzione che torni un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 100 (incluso).
*/
function generaArrayCasuale() {
  const arrayCasuale = [];
  for (let i = 0; i < 10; i++) {
      const numeroCasuale = Math.floor(Math.random() * 101);
      arrayCasuale.push(numeroCasuale);
  }
  return arrayCasuale;
}
const arrayCasuale = generaArrayCasuale();
console.log(arrayCasuale); 
/* ESERCIZIO 3 (filter)
  Scrivi una funzione per ricavare solamente i valori PARI da un array composto da soli valori numerici
*/
function filtraValoriPari(array) {
  const valoriPari = array.filter(numero => numero % 2 === 0);
  return valoriPari;
}
const arrayNumerico = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const valoriPari = filtraValoriPari(arrayNumerico);
console.log(valoriPari); 
/* ESERCIZIO 4 (forEach)
  Scrivi una funzione per sommare i numeri contenuti in un array
*/
function sommaArray(array) {
  let somma = 0;
  array.forEach(numero => {
      if (typeof numero === 'number') {
          somma += numero;
      }
  });

  return somma;
}

const arrayNumeri = [1, 2, 3, 4, 5];
const risultatoSomma = sommaArray(arrayNumeri);
console.log(risultatoSomma); 
/* ESERCIZIO 5 (reduce)
  Scrivi una funzione per sommare i numeri contenuti in un array
*/
function sommaArray(array) {
  const somma = array.reduce((acc, curr) => acc + curr, 0);
  return somma;
}
const arrayNumeri = [1, 2, 3, 4, 5];
const risultatoSomma = sommaArray(arrayNumeri);
console.log(risultatoSomma); 
/* ESERCIZIO 6 (map)
  Scrivi una funzione che, dato un array di soli numeri e un numero n come parametri, ritorni un secondo array con tutti i valori del precedente incrementati di n
*/
function incrementaArray(array, n) {
  const arrayIncrementato = array.map(numero => numero + n);
  return arrayIncrementato;
}
const arrayNumeri = [1, 2, 3, 4, 5];
const n = 3;
const arrayIncrementato = incrementaArray(arrayNumeri, n);
console.log(arrayIncrementato); 
/* ESERCIZIO 7 (map)
  Scrivi una funzione che, dato un array di stringhe, ritorni un nuovo array contenente le lunghezze delle rispettive stringhe dell'array di partenza
  es.: ["EPICODE", "is", "great"] => [7, 2, 5]
*/
function lunghezzeStringhe(arrayDiStringhe) {
  const lunghezze = arrayDiStringhe.map(stringa => stringa.length);
  return lunghezze;
}

const arrayDiStringhe = ["EPICODE", "is", "great"];
const lunghezze = lunghezzeStringhe(arrayDiStringhe);
console.log(lunghezze); 
/* ESERCIZIO 8 (forEach o for)
  Scrivi una funzione per creare un array contenente tutti i valori DISPARI da 1 a 99.
*/
function creaArrayDispari() {
  const arrayDispari = [];

  for (let i = 1; i <= 99; i++) {
      if (i % 2 !== 0) {
          arrayDispari.push(i);
      }
  }

  return arrayDispari;
}
const arrayDispari = creaArrayDispari();
console.log(arrayDispari);
/* Questo array di film verrà usato negli esercizi a seguire. Non modificarlo e scorri oltre per riprendere gli esercizi :) */
const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]

/* ESERCIZIO 9 (forEach)
  Scrivi una funzione per trovare il film più vecchio nell'array fornito.
*/
function trovaFilmPiuVecchio(movies) {
  let filmPiuVecchio = movies[0]; 
  movies.forEach(film => {
      if (parseInt(film.Year) < parseInt(filmPiuVecchio.Year)) {
          filmPiuVecchio = film;
      }
  });

  return filmPiuVecchio;
}

const filmPiuVecchio = trovaFilmPiuVecchio(movies);
console.log("Il film più vecchio è:", filmPiuVecchio.Title, "-", filmPiuVecchio.Year);
/* ESERCIZIO 10
  Scrivi una funzione per ottenere il numero di film contenuti nell'array fornito.
*/
function numeroFilm(movies) {
  return movies.length;
}

const numeroFilm = numeroFilm(movies);
console.log("Il numero di film nell'array è:", numeroFilm);
/* ESERCIZIO 11 (map)
  Scrivi una funzione per creare un array con solamente i titoli dei film contenuti nell'array fornito.
*/
function estraiTitoli(movies) {
  const titoli = movies.map(film => film.Title);
  return titoli;
}

const titoliDeiFilm = estraiTitoli(movies);
console.log("I titoli dei film sono:", titoliDeiFilm);
/* ESERCIZIO 12 (filter)
  Scrivi una funzione per ottenere dall'array fornito solamente i film usciti nel millennio corrente.
*/
function filmDelMillennioCorrente(movies) {
  const filmMillennioCorrente = movies.filter(film => parseInt(film.Year) >= 2000);
  return filmMillennioCorrente;
}

const filmMillennioCorrente = filmDelMillennioCorrente(movies);
console.log("I film usciti nel millennio corrente sono:", filmMillennioCorrente);
/* ESERCIZIO 13 (reduce)
  Scrivi una funzione per calcolare la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array fornito.
*/
function sommaAnniDiProduzione(movies) {
  const sommaAnni = movies.reduce((acc, film) => acc + parseInt(film.Year), 0);
  return sommaAnni;
}

const sommaAnni = sommaAnniDiProduzione(movies);
console.log("La somma di tutti gli anni di produzione è:", sommaAnni);
/* ESERCIZIO 14 (find)
  Scrivi una funzione per ottenere dall'array fornito uno specifico film (la funzione riceve un imdbID come parametro).
*/
function trovaFilmPerImdbID(movies, imdbID) {
  const filmTrovato = movies.find(film => film.imdbID === imdbID);
  return filmTrovato;
}

const imdbID = 'tt0167260';
const filmTrovato = trovaFilmPerImdbID(movies, imdbID);
if (filmTrovato) {
  console.log("Il film trovato è:", filmTrovato.Title);
} else {
  console.log("Nessun film trovato con l'imdbID specificato.");
}
/* ESERCIZIO 15 (findIndex)
  Scrivi una funzione per ottenere dall'array fornito l'indice del primo film uscito nell'anno fornito come parametro.
*/
function trovaIndicePrimoFilmPerAnno(movies, anno) {
  const indice = movies.findIndex(film => film.Year === anno);
  return indice;
}

const annoDaCercare = '2001';
const indicePrimoFilm = trovaIndicePrimoFilmPerAnno(movies, annoDaCercare);
if (indicePrimoFilm !== -1) {
  console.log("L'indice del primo film uscito nell'anno", annoDaCercare, "è:", indicePrimoFilm);
} else {
  console.log("Nessun film trovato uscito nell'anno", annoDaCercare);
}
