console.log('it works');

// 1
function loopDePares(number) {
  for (let i = 0; i <= 100; i++) {
    if ((i + number) % 2 === 0) {
      console.log(`El número ${i + number} es par`);
    }
  }
}
// loopDePares(10);

// 2
function loopPalabra(number, word) {
  for (let index = 0; index <= 100; index++) {
    if ((index + number) % 2 === 1) {
      console.log(word);
    }
  }
}
// loopPalabra(1, 'asd');

// 3
function sumattion(number) {
  let sum = 0;
  for (let index = 0; index <= number; index++) {
    sum += index;
  }
  return sum;
}
// console.log(sumattion(2));

// 4
function callFun(number, fun) {
  fun(number);
}
// callFun(10, (num) => {
//   console.log(num);
// });

// 5
function nuevoArreglo(number) {
  let newArray = [];
  for (let i = 1; i <= number; i++) {
    newArray.push(i);
  }
  return newArray;
}
// console.log(nuevoArreglo(10));

// 6
function newSplit(string) {
  let stringSplit = [];
  for (let i = 0; i < string.length; i++) {
    stringSplit.push(string[i]);
  }
  return stringSplit;
}
// console.log(newSplit('hola'));

// 7
function middleChar(string) {
  let middlePos;
  if (string.length % 2 === 1) {
    // Impar
    middlePos = (string.length - 1) / 2;
    return string[middlePos];
  } else {
    middlePos = string.length / 2 - 1;
    return `${string[middlePos]}${string[middlePos + 1]}`;
  }
}
// console.log(middleChar('plataforma5'));

// 8
function moveZeros(array) {
  const array1 = [];
  const arrayZero = [];
  array.forEach((element) => {
    if (element === 0) {
      arrayZero.push(0);
      return;
    }
    array1.push(element);
  });
  return array1.concat(arrayZero);
}
// console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]));

// 9
function arrayHandler(array1, array2) {
  if (array1.length !== array2.length) {
    console.log('Los arrays no son del mismo largo');
    return;
  }
  array1.forEach((element, index) => {
    console.log(`Soy ${element} y yo soy ${array2[index]}`);
  });
}
// arrayHandler([1, 2, 3, 4], ['h', 'o', 'l', 'a']);

// 10
function mezclarArreglos(array1, array2) {
  const newArray = [];
  let maxLength;
  // Determinar el array más largo
  console.log(array1.length);
  console.log(array2.length);
  if (array1.length > array2.length) {
    // El primer array es más largo
    maxLength = array1.length;
  } else {
    // El segundo array es igual o más largo que el primero
    maxLength = array2.length;
  }

  for (let i = 0; i < maxLength; i++) {
    array1[i] !== undefined && newArray.push(array1[i]);
    array2[i] !== undefined && newArray.push(array2[i]);
  }
  return newArray;
}
// console.log(mezclarArreglos(['h', 'p'], [1, 2, 3, 4]));

// 11
// join
function newJoin(array, joiner) {
  let string = '';
  array.forEach((element) => {
    string += element;
    string += joiner;
  });
  return string;
}
// console.log(newJoin([1, 2, 3, 4, 5], ' '));

// pop
var transformArray = ['ant', 'bison', 'camel', 'duck', 'elephant'];
// console.log(transformArray);
function newPop(array) {
  let newArray = [];
  let popElement = array[array.length - 1];
  for (let i = 0; i < array.length - 1; i++) {
    newArray[i] = array[i];
  }
  return popElement;
}
// console.log(newPop(transformArray));
// console.log(transformArray);
// TODO: No puedo replicar la modificación del array original

// filter
function newFilter(array, filterFun) {
  const newArray = [];
  array.forEach((element) => {
    if (filterFun(element)) {
      newArray.push(element);
    }
  });
  return newArray;
}
// console.log(
//   newFilter([1, 2, 3, 4, 5], (e) => {
//     return e % 2 === 0;
//   })
// );

// map
function newMap(array, mapFun) {
  const newArray = [];
  array.forEach((element) => {
    newArray.push(mapFun(element));
  });
  return newArray;
}
// console.log(
//   newMap([1, 2, 3, 4, 5], (e) => {
//     return e * 10;
//   })
// );

// 12
function minSum(array) {
  let min1;
  let min2;

  if (array[0] < array[1]) {
    min1 = array[0];
    min2 = array[1];
  } else {
    min1 = array[1];
    min2 = array[0];
  }

  for (let i = 2; i < array.length; i++) {
    if (array[i] < min2) {
      if (array[i] < min1) {
        min2 = min1;
        min1 = array[i];
      } else {
        min2 = array[i];
      }
    }
  }

  return min1 + min2;
}
// console.log(minSum([1, 10, 43, 900, 20, 8]));

// 13
function arregloDeObjetos(number) {
  const newArray = [];
  for (let i = 1; i <= number; i++) {
    newArray.push({ valor: i });
  }
  return newArray;
}
// console.log(arregloDeObjetos(5));
// console.log(arregloDeObjetos(3));

// 15
arreglo = [
  { name: 'lucas', edad: 20 },
  { name: 'santi', edad: 22 },
];
function oneProperty(arreglo, property) {
  const newArray = [];
  arreglo.forEach((element) => {
    newArray.push({ [property]: element[property] });
  });
  return newArray;
}
// console.log(oneProperty(arreglo, 'edad'));
// console.log(oneProperty(arreglo, 'name'));

// 16
const abc = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7,
  h: 8,
  i: 9,
  j: 10,
  k: 11,
  l: 12,
  m: 13,
  n: 14,
  o: 15,
  p: 16,
  q: 17,
  r: 18,
  s: 19,
  t: 20,
  u: 21,
  v: 22,
  w: 23,
  x: 24,
  y: 25,
  z: 26,
};

function warWord(string1, string2) {
  let sumString1 = 0;
  let sumString2 = 0;

  for (let index = 0; index < string1.length; index++) {
    sumString1 += abc[string1[index]];
  }
  for (let index = 0; index < string2.length; index++) {
    sumString2 += abc[string2[index]];
  }

  return sumString1 > sumString2 ? string1 : string2;
}
console.log(warWord('hola', 'chau'));
console.log(warWord('love', 'friendship'));
