const submitButtonId = 'submitButton';
const currentPositionInputId = 'currentPosition';
const horsyFormId = 'horsyForm';

class HorsyfierController {
    containerDiv;

    /**
     * @type {Horsyfier}
     */
    horsyfier;

    _submitButton;
    _currentPositionInput;

    constructor(containerDiv, horsyfier) {
        this.containerDiv = containerDiv || document;
        if (typeof horsyfier === 'undefined') {
            throw new Error(`Для контроллера HorsyfierController небходимо установить значение управляющего класса Horsyfier. Передано значение: '${horsyfier}'`);
        }

        this.horsyfier = horsyfier;

        this.horsyForm.addEventListener('submit', this.onSubmit);
    }

    get submitButton() {
        return this._submitButton || (
            this._submitButton = this.containerDiv.querySelector(`#${submitButtonId}`)
        );
    }

    get currentPositionInput() {
        return this._currentPositionInput || (
            this._currentPositionInput = this.containerDiv.querySelector(`#${currentPositionInputId}`)
        );
    }

    get horsyForm() {
        return this._horsyFormIdt || (
            this._horsyFormId = this.containerDiv.querySelector(`#${horsyFormId}`)
        );
    }

    onSubmit = (event) => {
        event.preventDefault();

        this.horsyfier.setPosition(this.currentPositionInput.value);
        // this.horsyfier.currentPosition = this.currentPositionInput.value;
        const horseTargets = this.horsyfier.getHorseMoves();

        alert(`Допустимые ходы фигуры из клетки ${this.horsyfier.currentPosition}: \n\n\n  ${horseTargets.join("  ")}`)
    }
}