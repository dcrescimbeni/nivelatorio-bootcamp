// 1
function loopDePares(num) {
  for (let i = 0; i <= 100; i++) {
    if ((i + num) % 2 === 0) {
      console.log(`El número ${num + i} es par`);
    }
    console.log(i);
  }
}

// loopDePares(2);

// 3
function summation(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
}
// console.log(summation(3));
// console.log(summation(8));

// 4
function callback(param, fun) {
  return fun(param);
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

// 18

let prueba = {
  nombre: 'santi',
  edad: 22,
  nacionalidad: 'de otro planeta',
  documento: 44444444,
};

function reverseKeys(obj) {
  let newObj = {};
  if (typeof obj !== 'object') {
    return `error, input can't be a ${typeof obj}`;
  } else if (Array.isArray(obj)) {
    return `error, input can't be an Array`;
  }

  let arrKeys = Object.keys(obj);
  console.log(arrKeys);

  arrKeys.forEach((element) => {
    if (typeof obj[element] === 'string') {
      newObj[obj[element]] = element;
    } else {
      newObj[element] = obj[element];
    }
  });

  return newObj;
}

// console.log(reverseKeys(1));
// console.log(reverseKeys('asd'));
// console.log(reverseKeys([1, 2, 3, 4]));
// console.log(reverseKeys(prueba));

// 21
function consecutivosSimilares(string) {
  let sum = 0;

  for (let i = 1; i < string.length; i++) {
    if (string[i - 1] === string[i]) {
      sum++;
    }
  }
  return sum;
}
console.log(consecutivosSimilares('AAAA'));
console.log(consecutivosSimilares('BBBBB'));
console.log(consecutivosSimilares('ABABABAB'));
console.log(consecutivosSimilares('BABABA'));
console.log(consecutivosSimilares('AAABBB'));
