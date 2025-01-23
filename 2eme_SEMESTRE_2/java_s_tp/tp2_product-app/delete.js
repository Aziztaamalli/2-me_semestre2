function deleteProduct(productId) {
    if (confirm('Are you sure you want to delete this product?')) {
        fetch(`https://restful-api.dev/api/products/${productId}`, {
            method: 'DELETE'
        })
        .then(response => {
            if (response.ok) {
                alert('Product deleted successfully!');
                // Refresh your product list here
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Failed to delete product.');
        });
    }
}

// Attach deleteProduct function to your delete buttons in the product list
