document.getElementById('updateProductForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Assuming product ID is included in your form or dynamically set
    const productId = document.getElementById('productId').value; 
    const productName = document.getElementById('productName').value;
    const productDescription = document.getElementById('productDescription').value;
    const productPrice = document.getElementById('productPrice').value;

    fetch(`https://restful-api.dev/api/products/${productId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: productName,
            description: productDescription,
            price: productPrice
        })
    })
    .then(response => response.json())
    .then(data => {
        alert('Product updated successfully!');
        document.getElementById('updateProductForm').reset();
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Failed to update product.');
    });
});
