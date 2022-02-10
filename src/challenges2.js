// Desafio 11
// Research: Function which returns largest/smallest in Array : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
function generatePhoneNumber(arrayNum) {
  if (arrayNum.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  if (Math.max(...arrayNum) > 9 || Math.min(...arrayNum) < 0) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  for (let number of arrayNum) {
    let count = 0;
    for (let number1 of arrayNum) {
      if (number1 === number) {
        count = count + 1;
      }
    }
    if (count > 2) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  let phoneNumString = '';
  for (let i = 0; i < arrayNum.length; i += 1) {
    if (i === 0) {
      phoneNumString = phoneNumString + '(';
      phoneNumString = phoneNumString + arrayNum[i];
    } else if (i === 1) {
      phoneNumString = phoneNumString + arrayNum[i];
      phoneNumString = phoneNumString + ') ';
    } else if (i === 6) {
      phoneNumString = phoneNumString + arrayNum[i];
      phoneNumString = phoneNumString + '-';
    } else {
      phoneNumString = phoneNumString + arrayNum[i];
    }
  }
  return phoneNumString;
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
