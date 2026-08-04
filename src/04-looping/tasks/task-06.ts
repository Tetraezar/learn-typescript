/**
 * A warehouse stores the stock quantity of each product in following array.
 * Warehouse Rules:
 * - Out of Stock → quantity = 0
 * - Low Stock → quantity < 10
 * - Safe Stock → quantity ≥ 10
 * 
 * Students have to Calculate:
 * - Number of Out of Stock products
 * - Number of Low Stock products
 * - Number of Safe Stock products
 * - Total inventory
 * - Average stock quantity
 */

const stocks = [
    25, 0, 18, 6, 42,
    9, 0, 55, 13, 2,
    30, 8, 41, 0, 16
];

let outStock: number = 0
let low: number = 0
let safe: number = 0
let totalstock: number = 0
for (let i = 0; i < stocks.length; i++) {
    if (stocks[i] >= 10) {
        safe ++
    } else if (stocks[i] > 0) {
        low ++
    } else {
        outStock ++
    }
    totalstock += stocks[i]
}

const averageScore: number = totalstock / stocks.length

console.log(`Number of Out of Stock products: ${outStock}`)
console.log(`Number of Low Stock products: ${low}`)
console.log(`Number of safe Stock products: ${safe}`)
console.log(`Total inventory: ${totalstock}`)
console.log(`Average stock: ${averageScore}`)