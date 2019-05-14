import { HorsyfierController } from './Controller.mjs';
import { Horsyfier } from './Horsyfier.mjs';

export function initializeApp(document) {
  const appDiv = document.querySelector('#app-horsyfier');

  const horsyController = new HorsyfierController(appDiv, new Horsyfier());
  horsyController.initialize();
}
