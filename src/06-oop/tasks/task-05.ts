/**
 * An e-commerce company wants to manage product inventory.
 * Each product has:
 * - Product ID
 * - Product name
 * - Price
 * - Stock quantity
 * For example:
 * Product
 * - ID: PRD001
 * - Name: Gaming Laptop
 * - Price: Rp15,000,000
 * - Stock: 20
 * The company wants to make sure product data cannot be changed carelessly.
 * 
 * The system needs to support:
 * - Increasing stock
 * - Decreasing stock
 * - Changing price
 * - Checking stock availability
 * - Calculating inventory value
 * 
 * Student Tasks
 * - Create class Product
 * - Private Properties, at minimum:
 *   * private price: number;
 *   * private stock: number;
 * 
 * - Other properties can be public or private depending on the student's design.
 * - Required Methods
 *   * addStock(quantity)
 *   * removeStock(quantity)
 *   * changePrice(newPrice)
 *   * isAvailable()
 *   * getInventoryValue()
 *   * showProductInfo()
 * 
 * - Business Rules
 * addStock(): quantity must be greater than 0.
 * removeStock(): quantity must be greater than 0 and not greater than current stock
 * changePrice(): new price must be greater than 0.
 * isAvailable(): returns true when stock > 0, otherwise false
 * getInventoryValue(): calculate price × stock
 */

class laptop {
    constructor(
        public ProductID: String,
        public ProductName: String,
        private Price: number,
        private stockQTY: number
    ) {        
    }
    public addStock(quantity: number) {
        if (quantity > 0) {
        console.log(`Succes adding ${quantity} stock`)
        this.stockQTY += quantity                
        } else {
            console.log(`Quantity must be greater than 0`)
        }
        
    }
    public RemoveStock(quantity: number) {
        if (quantity < this.stockQTY && quantity > 0) {
            this.stockQTY -= quantity
            console.log(`Succes removing ${quantity} stock`)
        } else {
            console.log(`Can't remove stock, pls check again`)
        }
    }
    public isAvailable() {
        if (this.stockQTY > 0) {
            console.log(`The product is available`)
        } else {
            console.log(`The product is not available`)
        }
    }
    public changePrice(newPrice: number) {
        if (newPrice > 0) {
            this.Price = newPrice
            console.log(`Succesful change Price`)
        } else {
            console.log(`New price must be greater than 0`)
        }
    }
    public getInventoryValue() {
        console.log(`Inventory Value : ${this.Price * this.stockQTY}`)
    }
    public showProductInfo() {
        console.log(`ID: ${this.ProductID}`)
        console.log(`Name: ${this.ProductName}`)
        console.log(`Price: ${this.Price}`)
        console.log(`Stock: ${this.stockQTY}`)
    }
}
const Laptop = new laptop(
    "PRD001",
    "Gaming Laptop",
    15000000,
    20
);

Laptop.addStock(5)

Laptop.RemoveStock(3);

Laptop.changePrice(14500000);

console.log(Laptop.isAvailable());

console.log(Laptop.getInventoryValue());