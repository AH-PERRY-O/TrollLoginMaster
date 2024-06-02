document.getElementById('enterButton').addEventListener('click', function() {
    let emailField = document.getElementById('email');
    let passwordField = document.getElementById('password');
    let messageDiv = document.getElementById('message');
    let smartBrainImage = document.getElementById('smartBrain');
    let loginPage = document.getElementById('loginPage');
    let secretPage = document.getElementById('secretPage');

    if (emailField.value === 'aidenhosseini@hg.schulserver.de') {
        // Navigate to the secret page
        loginPage.style.display = 'none';
        secretPage.style.display = 'block';
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
