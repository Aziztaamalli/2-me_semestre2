export class GotApp extends HTMLElement{
    constructor(){
        super();
        this.shadowRoot = this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML=`
            
        `;
    }
    connectedCallback() {
    }
}