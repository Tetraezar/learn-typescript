/**
 * An online marketplace sells thousands of products every day. 
 * To display complete product information, the system stores a product code, product name, selling price, 
 * stock quantity, product weight, average customer rating, and whether the product is currently discounted.
 * 
 * Task:
 * 1. Define a proper type for the product information.
 * 2. Implement a type that you defined on 3 products data.
 * 
 * display the product data using console.log.
 */

type product = {
    productCode: String, 
    productName: String, 
    price: number, 
    stock: number, 
    productWeight: number, 
    averageCustomerRating:number, 
    discounted: boolean
}

const product1: product  = {
    productCode: `001`, 
    productName: `laptop fatih`, 
    price: 500000009, 
    stock: 1, 
    productWeight: 3.45, 
    averageCustomerRating:3.5, 
    discounted: true
}
const product2: product  = {
    productCode: `002`, 
    productName: `laptop prabu`, 
    price: 999999999, 
    stock: 0, 
    productWeight: 1.6, 
    averageCustomerRating:4.7, 
    discounted: true
}
const product3: product  = {
    productCode: `003`, 
    productName: `laptop okka`, 
    price: 676767676767, 
    stock: 67, 
    productWeight: 2.4, 
    averageCustomerRating:6.7, 
    discounted: true
}
console.log(`Product 1`)
console.log(`Product name: ${product1.productName}`)
console.log(`Product Code: ${product1.productCode}`)
console.log(`Price: ${product1.price}`)
console.log(`Stock: ${product1.stock}`)
console.log(`Product weight: ${product1.productWeight}`)
console.log(`Average Customer Rating: ${product1.averageCustomerRating}`)
console.log(`Discounted: ${product1.discounted}`)

console.log(`Product 2`)
console.log(`Product name: ${product2.productName}`)
console.log(`Product Code: ${product2.productCode}`)
console.log(`Price: ${product2.price}`)
console.log(`Stock: ${product2.stock}`)
console.log(`Product weight: ${product2.productWeight}`)
console.log(`Average Customer Rating: ${product2.averageCustomerRating}`)
console.log(`Discounted: ${product2.discounted}`)

console.log(`Product 3`)
console.log(`Product name: ${product3.productName}`)
console.log(`Product Code: ${product3.productCode}`)
console.log(`Price: ${product3.price}`)
console.log(`Stock: ${product3.stock}`)
console.log(`Product weight: ${product3.productWeight}`)
console.log(`Average Customer Rating: ${product3.averageCustomerRating}`)
console.log(`Discounted: ${product3.discounted}`)