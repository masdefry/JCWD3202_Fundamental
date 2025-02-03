// >>>>> CLASS
// - Template untuk Membuat Object

/*
    Syntax:

    class ClassName{
        constructor(a, b, c, ...){
            this.a = a;
            this.b = b;
            this.c = c;
            ...
        }
    }
*/

class Products{
    constructor(name, price, stock){ 
        this._name = name
        this._price = price
        this._stock = stock
    }
}

let product1 = new Products('Apel', 35000, 100)
let product2 = new Products('Mangga', 30000, 500)
console.log(product2)
console.log(product1)

// Array of Object
let products = [
    new Products('Apel', 35000, 100),
    new Products('Mangga', 30000, 500)
]
console.log(products)


/*
Case.
Di sebuah aplikasi e-commerce terdapat penjualan produk dengan berbagai macam kategori.
Mulai dari kategori elektronik, makanan ringan, dan buah/sayur. 
Setiap kategori produk memiliki property yang berbeda-beda, seperti nama produk, stok produk, dll.
Buatlah class untuk ketiga kategori produk di atas! 
*/

// - Electronic         : Name, Price, Stock, Brand, SN, Size, Manufacture Year, Color, Watt, Type
// - Snack              : Name, Price, Stock, Manufacture, Expiry Date, Netto, Type, Flavour
// - Fruit/Vegetable    : Name, Price, Stock, Weight, Type, Expiry Date, Arrival Date, Source

// > Inheritance (Pewarisan Property)
class Products{
    constructor(name, price, stock, type){
        this.name = name 
        this.price = price 
        this.stock = stock 
        this.type = type
    }
}

class Electronic extends Products{
    constructor(name, price, stock, brand, serialNumber, size, manufactureYear, color, watt, type){
        super(name, price, stock, type)
        this.brand = brand 
        this.serialNumber = serialNumber
        this.size = size 
        this.manufactureYear = manufactureYear 
        this.color = color 
        this.watt = watt 
    }
}

class Snack extends Products{
    constructor(name, price, stock, weight, expiryDate, netto, type, flavour){
        super(name, price, stock, type)
        this.manufacture = manufacture
        this.expiryDate = expiryDate
        this.netto = netto
        this.flavour = flavour
    }
}

class FruitOrVegetable extends Products{
    constructor(name, price, stock, manufacture, expiryDate, arrivalDate, source, type){
        super(name, price, stock, type)
        this.arrivalDate = arrivalDate
        this.expiryDate = expiryDate
        this.source = source
        this.manufacture = manufacture
    }
}