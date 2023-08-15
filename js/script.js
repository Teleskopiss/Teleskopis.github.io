const searchBar = document.getElementById('searchBar');
const suggestionsContainer = document.getElementById('suggestions');
const inventorySlots = document.querySelectorAll('.inventory-slot');

const itemNames = ["diamond sword", "iron pickaxe", "golden apple", /* Add more item names */];

searchBar.addEventListener('input', () => {
    const searchText = searchBar.value.toLowerCase();
    const matchedItems = itemNames.filter(itemName => itemName.toLowerCase().includes(searchText));

    displaySuggestions(matchedItems);
});

function displaySuggestions(suggestions) {
    suggestionsContainer.innerHTML = '';

    suggestions.forEach(suggestion => {
        const suggestionElement = document.createElement('div');
        suggestionElement.textContent = suggestion;
        suggestionElement.classList.add('suggestion');

        suggestionElement.addEventListener('click', () => {
            searchBar.value = suggestion;
            suggestionsContainer.innerHTML = '';
        });

        suggestionsContainer.appendChild(suggestionElement);
    });
}

inventorySlots.forEach(slot => {
    slot.addEventListener('click', () => {
        const itemName = searchBar.value;
        const itemQuantity = parseInt(prompt('Enter item quantity:'));

        // Update slot content with user input
        slot.querySelector('img').src = `images/${itemName.toLowerCase().replace(/\s/g, '_')}.png`;
        slot.querySelector('input[type="text"]').value = itemName;
        slot.querySelector('input[type="number"]').value = itemQuantity;
    });
});
