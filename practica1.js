// 20''

// 17
var prefijos = [54, 55, 56, 57, 58];
var paises = ['argentina', 'brasil', 'chile', 'colombia', 'venezuela'];

function validarPrefijo(number) {
  const prefijoPais = {};
  prefijos.forEach((item, index) => {
    prefijoPais[item] = paises[index];
  });
  const primerosDigitos = `${number[0]}${number[1]}`;

  if (prefijoPais[primerosDigitos]) {
    return `Este número pertenece a ${prefijoPais[primerosDigitos]}`;
  } else {
    return `Este número no pertenece a nuestros países`;
  }
}
// console.log(validarPrefijo('5412345678'));
// console.log(validarPrefijo('5712345678'));
// console.log(validarPrefijo('8012345678'));

// 8
function moveZeros(arr) {
  const arr1 = [];
  const arr2 = [];

  arr.forEach((item) => {
    if (item === 0) {
      arr2.push(item);
    } else {
      arr1.push(item);
    }
  });

  return [...arr1, ...arr2];
}
// console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, 'a']));
// console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]));

// 4
function callback(num, fun) {
  return fun(num);
}
// console.log(
//   callback(5, (num) => {
//     return num * 10;
//   })
// );
// console.log(
//   callback(25, (num) => {
//     return num / 5;
//   })
// );

// 16
var abc = {
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

  for (let i = 0; i < string1.length; i++) {
    sumString1 += abc[string1[i]];
  }
  for (let j = 0; j < string2.length; j++) {
    sumString2 += abc[string2[j]];
  }

  if (sumString1 > sumString2) {
    return string1;
  } else {
    return string2;
  }
}

// console.log(warWord('hola', 'chau'));
// console.log(warWord('love', 'friendship'));

// 14
function arregloDeObjetos(number, string) {
  const arr = [];

  for (let i = 1; i <= number; i++) {
    arr.push({ [string]: i });
  }
  return arr;
}

console.log(arregloDeObjetos(5, 'hola'));
console.log(arregloDeObjetos(3, 'chau'));
