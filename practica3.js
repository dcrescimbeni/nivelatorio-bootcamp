// 1
function paresEImpares(number1, number2, string) {
  for (let i = 2; i <= number1; i += 2) {
    if (i % number2 === 0) {
      console.log(string);
    } else {
      console.log(i);
    }
  }

  for (let i = 1; i <= number1; i += 2) {
    if (i % number2 === 0) {
      console.log(string);
    } else {
      console.log(i);
    }
  }
}

// paresEImpares(10, 7, 'prueba');

// 2
function min(arr, str) {
  let minNum = arr[0];
  let minPos = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < minNum) {
      minNum = arr[i];
      minPos = i;
    }
  }

  if (str === 'value') {
    return minNum;
  } else if (str === 'index') {
    return minPos;
  }
}

// console.log(min([5, 8, 2, 3, 4, 9, 1, 18], 'index'));
// console.log(min([5, 8, 2, 3, 4, 9, 1, 18], 'value'));

// 3

var paises = [
  {
    nombre: 'argentina',
    continente: 'sudamerica',
    poblacion: 40000000,
  },
  {
    nombre: 'brasil',
    continente: 'sudamerica',
    poblacion: 300000000,
  },
  {
    nombre: 'venezuela',
    continente: 'sudamerica',
    poblacion: 25000000,
  },
  {
    nombre: 'chile',
    continente: 'sudamerica',
    poblacion: 10000000,
  },
  {
    nombre: 'australia',
    continente: 'oceania',
    poblacion: 18000000,
  },
  {
    nombre: 'nueva zelanda',
    continente: 'oceania',
    poblacion: 8000000,
  },
  {
    nombre: 'china',
    continente: 'asia',
    poblacion: 1000000000,
  },
  {
    nombre: 'tailandia',
    continente: 'asia',
    poblacion: 32000000,
  },
  {
    nombre: 'vietnam',
    continente: 'asia',
    poblacion: 23000000,
  },
  {
    nombre: '‘españa',
    continente: 'europa',
    poblacion: 29000000,
  },
  {
    nombre: 'alemania',
    continente: 'europa',
    poblacion: 33000000,
  },
  {
    nombre: 'francia',
    continente: 'europa',
    poblacion: 65000000,
  },
  {
    nombre: 'portugal',
    continente: 'europa',
    poblacion: 4000000,
  },
  {
    nombre: 'grecia',
    continente: 'europa',
    poblacion: 12000000,
  },
];

function doubleFilter(arr, cont, pob) {
  const datos = [];
  const filtrado = arr
    .filter((pais) => {
      if (pais.continente === cont && pais.poblacion >= pob) {
        datos.push([pais.nombre, pais.poblacion]);
        return true;
      }
    })
    .reduce(
      (obj, pais) => {
        obj.nombres.push(pais.nombre);
        obj['poblacion total'] += pais.poblacion;
        return obj;
      },
      { nombres: [], 'poblacion total': 0 }
    );

  let arrSort = datos.sort((a, b) => {
    return a[1] < b[1] ? -1 : 1;
  });
  filtrado.mayor = arrSort[arrSort.length - 1][0];
  filtrado.menor = arrSort[0][0];
  return filtrado;
}

console.log(doubleFilter(paises, 'sudamerica', 30000000));
