document.getElementById('enterButton').addEventListener('click', function() {
    let emailField = document.getElementById('email');
    let passwordField = document.getElementById('password');
    let messageDiv = document.getElementById('message');
    let smartBrainImage = document.getElementById('smartBrain');
    let loginPage = document.getElementById('loginPage');
    let secretPage = document.getElementById('secretPage');

    if (emailField.value === 'flappy@gmail.com') {
        // Navigate to the secret page
        loginPage.style.display = 'none';
        secretPage.style.display = 'flex';
        initializeFlappyBird(); // Initialize the Flappy Bird game
    } else {
        if (passwordField.value === 'password') {
            messageDiv.textContent = 'Try again';
        } else if (passwordField.value === 'again') {
            messageDiv.textContent = 'Wrong password, try again later';
        } else if (passwordField.value === 'again later') {
            messageDiv.textContent = '';
            smartBrainImage.style.display = 'block';
        } else {
            messageDiv.textContent = '';
            smartBrainImage.style.display = 'none';
        }
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

document.getElementById('backButton').addEventListener('click', function() {
    document.getElementById('secretPage').style.display = 'none';
    document.getElementById('loginPage').style.display = 'block';
});

document.getElementById('backToLoginButton').addEventListener('click', function() {
    document.getElementById('secretPage').style.display = 'none';
    document.getElementById('loginPage').style.display = 'block';
});
