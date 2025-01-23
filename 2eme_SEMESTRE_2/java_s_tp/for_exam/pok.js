export class Pokemon extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode :'open'});
    }

    static get observedAttributes() {
        return ['name', 'id'];
    }

    connectedCallback() {
        const x = this.getAttribute('id');
        const ch = this.getAttribute('name');   

        this.shadowRoot.innerHTML = `
            <div class="col-md-6">
                <div class="card"> 
                    <div class="card-body">
                        <h5 class="card-title">${x}</h5>
                        <h4 class="card-title">${ch}</h4>
                        <input type="button" value="enzl" id="enzlBtn">
                    </div>
                </div>
            </div>`;

        // Bind the `aff` function to the button click event
        this.shadowRoot.getElementById('enzlBtn').addEventListener('click', () => this.aff(x));
    }

    aff(ch) {
        alert(ch);
    }
    getPok() {
        const ch = document.getElementById('nom').value;
        fetch(`https://pokeapi.co/api/v2/pokemon/${ch}`)
        .then(response => response.json())
        .then(data => {
            const temp = document.createElement('pok-elementt');
            temp.setAttribute('name', data.name);
            temp.setAttribute('id', data.id);
            document.querySelector('.contenu').appendChild(temp);
        })
        .catch(error => console.log(error));
    }
}

// Define the getPok function in the global scope

