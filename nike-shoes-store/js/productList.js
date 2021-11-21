import { products } from './data/products.js';
import { cartEvents } from './cartEvents.js';

const searchBtn = document.getElementById('toggleSearch');
const searchBar = document.getElementById('search-area')
const searchBarInput = document.getElementById('search-bar')
let isOpen = !searchBar.getAttribute('data-isOpen')

const removeCartBtn = document.getElementById('remove-cart')

export const showProducts = products => {
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

        const imgEle = document.createElement('img');
        imgEle.setAttribute('src', `./img/products/${ product.id.toLowerCase() }.jpeg`);
        imgEle.setAttribute('class','card-img-top')

        const idEle = document.createElement('div')
        idEle.textContent = `ID: ${product.id}`

        const typeEle = document.createElement('div')
        typeEle.textContent = `Type: ${product.type}`

        const priceEle = document.createElement('div')
        priceEle.textContent = `Price: ${product.price}`

        const qtyInStockEle = document.createElement('div')
        qtyInStockEle.textContent = `Stock: ${product.qtyInStock}`
    
        const cardElem = document.createElement('div')
        cardElem.setAttribute('class', 'card w-25 d-inline-block m-3')

        const cardBodyElem = document.createElement('div')
        cardBodyElem.setAttribute('class', 'card-body')

        const addCartBtn = document.createElement('button')
        addCartBtn.setAttribute('class', 'btn btn-outline-dark m-3')
        addCartBtn.textContent = 'Add to cart'
        
        addCartBtn.addEventListener('click', () => {
            cartEvents.add(product);
        })

        cardBodyElem.append(titleEle, imgEle, idEle, typeEle, priceEle, qtyInStockEle, addCartBtn)
        cardElem.appendChild(cardBodyElem)
        productsElem.appendChild(cardElem)
    })
}

window.addEventListener('DOMContentLoaded', event => {
    showProducts(products)
    cartEvents.load()
})

const updateSearchBar = () => {
    if (isOpen) {
        searchBar.setAttribute('class', 'slide-out-bck-center')
    } else {
        searchBar.setAttribute('class', 'slide-in-fwd-center')
    }
}

searchBtn.addEventListener('click', event => {
    event.preventDefault()
    isOpen = !isOpen
    searchBtn.setAttribute('data-isOpen', isOpen)
    updateSearchBar()
})

searchBarInput.addEventListener('keyup', () => {
    const keyword = searchBarInput.value.trim().toLowerCase()
    const filteredProducts = products.filter(product => 
        product.id.toLowerCase().includes(keyword) ||
        product.name.toLowerCase().includes(keyword)
    )
    showProducts(filteredProducts)
})

removeCartBtn.addEventListener('click', event => {
    cartEvents.remove()
})
