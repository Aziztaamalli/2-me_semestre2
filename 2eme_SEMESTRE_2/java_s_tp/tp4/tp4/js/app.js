import { ComposantOne } from "./composant1.js";
import { ComposantTwo } from "./composant2.js";
customElements.define('info-poisson', ComposantOne);
customElements.define('image-poisson', ComposantTwo);
document.getElementById('btn1').addEventListener('click', fChargerInfo);
document.getElementById('btn2').addEventListener('click', fGalleriePoisson);
const url = "https://dummyjson.com/products";
function fChargerInfo(event) {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            data.products.forEach(e => {
                const infoPoisson = document.createElement('info-poisson');
                infoPoisson.setAttribute('titre', e.title);
                infoPoisson.setAttribute('description', e.description);
                infoPoisson.setAttribute('image-data', e.thumbnail);
                infoPoisson.setAttribute('nom-scientifique', e.brand);
                document.getElementById('dInfoPoisson').appendChild(infoPoisson);
            });
        })
        .catch(error => console.error('Error:', error));
}
function fGalleriePoisson(event) {
    fetch('https://www.fishwatch.gov/api/species/red-snapper')
    .then(response => response.json())
    .then(data => {
        // Accessing the Image Gallery object from the JSON data
        const imageGallery = data['Image Gallery'];

        // Creating an HTML tag using JavaScript
        const imagePoissonTag = document.createElement('image-poisson');
        imagePoissonTag.setAttribute('titre', imageGallery[0]['Species Name']);
        imagePoissonTag.setAttribute('description', imageGallery[0]['Quote']);
        imagePoissonTag.setAttribute('image-data', imageGallery[0]['URL']);
        imagePoissonTag.setAttribute('cholesterol', imageGallery[0]['Cholesterol']);

        // Appending the created HTML tag to the container div
        document.getElementById('imageContainer').appendChild(imagePoissonTag);
    })
    .catch(error => console.error('Error fetching data:', error));

}
