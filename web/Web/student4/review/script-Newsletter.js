document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('subscriptionForm').addEventListener('submit', function(event) {
        event.preventDefault();
        
        const firstName = document.getElementById('fname').value.trim();
        const lastName = document.getElementById('lname').value.trim();
        const email = document.getElementById('email').value.trim();

        if (firstName === '' || lastName === '' || email === '') {
            alert('Please fill in all fields.');
            return;
        }

        if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        alert(`Dear ${firstName}, you have successfully subscribed for a personalized newsletter.`);
    });

    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return re.test(email);
    }
});
