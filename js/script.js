const slots = document.querySelectorAll('.inventory-slot');

slots.forEach(slot => {
    slot.addEventListener('click', () => {
        const itemName = prompt('Enter item name:');
        const itemQuantity = parseInt(prompt('Enter item quantity:'));

        // Update slot content with user input
        slot.querySelector('img').src = `images/${itemName}.png`;
        slot.querySelector('input[type="text"]').value = itemName;
        slot.querySelector('input[type="number"]').value = itemQuantity;
    });
});
