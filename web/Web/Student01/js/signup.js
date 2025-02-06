document.addEventListener('DOMContentLoaded', function () {
    const signupForm = document.getElementById('signup_form');
    const preferencesPopup = document.getElementById('preferences_popup');
    const preferencesSubmitButton = document.getElementById('preferences_submit_button');
    const closeButton = document.querySelector('.close-button');
    const categoryButtons = document.querySelectorAll('.category-button');
    const submitButton = document.getElementById('submit_button');
    const termsAndConditions = document.getElementById('terms_and_conditions');
    const confirmPassword = document.getElementById('confirm_password');
    const password = document.getElementById('password');
    const passwordErrorMessage = document.getElementById('password_error_message');
    let selectedCategories = [];

    categoryButtons.forEach(button => {
        button.addEventListener('click', function () {
            const value = this.getAttribute('data-value');
            if (!selectedCategories.includes(value)) {
                selectedCategories.push(value);
                this.classList.add('selected');
            } else {
                selectedCategories = selectedCategories.filter(category => category !== value);
                this.classList.remove('selected');
            }
        });
    });

    signupForm.addEventListener('submit', function (event) {
        event.preventDefault();
        if (validateForm()) {
            preferencesPopup.style.display = 'block';
        }
    });

    closeButton.addEventListener('click', function () {
        preferencesPopup.style.display = 'none';
    });

    preferencesSubmitButton.addEventListener('click', function () {
        const usagePurpose = document.getElementById('usage_purpose').value;
        // Handle the submitted preferences if needed
        // For now, just redirect to home.html
        window.location.href = 'home.html';
    });

    termsAndConditions.addEventListener('change', function () {
        submitButton.disabled = !this.checked;
    });

    confirmPassword.addEventListener('input', function () {
        if (password.value !== confirmPassword.value) {
            confirmPassword.classList.add('error');
            passwordErrorMessage.textContent = "Passwords do not match";
        } else {
            confirmPassword.classList.remove('error');
            passwordErrorMessage.textContent = "";
        }
    });

    function validateForm() {
        let isValid = true;
        let errorMessage = '';

        const firstName = document.getElementById('first_name').value.trim();
        const lastName = document.getElementById('last_name').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm_password').value;
        const termsAndConditions = document.getElementById('terms_and_conditions').checked;

        if (firstName === '' || lastName === '' || email === '' || password === '' || confirmPassword === '') {
            errorMessage += 'All fields are required.\n';
            isValid = false;
        }

        if (password !== confirmPassword) {
            errorMessage += 'Passwords do not match.\n';
            isValid = false;
        }

        if (!termsAndConditions) {
            errorMessage += 'You must agree to the terms and conditions.\n';
            isValid = false;
        }

        if (isValid) {
            document.getElementById('form_error_message').textContent = '';
        } else {
            document.getElementById('form_error_message').textContent = errorMessage;
        }

        return isValid;
    }
});
