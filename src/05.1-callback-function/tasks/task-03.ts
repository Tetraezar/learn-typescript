/**
 * An online store has the following products:
 */

type product = {
    name: String,
    price: number
}
const products = [
    { name: "Keyboard", price: 850000 },
    { name: "Mouse", price: 275000 },
    { name: "Monitor", price: 2200000 },
    { name: "Headset", price: 650000 }
];

/**
 * The warehouse system needs to perform different operations on the same product list.
 * 1. Operation for display product
 * Keyboard - Rp850000
 * Mouse - Rp275000
 * Monitor - Rp2200000
 * Headset - Rp650000
 * 
 * 2. Display expensive products - Only products with a price above Rp1,000,000 should be displayed.
 * 3. Display products that cost more than Rp500,000 and show a 10% discount price.
 * 
 * Instead of creating a separate loop for every operation, the developer creates a reusable processing function.
 */

function processProduct(
    products: product[],
    callback: (product: product) => void
): void {
    for (let i = 0; i < products.length; i++) {
        callback(products[i]);
    }
}

function DisplayProduct(product: product) {
    console.log(product.name, "-", product.price);
}

function ExpensiveProduct(product: product) {
    if (product.price > 1000000) {
        console.log(product.name, "-", product.price);
    }
}
function cheapProduct(product: product) {
    if (product.price < 500000) {
        console.log(product.name, `-`, product.price)
    }
}

function DiscountProduct(product: product) {
    if (product.price > 500000) {
        let discount = product.price * 0.1;
        console.log(product.name, "-", discount);
    }
}

processProduct(products, DisplayProduct);

console.log("Produk mahal:");
processProduct(products, ExpensiveProduct);

console.log("Produk dengan diskon 10%:");
processProduct(products, DiscountProduct);

console.log("Produk murah bgt loh ya:");
processProduct(products, cheapProduct);