class cardElement extends HTMLElement {
    constructor (){
        super();
        this.name = this.getAttribute('name');
        this.description = this.getAttribute('description');
        this.price = this.getAttribute('price');	
        this.image = this.getAttribute('image');
    }

    connectedCallback(){
        this.render();
    }

    static get observedAttributes(){
        return ['name', 'description', 'image', 'price']
    }
    
    attributeChangedCallback(propName, oldvalue, newValue){
        this[propName] = newValue;
        this.render();
        
    }

    render(){
        this.innerHTML = `
        <link rel="stylesheet" href="/src/components/cardElement/style.css">
            <article class="product">
                <h3 class ="product-name">${this.name}</h3>
                <p class="product-description">${this.description}</p>
                <img class= "product-img" src= ${this.image} alt="">
                <h3>${this.price}</h3>
            </article>
        `
    }
}

customElements.define('card-element', cardElement);
export default cardElement;