/**
 * An online store has customer orders.
 * Tasks:
 * 1. Get only completed orders.
 * 2. Calculate the total value of each order.
 * 3. Find the customer who spent the most.
 * 4. Calculate the total revenue from completed orders.
 * 5. Find all products that have been purchased.
 */
const orders = [
    {
        id: 101,
        customer: "Andi",
        status: "completed",
        items: [
            { product: "Keyboard", price: 350000, quantity: 1 },
            { product: "Mouse", price: 150000, quantity: 2 },
        ],
    },
    {
        id: 102,
        customer: "Budi",
        status: "cancelled",
        items: [
            { product: "Monitor", price: 2500000, quantity: 1 },
        ],
    },
    {
        id: 103,
        customer: "Citra",
        status: "completed",
        items: [
            { product: "Monitor", price: 2500000, quantity: 2 },
            { product: "Keyboard", price: 350000, quantity: 1 },
        ],
    },
];

const completedOrders = orders.filter(order => order.status == "completed");
const totalvalue = completedOrders.map(order => {
    const total = order.items.reduce(
        (total, item) => total + (item.price * item.quantity), 0)

    return {
        customer: order.customer,
        total: total
    }
})

const spentMost = totalvalue.reduce((max, order) =>
    order.total > max.total ? order : max)

const totalRevenue = totalvalue.reduce(
    (total, order) => total + order.total, 0)

const products = completedOrders.flatMap(order =>
    order.items.map(item => item.product))

console.log("Completed Orders:", completedOrders);
console.log("Order Totals:", totalvalue);
console.log("Customer Spent Most:", spentMost);
console.log("Total Revenue:", totalRevenue);
console.log("Purchased Products:", products);


