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
function highestCount(numbers) {
  highestNumber = numbers[0];
  repeteHighest = 0;
  for (let i = 0; i < numbers.length; i += 1) {
    if (highestNumber < numbers[i]) {
      highestNumber = numbers[i];
    }
  }
  for (let i = 0; i < numbers.length; i += 1) {
    if (highestNumber === numbers[i]) {
      repeteHighest = repeteHighest + 1;
    }
  }
  return repeteHighest;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distance1 = Math.abs(cat1 - mouse);
  let distance2 = Math.abs(cat2 - mouse);
  if (distance1 > distance2) {
    return 'cat2';
  } 
  else if (distance1 < distance2) {
    return 'cat1';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(numberArray) {
  let newArray = [];
  for (let i = 0; i < numberArray.length; i += 1) {
    if (numberArray[i] %3 === 0 && numberArray[i] %5 === 0) {
      newArray.push('fizzBuzz');
    }
    else if (numberArray[i] %3 ===0) {
      newArray.push('fizz');
    }
    else if (numberArray[i] %5 ===0) {
      newArray.push('buzz');
    }
    else {
      newArray.push('bug!');
    } 
  }
  return newArray;
}
console.log(fizzBuzz([2,15,7,9,45]));

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
