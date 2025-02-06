// Retrieve the cart from localStorage, or initialize an empty array if it doesn't exist
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to handle adding products to the cart
function addToCart(productElement) {
    const productName = productElement.getAttribute('data-name');
    const productPrice = parseFloat(productElement.getAttribute('data-price'));
    const productImage = productElement.querySelector('img').src;

    // Check if the product already exists in the cart
    const existingItem = cart.find(item => item.name === productName);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            name: productName,
            price: productPrice,
            image: productImage,
            quantity: 1
        });
    }

    // Save the updated cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Display an alert message and navigate to the cart page
    alert(`${productName} has been added to your cart.`);
    window.location.href = 'cart.html'; // Navigate to the cart page
}

// Function to display the cart items
function displayCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    if (cartItemsContainer) {
        cartItemsContainer.innerHTML = ''; // Clear previous contents

        cart.forEach(item => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <span>${item.name}</span>
                <span>Price: $${item.price.toFixed(2)}</span>
                <span>Quantity: ${item.quantity}</span>
            `;
            cartItemsContainer.appendChild(listItem);
        });
    }
}

// Initial display of the cart when the page loads
document.addEventListener('DOMContentLoaded', displayCart);

// Event listener for the "Add to Cart" buttons
document.querySelectorAll('.add-to-cart').forEach(function(btn) {
    btn.addEventListener('click', function() {
        const productElement = this.closest('.pro');
        addToCart(productElement);
    });
});

// Event listener for the product details buttons
document.querySelectorAll('.details-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
        const details = this.nextElementSibling;
        details.style.display = details.style.display === 'block' ? 'none' : 'block';
    });
});

// Event listener for the "View Cart" button
document.getElementById('viewCartButton').addEventListener('click', function() {
    window.location.href = 'cart.html';
});
