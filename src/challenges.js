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
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
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
