// 3 filter
const arr = [1, 2, 3, 4, 5]

const highNumbers = arr.filter((n) => {
    if( n >= 3 ) {
        return n
    }
})

console.log(highNumbers)

// 4 map
const products = [
    {name: 'Camisa', price: 10.99, category: 'Roupas'},
    {name: 'Chaleira Elétrica', price: 49.99, category: 'Eletro'},
    {name: 'Fogão', price: 400, category: 'Eletro'},
    {name: 'Calça jeans', price: 50.99, category: 'Roupas'},
]

products.map((product) => {
    if(product.category === 'Roupas') {
        product.onSale = true
    }
})

console.log(products)

// 6 destructuring
const fruits = ["Maça", "Laranja", "Mamão"]

const [f1, f2, f3] = fruits
console.log(f1)

// 8 classe
class Product {
    constructor(name, price) {
        this.name = name
        this.price = price 
    }

    productWithDiscount(discount) {
        return this.price * ((100 - discount) / 100)
    }
}

const shirt = new Product ('Camisa gola v', 20)

console.log(shirt.name)

console.log(shirt.productWithDiscount(10))

// 9 herenca

class ProductWithAttributes extends Product {
    constructor(name, price, colors) {
        super(name, price)
        this.colors = colors
    }

    showColors() {
        console.log("As cores são:")
        this.colors.forEach((color) => {
            console.log(color)
        })
    }
}