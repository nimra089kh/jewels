function loadCart() {
    console.log("Loading cart...");
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const tableBody = document.getElementById('cart-items');
    const totalItem = document.getElementById('total-item');
    const totalPrice = document.getElementById('total-price');

    // Check if elements exist
    if (!tableBody || !totalItem || !totalPrice) {
        console.error('Cart table elements not found in DOM.');
        return;
    }

    // Clear previous content
    tableBody.innerHTML = '';
    totalItem.textContent = '0';
    totalPrice.textContent = '$ 0';

    if (cart.length === 0) {
        tableBody.innerHTML = '<tr><td colspan="4">Cart is empty!</td></tr>';
        return;
    }

    let total = 0;
    let totalQuantity = 0; // Initialize total quantity

    cart.forEach((item, index) => {
        if (!item.image) {
            console.error(`Item at index ${index} is missing the 'image' property:`, item);
            return;
        }

        const row = document.createElement('tr');
        row.innerHTML = `
            <td><img src="${item.image}" alt="${item.title}" style="width:30px"></td>
            <td>${item.title}</td>
            <td>
                <button class="decrementButton qauntity"><i class="fa fa-minus-circle" aria-hidden="true"></i></button>
                <span class="counter">${item.quantity || 1}</span> <!-- Use saved quantity or default to 1 -->
                <button class="incrementButton qauntity"><i class="fa fa-plus-circle" aria-hidden="true"></i></button>
            </td>
            <td class="item-price">${item.price}</td> <!-- Display price -->
        `;
        tableBody.appendChild(row);

        // Get the price and convert it to a number (assuming price is in the format $10)
        const itemPrice = parseFloat(item.price.replace('$', ''));

        // Add event listeners for the buttons within this row
        const incrementButton = row.querySelector('.incrementButton');
        const decrementButton = row.querySelector('.decrementButton');
        const counterSpan = row.querySelector('.counter');
        const priceCell = row.querySelector('.item-price');

        let counter = item.quantity || 1; // Load saved quantity, default to 1

        // Function to update the price of the item
        function updateItemPrice() {
            let updatedPrice = itemPrice * counter;
            priceCell.textContent = `$${updatedPrice.toFixed(2)}`; // Update item price in the row
        }

        // Function to update the total price and total quantity
        function updateTotalPrice() {
            total = 0; // Reset total price
            totalQuantity = 0; // Reset total quantity

            // Loop through each row in the table
            const rows = tableBody.querySelectorAll('tr'); // Use querySelectorAll to get all rows
            rows.forEach((row) => {
                const counter = parseInt(row.querySelector('.counter').textContent); // Get current quantity
                const price = parseFloat(row.querySelector('.item-price').textContent.replace('$', '')); // Get current price
                total += price ; // Add the price of each item based on its quantity
                totalQuantity += counter; // Add to the total quantity
            });

            totalItem.textContent = totalQuantity; // Update total quantity
            totalPrice.textContent = `$${total.toFixed(2)}`;
            localStorage.setItem('cart', JSON.stringify(cart)); // Save updated cart to localStorage
            localStorage.setItem('cartTotal', total.toFixed(2)); // Save total price in localStorage
            console.log('Cart total saved:', localStorage.getItem('cartTotal'));
        }

        // Initial price update for the item
        updateItemPrice();
        updateTotalPrice();  // Initial total price and quantity update

        // Increment functionality
        incrementButton.addEventListener('click', () => {
            counter++; // Increase the counter
            counterSpan.textContent = counter; // Update the quantity on the page
            item.quantity = counter; // Save the new quantity in the cart
            updateItemPrice(); // Update item price based on the new quantity
            updateTotalPrice(); // Update the total price and quantity for all items
        });

        // Decrement functionality
        decrementButton.addEventListener('click', () => {
            if (counter > 1) { // Prevent going below 1
                counter--; // Decrease the counter
                counterSpan.textContent = counter; // Update the quantity on the page
                item.quantity = counter; // Save the new quantity in the cart
                updateItemPrice(); // Update item price based on the new quantity
                updateTotalPrice(); // Update the total price and quantity for all items
            } else {
                // Remove the row and update the cart in localStorage if quantity is 1
                row.remove();
                cart.splice(index, 1); // Remove the item from the cart array
                localStorage.setItem('cart', JSON.stringify(cart)); // Save updated cart to localStorage
                updateTotalPrice(); // Update the total price and quantity after removing the item
            }
        });
    });

    // Initial total price and total quantity update
    updateTotalPrice();
}

document.addEventListener('DOMContentLoaded', loadCart);

// back to top button
window.onscroll = function() {
    const btn = document.getElementById("backToTopBtn");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
};

// Scroll smoothly to the top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
function searchFunction() {
    event.preventDefault();
    const input = document.getElementById('searchInput').value.toLowerCase();
    const paragraphs = document.querySelectorAll('p');
  
    // If input is empty, remove highlights and return
    if (input === '') {
      paragraphs.forEach(p => p.classList.remove('highlight'));
      return;
    }
  
    paragraphs.forEach(p => {
      if (p.innerHTML.toLowerCase().includes(input)) {
        p.classList.add('highlight'); // Highlight matching text
      } else {
        p.classList.remove('highlight');
      }
    });
  };

  
  document.querySelectorAll('.act').forEach(item => {
    item.addEventListener('click', function() {
        // Remove active class from all nav items
        document.querySelectorAll('.act').forEach(i => i.classList.remove('active'));
  
        // Add active class to the clicked item
        item.classList.add('active');
    });
  });