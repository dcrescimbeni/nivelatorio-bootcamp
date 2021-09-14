// 1
function paresEImpares(num1, num2, str) {
  for (let i = 2; i <= num1; i += 2) {
    if (i % num2 === 0) {
      console.log(str);
    } else {
      console.log(i);
    }
  }
  for (let i = 1; i <= num1; i += 2) {
    if (i % num2 === 0) {
      console.log(str);
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
  if (str === 'index') {
    return minPos;
  }
  if (str === 'value') {
    return minNum;
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
  const filt = arr
    .filter((element) => {
      if (element.continente === cont && element.poblacion >= pob) {
        return true;
      }
    })
    .sort((a, b) => {
      return a.poblacion < b.poblacion ? -1 : 1;
    })
    .reduce(
      (obj, element, i, currArr) => {
        if (i === 0) {
          obj.menor = element.nombre;
        }
        if (i === currArr.length - 1) {
          obj.mayor = element.nombre;
        }
        obj.nombres.push(element.nombre);
        obj['poblacion total'] += element.poblacion;
        return obj;
      },
      { nombres: [], 'poblacion total': 0, mayor: '', menor: '' }
    );
  return filt;
}
console.log(doubleFilter(paises, 'sudamerica', 40000000));
