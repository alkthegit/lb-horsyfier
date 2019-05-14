/* eslint-disable import/extensions */
import { Horsyfier } from './Horsyfier.mjs';
import Controller from './Controller.mjs';

const initializeApp = function initializeApp(document) {
  const appDiv = document.querySelector('#app-horsyfier');

  const controller = new Controller(appDiv, new Horsyfier());
  controller.initialize();
};

export default initializeApp;
