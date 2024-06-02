
function initializeWarioWare() {
    const startPage = document.getElementById('startPage');
    const gamePage = document.getElementById('gamePage');
    const easyButton = document.getElementById('easyButton');
    const normalButton = document.getElementById('normalButton');
    const notPossibleButton = document.getElementById('notPossibleButton');
    const pauseButton = document.getElementById('pauseButton');

    easyButton.addEventListener('click', function() {
        startPage.style.display = 'none';
        gamePage.style.display = 'block';
        // Start easy mode microgames
    });

    normalButton.addEventListener('click', function() {
        startPage.style.display = 'none';
        gamePage.style.display = 'block';
        // Start normal mode microgames
    });

    notPossibleButton.addEventListener('click', function() {
        startPage.style.display = 'none';
        gamePage.style.display = 'block';
        // Start not possible mode microgames
    });

    pauseButton.addEventListener('click', function() {
        // Pause functionality to return to login page
        startPage.style.display = 'block';
        gamePage.style.display = 'none';
    });
}
