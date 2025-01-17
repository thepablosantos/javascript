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