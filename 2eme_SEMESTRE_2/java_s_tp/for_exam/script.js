import { component1 } from "./components/component1.js";
import { component2 } from "./components/component2.js";
import { Pokemon } from "./pok.js";
customElements.define('component-one',component1);
customElements.define('component-two',component2);
customElements.define('pok-element',Pokemon);


