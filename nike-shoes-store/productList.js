import { products } from './products.js';

document.addEventListener('DOMContentLoaded', function () {
    const productListElement = document.getElementById('products')
    const cartCount = document.getElementById('cart-count')
    products.forEach((product, index) => {
        const titleEle = document.createElement('h4')
        titleEle.style.textAlign = 'center'
        titleEle.textContent = product.name

        

    //-------------------------------------------------------------------------    

        const imgEle = document.createElement('img');
        imgEle.setAttribute('src', `./productPicture/${ product.id.toLowerCase() }.jpeg`);
        imgEle.setAttribute('class','card-img-top')
        // imgEle.setAttribute('height', 300);
        // imgEle.setAttribute('width', 250);

    //--------------------------------------------------------------------------

        const idEle = document.createElement('div')
        idEle.textContent = `ID: ${product.id}`

    //-------------------------------------------------------------------------

        const typeEle = document.createElement('div')
        typeEle.textContent = `Type: ${product.type}`

    //---------------------------------------------------------------------------

        const priceEle = document.createElement('div')
        priceEle.textContent = `Price: ${product.price}`

    //-----------------------------------------------------------------------------

        const qtyInStockEle = document.createElement('div')
        qtyInStockEle.textContent = `Stock: ${product.qtyInStock}`

    //-----------------------------------------------------------------------------
 
    
        const cardElem = document.createElement('div')
        cardElem.classList.add('card', 'w-25')

        const cardBodyElem = document.createElement('div')
        cardBodyElem.classList.add('card-body')
    
    //-----------------------------------------------------------------------------

        const addCartBtn = document.createElement('button')
        addCartBtn.classList.add('btn', 'btn-outline-dark', 'm-3', 'mx-auto')
        addCartBtn.textContent = 'Add to cart'
        addCartBtn.onclick = ev => {
            cartCount.textContent = Number(cartCount.textContent) + 1
        }

        cardBodyElem.appendChild(titleEle)
        cardBodyElem.appendChild(imgEle)
        cardBodyElem.appendChild(idEle)
        cardBodyElem.appendChild(typeEle)
        cardBodyElem.appendChild(priceEle)
        cardBodyElem.appendChild(qtyInStockEle)
        cardBodyElem.appendChild(addCartBtn)
        cardElem.appendChild(cardBodyElem)
        productListElement.appendChild(cardElem)
    })
}, false);
