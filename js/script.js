// script.js
const searchBar = document.getElementById('searchBar');
const suggestionsContainer = document.getElementById('suggestions');

let itemData = []; // To store fetched item data

// Fetch item data from the JSON file
fetch('items.json')
    .then(response => response.json())
    .then(data => {
        itemData = data;
    })
    .catch(error => console.error('Error fetching item data:', error));

searchBar.addEventListener('input', () => {
    const searchText = searchBar.value.toLowerCase();
    const matchedItems = itemData.filter(item => item.name.toLowerCase().includes(searchText));

    displaySuggestions(matchedItems);
});

function displaySuggestions(suggestions) {
    suggestionsContainer.innerHTML = '';

    suggestions.forEach(suggestion => {
        const suggestionElement = document.createElement('div');
        suggestionElement.textContent = suggestion.name;
        suggestionElement.classList.add('suggestion');

        suggestionElement.addEventListener('click', () => {
            searchBar.value = suggestion.name;
            suggestionsContainer.innerHTML = '';

            // Update slot content with selected item
            const slot = suggestionsContainer.closest('.inventory-slot');
            slot.querySelector('img').src = `images/${suggestion.image}`;
            slot.querySelector('input[type="text"]').value = suggestion.name;
            // Update other slot content as needed
        });

        suggestionsContainer.appendChild(suggestionElement);
    });
}
