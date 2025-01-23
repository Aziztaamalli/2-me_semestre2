export class component2 extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });}
    connectedCallback() {
        this.shadowRoot.innerHTML = `
            <div>
                <h2>Add New Product</h2>
                <form id="addProductForm">
                    <label for="productName">Product Name:</label>
                    <input type="text" id="productName" name="productName">
                    <label for="productPrice">Product Price:</label>
                    <input type="number" id="productPrice" name="productPrice">
                    <button type="submit">Add Product</button>
                </form> 
            </div>
        `;
        this.shadowRoot.getElementById("addProductForm").addEventListener("submit", this.handleFormSubmit.bind(this));
    }
    handleFormSubmit(event) {
        event.preventDefault();
        const productName = this.shadowRoot.getElementById("productName").value;
        const productPrice = this.shadowRoot.getElementById("productPrice").value;
        if (productName && productPrice) {
            fetch('https://fakestoreapi.com/products', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ title: productName, price: productPrice }),
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('Product added:', data); // You can perform any further actions here, such as displaying a success message
            })
            .catch(error => {
                console.error('Error posting data:', error); // You can handle error cases here, such as displaying an error message to the user
            });
        }
        else{
            alert("no empty data please");
        }
    }
}