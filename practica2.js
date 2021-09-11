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
function min(arr, string) {
  let minPos = 0;
  let minNumber = arr[minPos];
  arr.forEach((item, index) => {
    if (item <= minNumber) {
      minNumber = item;
      minPos = index;
    }
  });

  if (string === 'value') {
    return minNumber;
  } else if (string === 'index') {
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
    nombre: 'españa',
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

function doubleFilter(arr, cont, poblacion) {
  const newObj = {
    nombres: [],
    'poblacion total': 0,
    mayor: '',
    menor: '',
  };

  let paisMayor = {
    nombre: '',
    poblacion: 0,
  };
  let paisMenor = {
    nombre: '',
    poblacion: 0,
  };

  const newArr = arr.filter((pais) => {
    if (pais.continente === cont) {
      if (pais.poblacion >= poblacion) {
        // Agregar objetos
        newObj.nombres.push(pais.nombre);
        newObj['poblacion total'] += pais.poblacion;

        // Verificacion mayor menor
        if (paisMayor.nombre === '') {
          paisMayor.nombre = pais.nombre;
          paisMayor.poblacion = pais.poblacion;
          paisMenor.nombre = pais.nombre;
          paisMenor.poblacion = pais.poblacion;
        } else {
          if (paisMayor.poblacion < pais.poblacion) {
            paisMayor.nombre = pais.nombre;
            paisMayor.poblacion = pais.poblacion;
          } else if (paisMenor.poblacion > pais.poblacion) {
            paisMenor.nombre = pais.nombre;
            paisMenor.poblacion = pais.poblacion;
          }
        }
      }
    }
  });

  newObj.mayor = paisMayor.nombre;
  newObj.menor = paisMenor.nombre;

  return newObj;
}

console.log(doubleFilter(paises, 'sudamerica', 30000000));
