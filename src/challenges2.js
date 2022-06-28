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

function validaRepeticao(array) {
  for (let i = 0; i < array.length; i += 1) {
    let cont = 0;
    for (let j = i; j < array.length; j += 1) {
      if (array[i] === array[j]) {
        cont += 1;
      }
      if (cont === 3) {
        return true;
      }
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
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
