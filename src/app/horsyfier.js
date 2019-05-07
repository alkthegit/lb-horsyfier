horsyfier

/* В данной модели поиска возможных ходов шахматного коня используется представление множества клеток
шахматной доски как одномерного массива с диапазоном индексов [0; 63].

Нумерация клеток производится змейкой, начиная с нижнего левого угла движением вправо и вверх:

  [63] [  ] [  ] [  ] [  ] [  ] [57] [56] ←
  
→ [48] [  ] [  ] [  ] [  ] [  ] [54] [55]

...

  [15] [  ] [  ] [  ] [  ] [  ] [ 9] [ 8] ←
 
→ [ 0] [ 1] [  ] [  ] [  ] [  ] [  ] [ 7] 
*/

/* Массив всех возможных одномерных сдвигов индекса для вычисления целевого индекса допустимого хода - 
относительно индекса текущей позиции
Например, если конь стоит на клетке С3 (индекс 18, то сдвиг индекса -17 дает индекс позиции допустимого хода равный 18 + (-17) = 1,
что соответствует клетке B1 */
const horseTargetShifts = [-17, -15, -10, -6, 6, 10, 15, 17];

/* 'enum' - отображение для перевода буквы из названии клетки на шахматной доске в натуральное число от 1 до 8 */
const LettersValues = new Map([
    ['a', 1],
    ['b', 2],
    ['c', 3],
    ['d', 4],
    ['e', 5],
    ['f', 6],
    ['g', 7],
    ['h', 8],
    ['A', 1],
    ['B', 2],
    ['C', 3],
    ['D', 4],
    ['E', 5],
    ['F', 6],
    ['G', 7],
    ['H', 8],
    [1, 'a'],
    [2, 'b'],
    [3, 'c'],
    [4, 'd'],
    [5, 'e'],
    [6, 'f'],
    [7, 'g'],
    [8, 'h']
])

class Horsyfier {
    _currentIndex = 0;
    get currentPosition() {
        return translateIndexToPositionName(this._currentIndex);
    }

    set currentPosition(value) {
        this._currentIndex = translatePositionNameToIndex(value);
    }

    getHorseTargets() {
        const targets = [];

        return targets;
    }
}

function translateIndexToPositionName(index) {
    let position = 'a1';

    return position.toUpperCase();
}

function translatePositionNameToIndex(position) {
    let index = 0;
    const pos = position.toString();

    const posTestRegExp = /^[a-h][1-8]$/i;
    if (!posTestRegExp.test(pos)) {
        throw new Error(`Позиция задается строкой из двух символов вида A3(или а3), получено значение: '${pos}'`);
    }

    const [letter, digit] = pos.split('');
    console.table({ letter, digit });

    // смещение индекса от 0, задаваемое строкой (цифрой - 1, 2 и т.д.) 
    const rowShift = (digit - 1) * 8;

    /*  Смещение индекса от 0, задаваемое колонкой (буквой - A, B и т.д.) 
        В зависимости от четности строки, смещение индекса считается:
            - если номер строки - нечетный, то от 0 до 7 (от левого края доски, что соответствует счету в первой строке),
            - если номер строки - четный, то от 7 до 0 (от правого края доски) 
    */
    const columnShift = digit % 2 !== 0 ? LettersValues.get(letter) - 1 : (8 - (LettersValues.get(letter) - 1)) - 1;

    index = rowShift + columnShift;

    return index;
}