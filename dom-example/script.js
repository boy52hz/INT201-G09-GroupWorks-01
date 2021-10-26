const foods = [
    {
        name: 'ข้าวมันไก่',
        cal: 848.5,
        price: 45
    },
    {
        name: 'ข้าวหน้าหมู',
        cal: 648.4,
        price: 35
    },
    {
        name: 'กะเพราหมูกรอบ',
        cal: 892.34,
        price: 45
    }
]

document.addEventListener('DOMContentLoaded', function () {
    const foodListElem = document.getElementById('foodList')
    foods.forEach((food, index) => {
        const titleElem = document.createElement('h5')
        titleElem.textContent = food.name

        const calElem = document.createElement('div')
        calElem.classList.add('d-flex', 'justify-content-between')

        const calLabelElem = document.createTextNode('แคลอรี่:')
        calElem.appendChild(calLabelElem)

        const calValueElem = document.createElement('div')
        calValueElem.textContent = food.cal
        calElem.appendChild(calValueElem)

        const priceElem = document.createElement('div')
        priceElem.classList.add('d-flex', 'justify-content-between')

        const priceLabelElem = document.createTextNode('ราคา:')
        priceElem.appendChild(priceLabelElem)

        const priceValueElem = document.createElement('div')
        priceValueElem.textContent = food.price
        priceElem.appendChild(priceValueElem)

        const cardElem = document.createElement('div')
        cardElem.classList.add('card', 'w-25')

        const cardBodyElem = document.createElement('div')
        cardBodyElem.classList.add('card-body')
        
        cardBodyElem.appendChild(titleElem)
        cardBodyElem.appendChild(calElem)
        cardBodyElem.appendChild(priceElem)
        cardElem.appendChild(cardBodyElem)
        foodListElem.appendChild(cardElem)
    })
}, false);