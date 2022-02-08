// Desafio 1
function compareTrue(value1, value2) {
  if (value1 && value2 === true) {
    return true;
  } return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(str) {
  let strSeparated = [];
  let strEmpty = '';
  for (let i = 0; i <= str.length -1; i += 1) {
    if (i === str.length - 1) {
      strEmpty = strEmpty + str[i];
      strSeparated.push(strEmpty);
    }
    else if (str[i] === ' '){
      strSeparated.push(strEmpty);
      strEmpty = '';
    }
    else {
      strEmpty = strEmpty + str[i];
    }
  }
  return strSeparated;
}

// Desafio 4
function concatName(array) {
  let invert = array[array.length - 1] + ', ' + array[0];
  return invert;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + (ties * 1);
  return points;
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
