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

// Rest of the code remains the same
