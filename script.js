document.getElementById('password').addEventListener('input', function() {
    let passwordField = document.getElementById('password');
    let messageDiv = document.getElementById('message');
    let smartBrainImage = document.getElementById('smartBrain');

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
});