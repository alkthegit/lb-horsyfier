/* let position = 'a8';
let index = translatePositionNameToIndex(position);
console.log(`индекс клетки '${position}': ${index}`);

position = translateIndexToPositionName(index);
console.log(`клетка с индексом '${index}': ${position}`); */

let index = 62;
position = translateIndexToPositionName(index);
console.log(`клетка с индексом '${index}': ${position}`);


const horsePosition = 'd4'
const horsyfier = new Horsyfier();
horsyfier.currentPosition = horsePosition;
console.log(`Допустимые ходы конем из клетки ${horsePosition}:\n` + horsyfier.getHorseTargets().join(`\n`));
