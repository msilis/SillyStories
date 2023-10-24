const clearStorage = (): void => {
    if (localStorage.getItem('friendNameInput') !== null) {
        localStorage.removeItem('friendNameInput');
    }
    if (localStorage.getItem('colorInput') !== null) {
        localStorage.removeItem('colorInput');
    }
    if (localStorage.getItem('animalInput') !== null) {
        localStorage.removeItem('animalInput');
    }
    if (localStorage.getItem('cityNameInput') !== null) {
        localStorage.removeItem('cityNameInput');
    }
    if (localStorage.getItem('foodInput') !== null) {
        localStorage.removeItem('foodInput');
    }
};

export { clearStorage };
