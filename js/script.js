// script.js
const inventorySlots = document.querySelectorAll('.inventory-slot');
const items = ["item1", "item2", "item3", /* Add more items */];

inventorySlots.forEach(slot => {
    slot.addEventListener('click', () => {
        const itemName = prompt('Enter item name:');
        const itemQuantity = parseInt(prompt('Enter item quantity:'), 10);

        if (items.includes(itemName)) {
            const imgSrc = `images/${itemName}.png`;
            const imgElement = document.createElement('img');
            imgElement.src = imgSrc;

            slot.innerHTML = '';
            slot.appendChild(imgElement);

            if (!isNaN(itemQuantity)) {
                const quantityElement = document.createElement('span');
                quantityElement.textContent = itemQuantity;
                quantityElement.classList.add('quantity');
                slot.appendChild(quantityElement);
            }
        } else {
            alert('Invalid item name.');
        }
    });
});
