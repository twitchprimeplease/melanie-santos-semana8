import './components/cardElement/cardElement.js';

const productContainer = document.querySelector('#products-container');


async function getData(){
    try {
    let response = await fetch('https://apimocha.com/json-logitech-s8/all-products');
    let data = await response.json();
    organiceData(data);
    } catch (e) {
    console.log(e);
        }
}

console.log(getData());
fetch('https://apimocha.com/json-logitech-s8/all-products')
.then(response => response.json())
.then(data => console.log(data));


function organiceData(array){
    array.forEach(product => {
        const productObj = document.createElement('card-element');
        productObj.setAttribute('name', product.name);
        productObj.setAttribute('description', product.description);
        productObj.setAttribute('price', product.price);
        productObj.setAttribute('image', product.url[0]);
        productObj.setAttribute('type', product.type);
        productContainer.append(productObj);
        
    });
}
