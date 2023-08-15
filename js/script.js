// script.js
const searchBar = document.getElementById('searchBar');
const suggestionsContainer = document.getElementById('suggestions');

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
