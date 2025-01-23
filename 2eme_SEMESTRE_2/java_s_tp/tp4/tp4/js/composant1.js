export class ComposantOne extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        const title = this.getAttribute('titre');
        const description = this.getAttribute('description');
        const imageData = this.getAttribute('image-data');
        const nomScientifique = this.getAttribute('nom-scientifique');
        const card = document.createElement('div');
        card.setAttribute('class', 'card');
        const titleElement = document.createElement('h1');
        titleElement.textContent = title;
        const descriptionElement = document.createElement('p');
        descriptionElement.textContent = description;
        const imageElement = document.createElement('img');
        imageElement.setAttribute('src', imageData);
        const button = document.createElement('button');
        button.textContent = nomScientifique;
        button.addEventListener('click', () => {
            alert(nomScientifique);
        });
        card.appendChild(titleElement);
        card.appendChild(descriptionElement);
        card.appendChild(imageElement);
        card.appendChild(button);
        this.appendChild(card);
    }
}
