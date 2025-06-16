let cartQuantity = 0;

// Function to update cart display
function updateCartDisplay() {
    let cartElement = document.getElementById('cart-quantity');
    if (!cartElement) {
        // Create cart display if it doesn't exist
        cartElement = document.createElement('div');
        cartElement.id = 'cart-quantity';
        cartElement.style.position = 'fixed';
        cartElement.style.top = '70px';
        cartElement.style.right = '20px';
        cartElement.style.background = '#222';
        cartElement.style.color = '#fff';
        cartElement.style.padding = '10px 20px';
        cartElement.style.borderRadius = '20px';
        cartElement.style.zIndex = '9999';
        cartElement.style.fontWeight = 'bold';
        document.body.appendChild(cartElement);
    }
    cartElement.textContent = `Cart: ${cartQuantity}`;
}

// Add click handlers for each button
['button-1', 'button-2', 'button-3'].forEach(function(id) {
    const btn = document.getElementById(id);
    if (btn) {
        btn.onclick = function() {
            cartQuantity += 1;
            updateCartDisplay();
        };
    }
});

// Initialize cart display on page load
updateCartDisplay();