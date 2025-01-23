export class ComposantTwo extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        const title = this.getAttribute('titre');
        const description = this.getAttribute('description');
        const imageData = this.getAttribute('image-data');
        const cholesterol = this.getAttribute('cholesterol');
        const card = document.createElement('div');
        card.style.backgroundImage = `url('${imageData}')`;
        const titleElement = document.createElement('h1');
        titleElement.textContent = title;
        const descriptionElement = document.createElement('p');
        descriptionElement.textContent = description;
        const button = document.createElement('button');
        button.textContent = cholesterol;
        button.addEventListener('click', () => {
            alert(`Taux de cholestérol: ${cholesterol}`);
        });
        card.appendChild(titleElement);
        card.appendChild(descriptionElement);
        card.appendChild(button);
        this.appendChild(card);
    }
}