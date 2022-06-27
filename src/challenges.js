// Desafio 1
function compareTrue(A, B) {
  if (A === true && B === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, altura) {
  let areaTotal = (base * altura) / 2;
  return areaTotal;
}

// Desafio 3
function splitSentence(frase) {
  let array = frase.split(' ');
  return array;
}

// Desafio 4
function concatName(array) {
  let firstPosArray = array[0];
  let lastPosArray = array[array.length - 1];
  return `${lastPosArray}, ${firstPosArray}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  const resultado = wins * 3 + ties;
  return resultado;
}

// Desafio 6
function highestCount(array) {
  let maior = array[0];
  let contador = 1;
  for (let index = 1; index < array.length; index += 1) {
    if (array[index] === maior) {
      contador += 1;
    }
    if (array[index] > maior) {
      maior = array[index];
      contador = 1;
    }
  }
  return contador;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciaCat1 = cat1 - mouse;
  let distanciaCat2 = cat2 - mouse;
  let resposta = null;
  if (distanciaCat1 < 0) {
    distanciaCat1 *= -1;
  }
  if (distanciaCat2 < 0) {
    distanciaCat2 *= -1;
  }

  if (distanciaCat1 < distanciaCat2) {
    resposta = 'cat1';
  } else if (distanciaCat1 > distanciaCat2) {
    resposta = 'cat2';
  } else {
    resposta = 'os gatos trombam e o rato foge';
  }
  return resposta;
}

// Desafio 8
function fizzBuzz(array) {
  let newArray = [];
  for (let elemento of array) {
    if (elemento % 15 === 0) {
      newArray.push('fizzBuzz');
    } else if (elemento % 5 === 0) {
      newArray.push('buzz');
    } else if (elemento % 3 === 0) {
      newArray.push('fizz');
    } else {
      newArray.push('bug!');
    }
  }
  return newArray;
}

// Desafio 9
function encode(palavra) {
  palavra = palavra.replace(/a/g, 1);
  palavra = palavra.replace(/e/g, 2);
  palavra = palavra.replace(/i/g, 3);
  palavra = palavra.replace(/o/g, 4);
  palavra = palavra.replace(/u/g, 5);
  return palavra;
}
function decode(palavra) {
  palavra = palavra.replace(/1/g, 'a');
  palavra = palavra.replace(/2/g, 'e');
  palavra = palavra.replace(/3/g, 'i');
  palavra = palavra.replace(/4/g, 'o');
  palavra = palavra.replace(/5/g, 'u');
  return palavra;
}

// Desafio 10
function techList(array, string) {
  if (array.length === 0) {
    return 'Vazio!';
  }
  let lista = [];
  let arrayOrdenado = array.sort();
  for (let elemento of arrayOrdenado) {
    let obj = { tech: elemento, name: string };
    lista.push(obj);
  }
  return lista;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
