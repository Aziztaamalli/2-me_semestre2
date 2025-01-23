export class component1 extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
        this.shadowRoot.innerHTML = `
            <div>
                <h1>Data from API</h1>
                <form id="productForm">
                    <label for="productId">Enter Product ID:</label>
                    <input type="text" id="productId" name="productId" required>
                    <button type="submit">Fetch Title</button>
                </form>
                 <ul id="dataList"></ul>
            </div>
        `;
        this.shadowRoot.getElementById("productForm").addEventListener("submit", this.FormSubmit.bind(this));
    }
    FormSubmit(event) {
        event.preventDefault();
        const productId = this.shadowRoot.getElementById("productId").value;
        if (productId) {
            this.fetchData(productId);
        }
    }
    fetchData(productId) {
        fetch(`https://fakestoreapi.com/products/${productId}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                this.displayData(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }
    displayData(data) {
        const dataList = this.shadowRoot.getElementById('dataList');
        dataList.innerHTML = ''; // Clear previous data
        const listItem = document.createElement('li');
        if (data.hasOwnProperty('title')) {
            listItem.textContent = data.title;
        } else {
            listItem.textContent = 'No title available';
        }
        dataList.appendChild(listItem);
    }
}