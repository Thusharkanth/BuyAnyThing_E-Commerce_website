document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
        if (validateForm()) {
            window.location.href = 'home.html'; // Redirect to home.html if the form is valid
        }
    });
});

function validateForm() {
    var email = document.getElementById('email').value.trim();
    var password = document.getElementById('password').value.trim();
    var valid = true;
    var errorMessage = '';

    if (!email) {
        errorMessage += 'Email must be filled out.\n';
        valid = false;
    }

    if (!password) {
        errorMessage += 'Password must be filled out.\n';
        valid = false;
    }

    if (!valid) {
        alert(errorMessage);
    }

    return valid;
}
