export class ComposantOne extends HTMLElement {
    constructor() {
        super();
        // Define the shadow root
        const shadow = this.attachShadow({ mode: 'open' });
        // Create container elements
        const container = document.createElement('div');
        container.classList.add('card');
        // Create elements for title, description, image, and button
        const title = document.createElement('h1');
        const description = document.createElement('p');
        const image = document.createElement('img');
        const button = document.createElement('button');
        // Set attributes and content
        title.textContent = this.getAttribute('titre') || 'Title';
        description.textContent = this.getAttribute('description') || 'Description';
        image.setAttribute('src', this.getAttribute('image-data') || '');
        button.textContent = this.getAttribute('nom-scientifique') || 'Scientific Name';
        button.addEventListener('click', () => {
            alert(this.getAttribute('nom-scientifique'));
        });
        // Append elements to container
        container.appendChild(title);
        container.appendChild(description);
        container.appendChild(image);
        container.appendChild(button);

        // Append container to shadow DOM
        shadow.appendChild(container);
    }
}
// Define the custom element
customElements.define('composant-un', ComposantOne);
