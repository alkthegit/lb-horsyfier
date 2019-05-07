function initializeApp() {
    const appDiv = document.querySelector('#app-horsyfier');

    const horsyController = new HorsyfierController(appDiv, new Horsyfier());

    console.log(`Controller initialized`);
}
