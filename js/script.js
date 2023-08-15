slots.forEach(slot => {
    slot.addEventListener('click', () => {
        const itemName = prompt('Enter item name:');
        const itemQuantity = parseInt(prompt('Enter item quantity:'));

        // Update slot content with user input
        const lowercaseItemName = itemName.toLowerCase().replace(/\s/g, '_'); // Convert to lowercase and replace spaces with underscores
        const itemImageSrc = `images/${lowercaseItemName}.png`;

        // Update slot content
        slot.querySelector('img').src = itemImageSrc;
        slot.querySelector('input[type="text"]').value = itemName;
        slot.querySelector('input[type="number"]').value = itemQuantity;
    });
});
