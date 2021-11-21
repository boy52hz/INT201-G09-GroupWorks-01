import { showProducts } from "./productList";
import { products } from './data/products.js';

const btnToggleSearch = document.getElementById('toggleSearch');
const area = document.getElementById('search-area')
let isOpen = !area.getAttribute('data-isOpen')

export const updateArea = () => {
    if (isOpen) {
        area.setAttribute('class', 'slide-out-bck-center')
    } else {
        area.setAttribute('class', 'slide-in-fwd-center')
    }
}
const searchBar = document.getElementById('search-bar')
searchBar.addEventListener('keyup', () => {
    const keyword = searchBar.value.trim().toLowerCase()
    const filteredProducts = products.filter(product => 
        product.id.toLowerCase().includes(keyword) ||
        product.name.toLowerCase().includes(keyword)
    )
    showProducts(filteredProducts)
}) 

btnToggleSearch.addEventListener('click', event => {
    event.preventDefault()
    isOpen = !isOpen
    btnToggleSearch.setAttribute('data-isOpen', isOpen)
    updateArea()
})
