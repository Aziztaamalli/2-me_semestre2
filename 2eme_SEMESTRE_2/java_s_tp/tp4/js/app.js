// Importing modules
import { ComposantOne } from './composant1.js';
import { ComposantTwo } from './composant2.js';
// Define custom elements
customElements.define('image-poisson', ComposantTwo);
customElements.define('composant-un', ComposantOne);
// Function declarations
function fChargerInfo() {
    // Making a GET request to the API endpoint
    fetch('https://origin-east-01-drupal-fishwatch.woc.noaa.gov/api/species')
        .then(response => {
            // Check if the response is successful
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            // Parse the JSON response
            return response.json();
        })
        .then(data => {
            // Process the JSON object
            data.forEach(item => {
                // Create <info-poisson> custom element
                const infoPoisson = document.createElement('info-poisson');
                // Set attributes for the <info-poisson> element
                infoPoisson.setAttribute('titre', item.name);
                infoPoisson.setAttribute('description', `Family: ${item.family}, Habitat: ${item.habitat}, Description: ${item.description}`);
                infoPoisson.setAttribute('image-data', item.image); // Assuming item.image contains image URL
                infoPoisson.setAttribute('nom-scientifique', item.scientificName);
                // Append the <info-poisson> element to the dInfoPoisson div
                document.getElementById('dInfoPoisson').appendChild(infoPoisson);
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}
function fGalleriePoisson() {
    // Code for handling "Galerie Poisson" button click event
}