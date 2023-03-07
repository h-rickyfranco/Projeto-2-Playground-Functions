// Desafio 1 - Crie a função compareTrue
const compareTrue = (val1, val2) => {
  if (val1 && val2 === true) {
    return true;
  }
  return false;
};
// Desafio 2 - Crie a função splitSentence
const splitSentence = (frase) => frase.split(' ');
// Desafio 3 - Crie a função concatName
function concatName(array) {
  return `${array[array.length - 1]}, ${array[0]}`;
}
// Desafio 4 - Crie a função footballPoints
function footballPoints(wins, ties) {
  return (wins * 3) + (ties);
}
// Desafio 5 - Crie a função highestCount
function highestCount(array) {
  let biggestNumber = array[0];
  let bnCount = 1;
  for (let index = 1; index < array.length; index += 1) {
    if (array[index] === biggestNumber) {
      bnCount += 1;
    }
    if (array[index] > biggestNumber) {
      biggestNumber = array[index];
      bnCount = 1;
    }
  }
  return bnCount;
}
// Desafio 6 - Crie as funções calcTriangleArea, calcRectangleArea e calcAllAreas
function calcTriangleArea(base, height) {
  return (base * height) / 2;
}
function calcRectangleArea(base, height) {
  return base * height;
}
function calcAllAreas(base, height, form) {
  if (form === 'triângulo') {
    return `O valor da área do triângulo é de: ${calcTriangleArea(base, height)}`;
  } if (form === 'retângulo') {
    return `O valor da área do retângulo é de: ${calcRectangleArea(base, height)}`;
  }
  return 'Não foi possível fazer o cálculo, insira uma forma geométrica válida';
}
// Desafio 7 - Crie a função catAndMouse
function catAndMouse(mouse, cat1, cat2) {
  const cat1ToMouse = Math.abs(cat1 - mouse);
  const cat2ToMouse = Math.abs(cat2 - mouse);
  if (cat1ToMouse < cat2ToMouse) {
    return 'cat1';
  } if (cat2ToMouse < cat1ToMouse) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}
// Desafio 8 - Crie a função fizzBuzz

function fizzBuzz(array) {
  let results = [];
  for (let index = 0; index < array.length; index += 1) {
    if ((array[index] % 3 === 0) && (array[index] % 5 !== 0)) {
      results.push('fizz');
    } if ((array[index] % 3 !== 0) && (array[index] % 5 === 0)) {
      results.push('buzz');
    } if ((array[index] % 3 === 0) && (array[index] % 5 === 0)) {
      results.push('fizzBuzz');
    } if ((array[index] % 3 !== 0) && (array[index] % 5 !== 0)) {
      results.push('bug!');
    }
  }
  return results;
}

// Desafio 9 - Crie a função encode e a função decode
function encode(frase) {
  let fraseA = frase.replace(/a/gi, '1');
  let fraseE = fraseA.replace(/e/gi, '2');
  let fraseI = fraseE.replace(/i/gi, '3');
  let fraseO = fraseI.replace(/o/gi, '4');
  let fraseU = fraseO.replace(/u/gi, '5');
  return fraseU;
}
function decode(frase) {
  let fraseA = frase.replace(/1/gi, 'a');
  let fraseE = fraseA.replace(/2/gi, 'e');
  let fraseI = fraseE.replace(/3/gi, 'i');
  let fraseO = fraseI.replace(/4/gi, 'o');
  let fraseU = fraseO.replace(/5/gi, 'u');
  return fraseU;
}
// Desafio 10 - Crie a função techList
function techList(array, personName) {
  let arraySort = array.sort();
  let results = [];
  let object = {};
  for (let index = 0; index < array.length; index += 1) {
    object.tech = arraySort[index];
    object.name = personName;
    results.push(object);
    object = {};
  }
  return results;
}
// Não modifique essas linhas
module.exports = {
  calcTriangleArea: typeof calcTriangleArea === 'function' ? calcTriangleArea : (() => {}),
  calcRectangleArea: typeof calcRectangleArea === 'function' ? calcRectangleArea : (() => {}),
  calcAllAreas: typeof calcAllAreas === 'function' ? calcAllAreas : (() => {}),
  catAndMouse: typeof catAndMouse === 'function' ? catAndMouse : (() => {}),
  compareTrue: typeof compareTrue === 'function' ? compareTrue : (() => {}),
  concatName: typeof concatName === 'function' ? concatName : (() => {}),
  decode: typeof decode === 'function' ? decode : (() => {}),
  encode: typeof encode === 'function' ? encode : (() => {}),
  fizzBuzz: typeof fizzBuzz === 'function' ? fizzBuzz : (() => {}),
  footballPoints: typeof footballPoints === 'function' ? footballPoints : (() => {}),
  highestCount: typeof highestCount === 'function' ? highestCount : (() => {}),
  splitSentence: typeof splitSentence === 'function' ? splitSentence : (() => {}),
  techList: typeof techList === 'function' ? techList : (() => {}),
};
