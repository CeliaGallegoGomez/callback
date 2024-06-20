import "../scss/styles.scss";

// //Callback --función que ejecuta otra función.
// //callback y printdata son lo mismo (o por lo menos son intercambiables)

//- Crea una función que reciba un array de números y muestre por consola cada número multiplicado por su índice en el array

const numbers = [1, 2, 3, 4, 5];

function myFirstCallback(array) {
  array.forEach((number, index) => {
    let multiplication = number * index;
    console.log(multiplication);
  });
}

const ejecucion = myFirstCallback(numbers);

//- Crea una función que reciba un array de números y devuelva un array con cada número dividido por su índice en el array más 2, es decir index + 2

function giveBack(array) {
  let result = array.map((number, index) => {
    return number / (index + 2);
  });
  return result;
}

const ejecucionDos = giveBack(numbers);

console.log(ejecucionDos);

//- Crea una función que reciba un array de palabras y devuelva un array con las mismas palabras en mayúsculas.

const minus = ["caldero", "trompeta"];

function goMayus(array) {
  const result = array.map((word) => {
    return word.toUpperCase();
  });
  return result;
}

const ejecucionTres = goMayus(minus);

console.log(ejecucionTres);

//- Crea una función que reciba un array de palabras y una letra. La función devolverá un array con las palabras que comiencen por esa letra, si no hay mostrará un mensaje por consola diciendo que ninguna palabra coincide.

const filterByLetter = (words, letter) => {
  const newWords = words.filter((word) => {
    return word.startsWith(letter);
  });

  if (newWords.length === 0) {
    console.log(`No hya palabras que empiecen por ${letter}`);
  } else {
    return newWords;
  }
};

const resultsFilterByLetter = filterByLetter(["rosca", "mayer", "ruzul"], "r");

console.log(resultsFilterByLetter);

//- Añade a la función anterior lo necesario para que funcione independientemente de mayusculas o minúsculas.

const filterByBetter = (words, letter) => {
  const newWords = words.filter((word) => {
    return word.toLowerCase().startsWith(letter.toLowerCase());
  });

  if (newWords.length === 0) {
    console.log(`No hya palabras que empiecen por ${letter}`);
  } else {
    return newWords;
  }
};

const resultsFilterByBetter = filterByBetter(["rosca", "mayer", "ruzul"], "r");

console.log(resultsFilterByLetter);

// - Crea una función que reciba un array de 10 números e imprima por consola la suma de todos los valores del array.

const sumAllValues = (numbers) => {
  const total = numbers.reduce((acc, number) => {
    return acc + number;
  });

  console.log(total);
};

sumAllValues([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// - Crea una función que reciba un array de 10 números, imprime por consola cada número, su cuadrado y su cubo en este formato:
//   "Número: 2 - Cuadrado: 4 - Cubo: 8".

const squareAndCube = (number) => {
  numbers.forEach((number) => {
    const square = Math.pow(number, 2);
    const cube = Math.pow(number, 3);
    console.log(`Numero ${number} - Cuadrado ${number} - Cubo ${number}`);
  });
};

squareAndCube([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

//- Crea una función que reciba una palabra e imprima por consola esa palabra pero con las vocales en mayúscula.

// const haveThisWord = (word) => {
//   const vowels = "aeiou";
//   const wordToArray = word.split("");
//   const finalWord = wordToArray.reduce((acc, letter) => {
//     if (vowels.includes(letter)) {
//       return acc + letter.toUpperCase();
//     }
//     return acc + letter;
//   }, "");

//   console.log(finalWord);
// };

// haveThisWord(["asqueroso"]);

// - Crea una función que reciba un array de 10 números. Dentro de esa función crea dos arrays llamados even (pares) y odd (impares), después multiplica cada uno de los números del array recibido por un número aleatorio entre 1 y 10, si el resultado es par, guárdalo en el array de pares, si es impar, en el array de impares, al final, imprime los 3 arrays por consola.

const evenAndOdd = (numbers) => {
  const even = [];
  const odd = [];

  numbers.forEach((number) => {
    const randomNumber = Math.floor(Math.random() * 10 + 1);
    const result = randomNumber * number;

    if (result % 2 === 0) even.push(result);
    else odd.push(result);
  });

  console.log(numbers);
  console.log(odd);
  console.log(even);
};

evenAndOdd([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// - Crea una función que reciba un array con 5 palabras, debes imprimir por consola un array que contenga la inicial y la última letra de cada palabra en mayúsculas, es decir, si nuestra función recibiera un array con ['hola', 'adios', 'gato', 'perro', 'casa'] deberá imprimir por consola ['H', 'A', 'A', 'S', 'G', 'O', 'P','O', 'C', 'A']. Si te quedas atascado puedes investigar la función flatMap() y flat()

const users = ["Ana", "Angel", "Carlos", "Laura"];
const numberss = [1, 6, 3, 4, 11, 32, 2];

users.sort((a, b) => a.localeCompare(b));
numbers.sort((a, b) => a - b);
console.log(users);

// - Crea una función que reciba un array de 10 números y te diga si alguno es mayor de 5.

const isThisNumberBigger = (array) => {
  const result = array.sort((a, b) => a - b);

  console.log(result);
};

isThisNumberBigger([6, 3, 9, 12, 4, 8, 5, 89, 4, 7]);
