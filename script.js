document.getElementById('enterButton').addEventListener('click', function() {
    let emailField = document.getElementById('email');
    let passwordField = document.getElementById('password');
    let messageDiv = document.getElementById('message');
    let smartBrainImage = document.getElementById('smartBrain');
    let loginPage = document.getElementById('loginPage');
    let secretPage = document.getElementById('secretPage');

    if (emailField.value === 'aidenhosseini@outlook.de') {
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

document.getElementById('registerButton').addEventListener('click', function() {
    document.getElementById('loginPage').style.display = 'none';
    document.getElementById('registerPage').style.display = 'block';
});

document.getElementById('registerSubmitButton').addEventListener('click', function() {
    let nameField = document.getElementById('regName').value;
    let emailField = document.getElementById('regEmail').value;
    let passwordField = document.getElementById('regPassword').value;

    // Mock sending an email
    sendEmail(nameField, emailField, passwordField);

    document.getElementById('registerPage').style.display = 'none';
    document.getElementById('confirmEmailPage').style.display = 'block';
});

document.getElementById('confirmCodeButton').addEventListener('click', function() {
    document.getElementById('confirmEmailPage').style.display = 'none';
    document.getElementById('accountCreatedPage').style.display = 'block';
});

document.getElementById('backToLoginButtonFromCreated').addEventListener('click', function() {
    document.getElementById('accountCreatedPage').style.display = 'none';
    document.getElementById('loginPage').style.display = 'block';
});


}

// Dark mode toggle
document.getElementById('darkModeToggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        this.src = 'sun-icon.png';
    } else {
        this.src = 'moon-icon.png';
    }
});
