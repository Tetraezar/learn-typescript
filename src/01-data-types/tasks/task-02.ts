/**
 * An e-commerce platform is preparing a flash sale event. Before the discount calculation begins, 
 * the system temporarily stores several pieces of information as individual variables.
 * A customer wants to purchase a Mechanical Keyboard RGB with the product code KBR-001. 
 * The original price of the product is 850000 rupiahs, 
 * and the flash sale offers a 25% discount. The customer plans to buy 2 keyboards. 
 * Because the customer is a premium member, they are eligible for free shipping. 
 * The current stock available in the warehouse is 18 units.
 * 
 * Task:
 * 1. Identify every value that should become a variable.
 * 2. Choose an appropriate variable name for each value.
 * 3. Determine the correct data type.
 * 4. Declare all variables in TypeScript.
 * 5. Display the product data using console.log.
 */

type product = {
    productCode: String
    productName: String
    price: number
    productStock: number
}

const product: product = {
    productName: `Mechanical Keyboard RGB`,
    productCode: `KBR-001`,
    price: 850000,
    productStock: 18
}

const discount: number = product.price * 1/4
const customerStatus: String = `premium`

console.log(`Product Code: ${product.productCode}`)
console.log(`Product Name: ${product.productName}`)
console.log(`Price before discount: ${product.price * 2}`)
console.log(`Price after discount: ${(product.price * 2) - discount}`)
console.log(`Customer member: ${customerStatus}`)

