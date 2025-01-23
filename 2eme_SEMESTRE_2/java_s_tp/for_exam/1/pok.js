
class Pokemon extends HTMLElement{

    constructor(){
        super();
    }

    static get observedAttributes(){
        return['name','id'];
    }


    connectedCallback(){
       this.attachShadow({mode :'open'});

            const x=this.getAttribute('id');
            const ch=this.getAttribute('name');   

        this.shadowRoot.innerHTML=`
        <div class=col-md-6>
            <div class=card> 
            <div class=card-body>
                <h5 class=card-title> ${x} </h5>
                <h4 class=card-title> ${ch} </h4>
                <input type="button" value="enzl" onclick="aff(${x})">
                </div>
                </div>
                </div>`;
    }





}


customElements.define('aff-pok',Pokemon);


function aff(ch){
    alert(ch);
}

function getPokemon(){


    ch = document.getElementById('nom').value;


    fetch(`https://pokeapi.co/api/v2/pokemon/${ch}`)
    .then(response=>response.json())
    .then(data=>{

  
       

        const temp = document.createElement('aff-pok');
        temp.setAttribute('name',data.name);
        temp.setAttribute('id',data.id);

        document.querySelector('.contenu').appendChild(temp);



    })
    .catch(error=>console.log(error));

}