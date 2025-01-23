function searchProducts(searchTerm) {
    fetch(`https://restful-api.dev/api/products?q=${searchTerm}`)
    .then(response => response.json())
    .then(data => {
        // Assuming you have a function to render products
        renderProducts(data.products);
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Failed to search products.');
    });
}

// Call searchProducts with the user input when the search is triggered
