import { products } from './products.js';

const btnToggleSearch = document.getElementById('toggleSearch');
const cartCount = document.getElementById('cart-count')
const removeCartBtn = document.getElementById('remove-cart')
const area = document.getElementById('search-area')
let isOpen = !area.getAttribute('data-isOpen')

const updateArea = () => {
    if (isOpen) {
        area.setAttribute('class', 'slide-out-bck-center')
    } else {
        area.setAttribute('class', 'slide-in-fwd-center')
    }
}

const showProducts = products => {
    const searchResult = document.getElementById('search-result')
    searchResult.textContent = (
        products.length > 0 ? `Found ${products.length} item(s).` : 'Not found.'
    )
    
    const productsElem = document.getElementById('products')
    productsElem.innerHTML = null
    
    products.forEach(product => {
        const titleEle = document.createElement('h4')
        titleEle.style.textAlign = 'center'
        titleEle.textContent = product.name

    //-------------------------------------------------------------------------    

        const imgEle = document.createElement('img');
        imgEle.setAttribute('src', `./productPicture/${ product.id.toLowerCase() }.jpeg`);
        imgEle.setAttribute('class','card-img-top')

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
        cardElem.setAttribute('class', 'card w-25 d-inline-block m-3')

        const cardBodyElem = document.createElement('div')
        cardBodyElem.setAttribute('class', 'card-body')
    
    //-----------------------------------------------------------------------------

        const addCartBtn = document.createElement('button')
        addCartBtn.setAttribute('class', 'btn btn-outline-dark m-3')
        addCartBtn.textContent = 'Add to cart'
        addCartBtn.addEventListener('click', () => {
            cartCount.textContent = Number(cartCount.textContent) + 1
        })

    //-----------------------------------------------------------------------------

        cardBodyElem.append(titleEle, imgEle, idEle, typeEle, priceEle, qtyInStockEle, addCartBtn)
        cardElem.appendChild(cardBodyElem)
        productsElem.appendChild(cardElem)
    })
}

window.addEventListener('DOMContentLoaded', event => {
    updateArea()
    showProducts(products)
})

btnToggleSearch.addEventListener('click', event => {
    event.preventDefault()
    isOpen = !isOpen
    btnToggleSearch.setAttribute('data-isOpen', isOpen)
    updateArea()
})

removeCartBtn.addEventListener('click', event => {
    event.preventDefault()
    let count = Number(cartCount.textContent)
    if ((count - 1) >= 0) {
        cartCount.textContent = count - 1
    }
})
    
const searchBar = document.getElementById('search-bar')
searchBar.addEventListener('keyup', () => {
    const keyword = searchBar.value.trim().toLowerCase()
    const filteredProducts = products.filter(product => 
        product.id.toLowerCase().includes(keyword) ||
        product.name.toLowerCase().includes(keyword)
    )
    showProducts(filteredProducts)
})