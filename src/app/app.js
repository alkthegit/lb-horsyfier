let position = 'a8';
let index = translatePositionNameToIndex(position);
console.log(`индекс клетки '${position}': ${index}`);

position = translateIndexToPositionName(index);
console.log(`клетка с индексом '${index}': ${position}`);
