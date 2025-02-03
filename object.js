// >>>>> OBJECT

// - Create
let products = {
    name: 'Apel', 
    price: 35000,
    stocks: 100 
}
// name, price, stocks disebut dengan key
// 'Apel', 35000, 100 disebut dengan value
// Pasangan antara key dan value disebut dengan property

// - Read
console.log(products.name)
console.log(products.price)
console.log(products.stocks)

// - Update
products.price = 45000
console.log(products)

// - Delete
delete products.price
console.log(products)



// Array of Object
let productsSupermarket = [
    { name: 'Apel', price: 35000, stocks: 100 },
    { name: 'Anggur', price: 45000, stocks: 100 },
    { name: 'Jeruk', price: 15000, stocks: 50 }
]
for(let item of productsSupermarket){
    console.log(`${item.name} (${item.price}/Kg) - Stocks: ${item.stocks}`)
}



// >>> Optional Chaining
// Safe Way to Access Property Obj
let data = {}
console.log(data?.name?.firstName)

// >>> Method
// Function yang di masukan ke dalam object

let user = {
    greeting(){
        console.log('Hello!')
    }, 
    welcome: () => {
        console.log('Hi!')
    }
}
user.greeting()
user.welcome()



const person = {
    firstName: 'Frengky', 
    lastName: 'Sihombing', 
    welcome(){
        console.log(`Hello, ${this.firstName} ${this.lastName}`)
    },
    greet(){
        this.welcome()
    }
}

person.greet()