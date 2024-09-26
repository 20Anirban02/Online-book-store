// Retrieve current quantity and total price from local storage or default to 0
let quantity = parseInt(localStorage.getItem('cartQuantity')) || 0;
let totalPrice = parseFloat(localStorage.getItem('cartTotalPrice')) || 0;

// Update quantity and total price display
document.getElementById('quantity').textContent = quantity;
document.getElementById('totalPrice').textContent = totalPrice.toFixed(2); // toFixed(2) for 2 decimal places

// Function to add item to cart
function addBookA1() {
    quantity++;
    totalPrice += 189; // Example price. You can modify this as needed.
    

    
    // Update local storage
    localStorage.setItem('cartQuantity', quantity);
    localStorage.setItem('cartTotalPrice', totalPrice);

    // Update display
    document.getElementById('quantity').textContent = quantity;
    document.getElementById('totalPrice').textContent = totalPrice.toFixed(2);
}

function addBookA2() {
    quantity++;
    totalPrice += 189; // Example price. You can modify this as needed.
    

    
    // Update local storage
    localStorage.setItem('cartQuantity', quantity);
    localStorage.setItem('cartTotalPrice', totalPrice);

    // Update display
    document.getElementById('quantity').textContent = quantity;
    document.getElementById('totalPrice').textContent = totalPrice.toFixed(2);
}

function addBookA3() {
    quantity++;
    totalPrice += 299; // Example price. You can modify this as needed.
    

    
    // Update local storage
    localStorage.setItem('cartQuantity', quantity);
    localStorage.setItem('cartTotalPrice', totalPrice);

    // Update display
    document.getElementById('quantity').textContent = quantity;
    document.getElementById('totalPrice').textContent = totalPrice.toFixed(2);
}

function addBookA4() {
    quantity++;
    totalPrice += 249; // Example price. You can modify this as needed.
    

    
    // Update local storage
    localStorage.setItem('cartQuantity', quantity);
    localStorage.setItem('cartTotalPrice', totalPrice);

    // Update display
    document.getElementById('quantity').textContent = quantity;
    document.getElementById('totalPrice').textContent = totalPrice.toFixed(2);
}


function addBookB1() {
    quantity++;
    totalPrice += 149; // Example price. You can modify this as needed.
    

    
    // Update local storage
    localStorage.setItem('cartQuantity', quantity);
    localStorage.setItem('cartTotalPrice', totalPrice);

    // Update display
    document.getElementById('quantity').textContent = quantity;
    document.getElementById('totalPrice').textContent = totalPrice.toFixed(2);
}

function addBookB2() {
    quantity++;
    totalPrice += 149; // Example price. You can modify this as needed.
    

    
    // Update local storage
    localStorage.setItem('cartQuantity', quantity);
    localStorage.setItem('cartTotalPrice', totalPrice);

    // Update display
    document.getElementById('quantity').textContent = quantity;
    document.getElementById('totalPrice').textContent = totalPrice.toFixed(2);
}

function addBookB3() {
    quantity++;
    totalPrice += 149; // Example price. You can modify this as needed.
    

    
    // Update local storage
    localStorage.setItem('cartQuantity', quantity);
    localStorage.setItem('cartTotalPrice', totalPrice);

    // Update display
    document.getElementById('quantity').textContent = quantity;
    document.getElementById('totalPrice').textContent = totalPrice.toFixed(2);
}

function addBookB4() {
    quantity++;
    totalPrice += 199; // Example price. You can modify this as needed.
    

    
    // Update local storage
    localStorage.setItem('cartQuantity', quantity);
    localStorage.setItem('cartTotalPrice', totalPrice);

    // Update display
    document.getElementById('quantity').textContent = quantity;
    document.getElementById('totalPrice').textContent = totalPrice.toFixed(2);
}


function addBookC1() {
    quantity++;
    totalPrice += 149; // Example price. You can modify this as needed.
    

    
    // Update local storage
    localStorage.setItem('cartQuantity', quantity);
    localStorage.setItem('cartTotalPrice', totalPrice);

    // Update display
    document.getElementById('quantity').textContent = quantity;
    document.getElementById('totalPrice').textContent = totalPrice.toFixed(2);
}

function addBookC2() {
    quantity++;
    totalPrice += 149; // Example price. You can modify this as needed.
    

    
    // Update local storage
    localStorage.setItem('cartQuantity', quantity);
    localStorage.setItem('cartTotalPrice', totalPrice);

    // Update display
    document.getElementById('quantity').textContent = quantity;
    document.getElementById('totalPrice').textContent = totalPrice.toFixed(2);
}

function addBookC3() {
    quantity++;
    totalPrice += 299; // Example price. You can modify this as needed.
    

    
    // Update local storage
    localStorage.setItem('cartQuantity', quantity);
    localStorage.setItem('cartTotalPrice', totalPrice);

    // Update display
    document.getElementById('quantity').textContent = quantity;
    document.getElementById('totalPrice').textContent = totalPrice.toFixed(2);
}

function addBookC4() {
    quantity++;
    totalPrice += 199; // Example price. You can modify this as needed.
    

    
    // Update local storage
    localStorage.setItem('cartQuantity', quantity);
    localStorage.setItem('cartTotalPrice', totalPrice);

    // Update display
    document.getElementById('quantity').textContent = quantity;
    document.getElementById('totalPrice').textContent = totalPrice.toFixed(2);
}

function buy() {
    quantity = 0;
    totalPrice = 0;

    

    
    // Update local storage
    localStorage.setItem('cartQuantity', quantity);
    localStorage.setItem('cartTotalPrice', totalPrice);

    // Update display
    document.getElementById('quantity').textContent = quantity;
    document.getElementById('totalPrice').textContent = totalPrice.toFixed(2);
}
