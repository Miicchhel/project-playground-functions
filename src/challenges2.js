// Desafio 11
function validaTamanho(array) {
  if (array.length !== 11) {
    return true;
  }
  return false;
}

function validaIntervalo(array) {
  for (let elem of array) {
    if (elem < 0 || elem > 9) {
      return true;
    }
  }
  return false;
}

function contaNum(array, i) {
  let cont = 0;
  for (let j = i; j < array.length; j += 1) {
    if (array[i] === array[j]) {
      cont += 1;
    }
    if (cont === 3) {
      return true;
    }
  }
  return false;
}

function validaRepeticao(array) {
  for (let i = 0; i < array.length; i += 1) {
    let erro = contaNum(array, i);
    if (erro) {
      return true;
    }
  }
  return false;
}

function montaNum(array) {
  let ddd = `(${array[0]}${array[1]})`;
  let inicioNum = `${array[2]}${array[3]}${array[4]}${array[5]}${array[6]}`;
  let fimNum = `${array[7]}${array[8]}${array[9]}${array[10]}`;
  return `${ddd} ${inicioNum}-${fimNum}`;
}
function generatePhoneNumber(array) {
  if (validaTamanho(array)) {
    return 'Array com tamanho incorreto.';
  }

  if (validaIntervalo(array)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }

  if (validaRepeticao(array)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }

  return montaNum(array);
}

// Desafio 12
function validaLadosSoma(lineA, lineB, lineC) {
  if (lineA > (lineB + lineC) || lineB > (lineA + lineC) || lineC > (lineB + lineA)) {
    return true;
  }
  return false;
}

function validaLadosModulo(lineA, lineB, lineC) {
  if (lineA < Math.abs(lineB - lineC)) {
    return true;
  }
  if (lineB < Math.abs(lineA - lineC)) {
    return true;
  }
  if (lineC < Math.abs(lineB - lineA)) {
    return true;
  }
  return false;
}
function triangleCheck(lineA, lineB, lineC) {
  let valSoma = validaLadosSoma(lineA, lineB, lineC);
  let valModulo = validaLadosModulo(lineA, lineB, lineC);
  if (valSoma || valModulo) {
    return false;
  }
  return true;
}

// Desafio 13
function hydrate(string) {
  let array = string.match(/\d+/g);
  let somaCopos = 0;
  for (let index = 0; index < array.length; index += 1) {
    somaCopos += parseInt(array[index], 10);
  }
  if (somaCopos === 1) {
    return `${somaCopos} copo de água`;
  }
  return `${somaCopos} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
