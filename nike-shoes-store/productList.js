import { products } from './products.js';
import { cartEvents } from './cart.js';

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
        
        
        
        //เพิ่ม : ให้กด add to cartจะเพิ่ม id ชื่อ ราคา จำนวนของสินค้าแต่ละชนิดที่กด add และแสดงเลขที่รูปตะกร้าทีละ1  
        addCartBtn.addEventListener('click', () => {
            cartEvents.add(product);
            cartCount.textContent = cartEvents.getAmount()            //*
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
    if(+localStorage.getItem('darkModeStatus') === 1){
        box.checked = true
    }else{
        box.checked = false
    }
    updateTheme()
    cartEvents.update()                                         //*
    cartCount.textContent = cartEvents.getAmount()              //*
})

btnToggleSearch.addEventListener('click', event => {
    event.preventDefault()
    isOpen = !isOpen
    btnToggleSearch.setAttribute('data-isOpen', isOpen)
    updateArea()
})

//แก้ : เมื่อกดปุ่มถังขยะ จะทำการลบสินค้าในตะกร้าทั้งหมด
removeCartBtn.addEventListener('click', event => {
    event.preventDefault()

    cartEvents.productAdded = []                                                    //*
    localStorage.setItem('cart', JSON.stringify(cartEvents.productAdded));          //*
    cartCount.textContent = cartEvents.getAmount()                                  //*
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

// const themeSwitch = document.getElementById('box');
// themeSwitch.addEventListener('change', () => {
//     document.body.classList.toggle('bg-dark');
// });

const box = document.getElementById('box');
box.addEventListener('click', () => {
    if(+localStorage.getItem('darkModeStatus') === 1){          //*
        localStorage.setItem('darkModeStatus', 0)               //*
    }else{                                                      //*
        localStorage.setItem('darkModeStatus', 1)               //*
    }                                                           //*
    updateTheme()                                               //*
});

function updateTheme(){
    box.checked?document.body.classList.add("bg-dark"):document.body.classList.remove("bg-dark")        //*
}

// window.addEventListener('load', (event) => {
//     let status = localStorage.getItem('darkModeStatus');
//             status = JSON.parse(status);
//   if (status === "false"){
//     console.log("hello");
//     document.body.classList.add("bg-dark"); 
//     document.getElementById('box').checked = false;
//   }
// });










