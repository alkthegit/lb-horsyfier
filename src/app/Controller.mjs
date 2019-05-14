const submitButtonId = 'submitButton';
const currentPositionInputId = 'currentPosition';
const horsyFormId = 'horsyForm';

export default class Controller {
  constructor(containerDiv, horsyfier) {
    this.containerDiv = containerDiv;
    if (typeof horsyfier === 'undefined') {
      throw new Error(
        `Для контроллера HorsyfierController небходимо установить значение управляющего класса Horsyfier. Передано значение: '${horsyfier}'`,
      );
    }
    this.horsyfier = horsyfier;
  }

  initialize() {
    this.submitButton = this.containerDiv.querySelector(`#${submitButtonId}`);
    this.currentPositionInput = this.containerDiv.querySelector(`#${currentPositionInputId}`);
    this.horsyForm = this.containerDiv.querySelector(`#${horsyFormId}`);

    // обработчики событий
    this.onSubmit = this.onSubmit.bind(this);

    this.horsyForm.addEventListener('submit', this.onSubmit);
  }

  onSubmit(event) {
    event.preventDefault();

    this.horsyfier.setPosition(this.currentPositionInput.value);
    // this.horsyfier.currentPosition = this.currentPositionInput.value;
    const horseTargets = this.horsyfier.getHorseMoves();

    // eslint-disable-next-line no-alert, no-undef
    alert(
      `Допустимые ходы фигуры из клетки ${
        this.horsyfier.currentPosition
      }: \n\n  ${horseTargets.join('  ')}`,
    );
  }
}
