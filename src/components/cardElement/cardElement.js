class cardElement extends HTMLElement {
    constructor (){
        super();
        this.name = this.getAttribute('name');
        this.description = this.getAttribute('description');
        this.price = this.getAttribute('price');	
        this.image = this.getAttribute('image');
        this.type = this.getAttribute('type');
    }

    connectedCallback(){
        this.render();
    }

    static get observedAttributes(){
        return ['name', 'description', 'image', 'price','type']
    }
    
    attributeChangedCallback(propName, oldvalue, newValue){
        this[propName] = newValue;
        this.render();
        
    }

    render(){
        this.innerHTML = `
        <link rel="stylesheet" href="/src/components/cardElement/style.css">
            <article class="product">
                <div class = "product-info">
                    <h3 class ="product-name">${this.name}</h3>
                    <p class="product-description">${this.description}</p>
                    <h5 class="product-type">${this.type}</h5>
                    <h4>${this.price}</h4>
                    <button>Read More</button>
                </div>
                <div class="image-container">
                    <img class= "product-img" src= ${this.image} alt="">
                </div>
            </article>
        `
    }
}

customElements.define('card-element', cardElement);
export default cardElement;