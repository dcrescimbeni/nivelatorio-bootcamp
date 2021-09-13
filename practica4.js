// 1
function paresEImpares(number1, number2, string) {
  for (let i = 2; i <= number1; i += 2) {
    i % number2 === 0 ? console.log(string) : console.log(i);
  }

  for (let i = 1; i <= number1; i += 2) {
    i % number2 === 0 ? console.log(string) : console.log(i);
  }
}
// paresEImpares(10, 7, 'prueba');

// 2
function min(arr, string) {
  let minNum = arr[0];
  let minPos = 0;

  arr.map((element, index) => {
    if (element < minNum) {
      minNum = element;
      minPos = index;
    }
  });

  if (string === 'value') {
    return minNum;
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

function doubleFilter(arr, cont, pob) {
  let minMax = {
    mayor: {
      nombre: '',
      poblacion: 0,
    },
    menor: {
      nombre: '',
      poblacion: 0,
    },
  };

  let filtered = arr
    .filter((element) => {
      if (element.continente === cont && element.poblacion >= pob) {
        return true;
      }
    })
    .reduce(
      (obj, element) => {
        // Añadir elemento
        obj.nombres.push(element.nombre);
        obj.poblacion += element.poblacion;

        // Mayor menor
        if (minMax.mayor.nombre === '') {
          // Primer caso, todo vacio
          minMax.mayor.nombre = element.nombre;
          minMax.mayor.poblacion = element.poblacion;
          minMax.menor.nombre = element.nombre;
          minMax.menor.poblacion = element.poblacion;

          obj.mayor = element.nombre;
          obj.menor = element.nombre;
        } else {
          // Segundo caso, ya hay nombres
          // Mayor
          if (minMax.mayor.poblacion < element.poblacion) {
            minMax.mayor.nombre = element.nombre;
            minMax.mayor.poblacion = element.poblacion;

            obj.mayor = element.nombre;
          } else if (minMax.menor.poblacion > element.poblacion) {
            minMax.menor.nombre = element.nombre;
            minMax.menor.poblacion = element.poblacion;

            obj.menor = element.nombre;
          }
        }
        return obj;
      },
      { nombres: [], poblacion: 0, mayor: '', menor: '' }
    );

  return filtered;
}
console.log(doubleFilter(paises, 'sudamerica', 30000000));
