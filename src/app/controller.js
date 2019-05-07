const submitButtonId = 'submitButton';
const currentPositionInputId = 'currentPosition';
const horsyFormId = 'horsyForm';

class HorsyfierController {
    _containerDiv;
    _horsyfier;

    _submitButton;
    _currentPositionInput;

    constructor(containerDiv, horsyfier) {
        this._containerDiv = containerDiv || document;
        if (typeof horsyfier === 'undefined') {
            throw new Error(`Для контроллера HorsyfierController небходимо установить значение управляющего класса Horsyfier. Передано значение: '${horsyfier}'`);
        }

        this._horsyfier = horsyfier;

        this.horsyForm.addEventListener('submit', this.onSubmit);
    }

    get submitButton() {
        return this._submitButton || (
            this._submitButton = this._containerDiv.querySelector(`#${submitButtonId}`)
        );
    }

    get currentPositionInput() {
        return this._currentPositionInput || (
            this._currentPositionInput = this._containerDiv.querySelector(`#${currentPositionInputId}`)
        );
    }

    get horsyForm() {
        return this._horsyFormIdt || (
            this._horsyFormId = this._containerDiv.querySelector(`#${horsyFormId}`)
        );
    }

    onSubmit = (event) => {
        event.preventDefault();

        this._horsyfier.currentPosition = this.currentPositionInput.value;
        const horseTargets = this._horsyfier.getHorseTargets();

        alert(`Допустимые ходы фигуры из клетки ${this._horsyfier.currentPosition}: \n\n\n  ${horseTargets.join("  ")}`)
    }
}