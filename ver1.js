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
//
