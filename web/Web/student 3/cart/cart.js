// Function to start the quiz and calculate points
function startQuiz() {
    let score = 0;
    const questions = [
        { question: "What component is known as the 'brain' of the computer?", answer: "CPU" },
        { question: "Which component stores data permanently even when the computer is turned off?", answer: "Hard Drive" },
        { question: "What is the main component responsible for rendering graphics?", answer: "GPU" },
        { question: "Which part of the computer provides power to all other components?", answer: "Power Supply" },
        { question: "What type of memory is used for short-term data storage while the computer is running?", answer: "RAM" }
    ];

    questions.forEach(q => {
        let userAnswer = prompt(q.question);
        if (userAnswer.toLowerCase() === q.answer.toLowerCase()) {
            score += 2;
        } else {
            score -= 1;
        }
    });

    // Store the score in localStorage
    localStorage.setItem('quizScore', score);

    // Display the score and instruct the user to claim their points
    document.getElementById('quizResult').innerText = `You have earned ${score} points. Please claim the points in your next purchase.`;
}

// Function to calculate and apply discount based on points
function applyDiscount() {
    const score = parseInt(localStorage.getItem('quizScore')) || 0;
    let discount = 0;

    // Determine discount based on points
    if (score >= 8) {
        discount = 20; // 20% discount for 8 or more points
    } else if (score >= 5) {
        discount = 10; // 10% discount for 5-7 points
    }

    // Retrieve the total amount from the cart
    const totalAmount = parseFloat(document.getElementById('subtotal-price').innerText.replace('Rs. ', ''));
    const discountedAmount = totalAmount * (1 - discount / 100);

    // Display the discounted price
    document.getElementById('discount-amount').innerText = `Rs. ${discountedAmount.toFixed(2)}`;

    // Clear the quiz score after applying discount
    localStorage.removeItem('quizScore');
}

// Function to display the cart items
function displayCart() {
    const cartItemsContainer = document.getElementById('cartItems');
    if (cartItemsContainer) {
        cartItemsContainer.innerHTML = ''; // Clear previous contents

        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.forEach(item => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <span>${item.name}</span>
                <span>Price: Rs. ${item.price.toFixed(2)}</span>
                <span>Quantity: ${item.quantity}</span>
                <span>Total: Rs. ${(item.price * item.quantity).toFixed(2)}</span>
            `;
            cartItemsContainer.appendChild(listItem);
        });

        // Update the subtotal
        calculateSubtotal();
    }
}

// Function to calculate and display the subtotal
function calculateSubtotal() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    let subtotal = 0;
    cart.forEach(item => {
        subtotal += item.price * item.quantity;
    });
    document.getElementById('subtotal-price').innerText = `Rs. ${subtotal.toFixed(2)}`;
}

// Initial display of the cart when the page loads
document.addEventListener('DOMContentLoaded', displayCart);

// Function to open the checkout modal
function openCheckoutModal() {
    const checkoutModal = document.getElementById('checkoutModal');
    if (checkoutModal) {
        checkoutModal.style.display = 'block';
    }
}

// Function to close the checkout modal
function closeModal() {
    const checkoutModal = document.getElementById('checkoutModal');
    if (checkoutModal) {
        checkoutModal.style.display = 'none';
    }
}

// Event listener for the "Checkout" button
document.getElementById('checkout-button')?.addEventListener('click', function() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart.length === 0) {
        alert('Your cart is empty. Please add items to your cart before checking out.');
    } else {
        applyDiscount(); // Apply any quiz discounts before opening modal
        openCheckoutModal();
    }
});

// Function to handle the checkout process
document.getElementById('submit-button')?.addEventListener('click', function() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const errorMessages = document.getElementById('error-messages');

    let errors = [];
    if (!name) errors.push("Name is required.");
    if (!email) errors.push("Email is required.");
    if (!phone) errors.push("Phone is required.");
    if (!address) errors.push("Address is required.");

    if (errors.length > 0) {
        errorMessages.innerHTML = errors.join('<br>');
        errorMessages.style.display = 'block';
    } else {
        errorMessages.style.display = 'none';
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        let itemsOrdered = cart.map(item => `${item.quantity} x ${item.name}`).join(', ');
        alert(`Dear ${name}, you have ordered ${itemsOrdered}. Your total bill is ${document.getElementById('discount-amount').innerText}`);

        // Clear cart and close modal
        localStorage.removeItem('cart');
        closeModal();
        displayCart();
    }
});

// Event listener for the "Back to Shop" button
document.getElementById('back-to-shop-button')?.addEventListener('click', function() {
    window.location.href = 'shop.html'; // Redirect to the shop page
});

// Event listener for the "Take the Quiz" button
document.getElementById('startQuizButton')?.addEventListener('click', startQuiz);
