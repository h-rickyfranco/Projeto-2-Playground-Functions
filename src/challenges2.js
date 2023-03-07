// Desafio 11 - Crie a função generatePhoneNumber
function generatePhoneNumber(numbers) {
  if (numbers.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  const elementCounts = {};
  numbers.forEach((element) => { elementCounts[element] = (elementCounts[element] || 0) + 1; });
  if (elementCounts['0'] >= 3 || elementCounts['1'] >= 3 || elementCounts['2'] >= 3 || elementCounts['3'] >= 3 || elementCounts['4'] >= 3 || elementCounts['5'] >= 3 || elementCounts['6'] >= 3 || elementCounts['7'] >= 3 || elementCounts['8'] >= 3 || elementCounts['9'] >= 3) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] > 9 || numbers[index] < 0) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  return '(' + numbers[0] + numbers[1] + ') ' + numbers[2] + numbers[3] + numbers[4] + numbers[5] + numbers[6] + '-' + numbers[7] + numbers[8] + numbers[9] + numbers[10];
}

// Desafio 12 -  Crie a função triangleCheck
function triangleCheck(lineA, lineB, lineC) {
  let results = false;
  if (lineA < (lineB + lineC) && lineA > Math.abs(lineB - lineC)) {
    results = true;
  }
  if (lineB < (lineA + lineC) && lineB > Math.abs(lineA - lineC)) {
    results = true;
  }
  if (lineC < (lineB + lineA) && lineC > Math.abs(lineB - lineA)) {
    results = true;
  }
  if (lineA < (lineB + lineC) && lineB < (lineA + lineC) && lineC < (lineA + lineB)) {
    results = true;
  }
  return results;
}
// Desafio 13 - Crie a função hydrate
function hydrate(str) {
  let temp = '0';
  let sum = 0;
  for (let index = 0; index < str.length; index += 1) {
    let char = str[index];
    if (Number.isNaN(String(char))) {
      temp = '0';
    }
    temp += char;
    sum += parseInt(temp);
    temp = '0';
  }
  if (sum > 1) {
    return `${sum} copos de água`;
  }
  return `${sum} copo de água`;
}
/* eslint no-undef: 0 */

// Não modifique essas linhas
module.exports = {
  generatePhoneNumber: typeof generatePhoneNumber === 'function' ? generatePhoneNumber : (() => {}),
  triangleCheck: typeof triangleCheck === 'function' ? triangleCheck : (() => {}),
  hydrate: typeof hydrate === 'function' ? hydrate : (() => {}),
};
