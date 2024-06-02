document.getElementById('enterButton').addEventListener('click', function() {
    let emailField = document.getElementById('email');
    let passwordField = document.getElementById('password');
    let messageDiv = document.getElementById('message');
    let smartBrainImage = document.getElementById('smartBrain');
    let loginPage = document.getElementById('loginPage');
    let wariowarePage = document.getElementById('wariowarePage');

    if (emailField.value === 'flappy@gmail.com') {
        // Navigate to the Flappy Bird game page
        loginPage.style.display = 'none';
        wariowarePage.style.display = 'block';
        initializeFlappyBird();
    } else if (emailField.value === 'wario@gmail.com') {
        // Navigate to the WarioWare microgames page
        loginPage.style.display = 'none';
        wariowarePage.style.display = 'block';
        initializeWarioWare();
    } else {
        // Handle invalid login
        messageDiv.textContent = 'Invalid email or password.';
    }
});

document.getElementById('darkModeToggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        document.getElementById('darkModeToggle').src = 'sun-icon.png';
    } else {
        document.getElementById('darkModeToggle').src = 'moon-icon.png';
    }
});
