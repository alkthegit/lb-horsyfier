// eslint-disable-next-line import/extensions
import initializeApp from './app/app.mjs';

const initialize = function initialize() {
  // eslint-disable-next-line no-undef
  initializeApp(document);
};

// eslint-disable-next-line no-undef
document.addEventListener('DOMContentLoaded', initialize);
