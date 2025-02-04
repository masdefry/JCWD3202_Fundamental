class Products{
    constructor(name, price){
        this.name = name 
        this.price = price
    }
}

const productsData = [
    new Products('Sepatu', 500000), // { name: 'Sepatu', price: 500000 }
    new Products('Kaos', 150000), // { name: 'Kaos', price: 150000 }
    new Products('Jeans', 600000) // {...}
]

class Transaction{
    total = 0
    carts = []

    addToCart(productSelected, qty){ // productSelected = { name: 'Sepatu', price: 500000 }, qty = 3
        let newObjProductSelected = {...productSelected, qty}
        this.carts.push(newObjProductSelected)
        this.total += productSelected.price * qty
    }

    showTotalTransaction(){
        console.log(this.total)
    }

    checkoutCarts(){
        let output = ''

        for(let item of this.carts){
            output += `${item.name}: ${item.price} x ${item.qty} \n`
        }

        output += `Total = ${this.total}`
        console.log(output)
    }
}

const addProduct = new Transaction()
addProduct.addToCart(productsData[0], 3)
addProduct.addToCart(productsData[1], 5)
console.log(addProduct.carts)
addProduct.showTotalTransaction()
addProduct.checkoutCarts()