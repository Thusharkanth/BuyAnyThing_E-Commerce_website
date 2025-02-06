var nameError = document.getElementById('name-error');
var emailError = document.getElementById('email-error');
var phoneError = document.getElementById('phone-error');
var subjectError = document.getElementById('subject-error');
var detailsError = document.getElementById('details-error');
var submitError = document.getElementById('submit-error');
var successModal = document.getElementById('success-modal');
var successMessage = document.getElementById('success-message');

function validateName() {
    var name = document.getElementById('name').value;
    if (!name) {
        nameError.innerHTML = "Name is required";
        return false;
    }
    if (!name.match(/^[A-Za-z]+\s[A-Za-z]+$/)) {
        nameError.innerHTML = "Write full name";
        return false;
    }
    nameError.innerHTML = "<i class='fas fa-check-circle'></i>";
    return true;
}

function validateEmail() {
    var email = document.getElementById('email').value;
    if (!email) {
        emailError.innerHTML = "Email is required";
        return false;
    }
    if (!email.match(/^[A-Za-z._\-0-9]+@[A-Za-z]+\.[a-z]{2,4}$/)) {
        emailError.innerHTML = "Invalid Email";
        return false;
    }
    emailError.innerHTML = "<i class='fas fa-check-circle'></i>";
    return true;
}

function validateContact() {
    var phone = document.getElementById('contact').value;
    if (!phone) {
        phoneError.innerHTML = "Phone number is required";
        return false;
    }
    if (phone.length !== 10) {
        phoneError.innerHTML = "Enter exactly 10 digits";
        return false;
    }
    if (!phone.match(/^[0-9]{10}$/)) {
        phoneError.innerHTML = "Invalid Phone Number";
        return false;
    }
    phoneError.innerHTML = "<i class='fas fa-check-circle'></i>";
    return true;
}

function validateSubject() {
    var subject = document.getElementById('subject').value;
    if (!subject) {
        subjectError.innerHTML = "Subject is required";
        return false;
    }
    subjectError.innerHTML = "<i class='fas fa-check-circle'></i>";
    return true;
}

function validateDetails() {
    var details = document.getElementById('details').value;
    if (!details) {
        detailsError.innerHTML = "Details are required";
        return false;
    }
    detailsError.innerHTML = "<i class='fas fa-check-circle'></i>";
    return true;
}

function validateForm() {
    var valid = true;

    if (!validateName()) valid = false;
    if (!validateEmail()) valid = false;
    if (!validateContact()) valid = false;
    if (!validateSubject()) valid = false;
    if (!validateDetails()) valid = false;

    if (!valid) {
        submitError.style.display = 'block';
        submitError.innerHTML = "Fill all the fields";
        setTimeout(function() { submitError.style.display = 'none'; }, 3000);
        return false;
    }

    // Show success modal
    showModal();
    // Reset form fields
    resetForm();
    return false; // Prevent form submission
}

function resetForm() {
    document.querySelector('form').reset();
    nameError.innerHTML = "";
    emailError.innerHTML = "";
    phoneError.innerHTML = "";
    subjectError.innerHTML = "";
    detailsError.innerHTML = "";
    submitError.innerHTML = "";
}

function showModal() {
    successMessage.innerHTML = "Form submitted successfully!";
    successModal.style.display = 'block';
}

function closeModal() {
    successModal.style.display = 'none';
}

// Close the modal when clicking outside of it
window.onclick = function(event) {
    if (event.target === successModal) {
        closeModal();
    }
};