export const cartEvents = {
    productAdded: [],
    add: function (product) {
        let product_Id = product.id;

        if (product.qtyInStock > 0) {
            let index = cartEvents.productAdded.findIndex((item) => item.productId === product_Id);
            if (index !== -1) {

                cartEvents.productAdded[index].qty++;
            } else {
              cartEvents.productAdded.push({productId: product.id, qty: 1});
            }
        }
        localStorage.setItem('cart', JSON.stringify(cartEvents.productAdded));
    }

    ,update: function () {
        cartEvents.productAdded = localStorage.getItem('cart');
        if (cartEvents.productAdded == undefined || cartEvents.productAdded.length === 0) {
            cartEvents.productAdded = [];
        } else {
            cartEvents.productAdded = JSON.parse(cartEvents.productAdded);
        }
        localStorage.setItem('cart', JSON.stringify(cartEvents.productAdded));
    }

    ,getAmount: function () {
        let amount = 0
        cartEvents.productAdded.forEach(product => {
            amount += product.qty
        })
        return amount
    }
}

