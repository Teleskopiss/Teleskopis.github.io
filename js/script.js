// script.js
const inventorySlots = document.querySelectorAll('.inventory-slot');

inventorySlots.forEach(slot => {
    slot.addEventListener('click', () => {
        const imgSrc = prompt('Enter item image source:');
        const itemName = prompt('Enter item name:');
        const itemQuantity = parseInt(prompt('Enter item quantity:'), 10);

        if (imgSrc && itemName !== null) {
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
            alert('Please enter valid item image source and name.');
        }
    });
});
