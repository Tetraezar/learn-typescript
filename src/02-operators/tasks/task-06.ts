/**
 * An internet café charges customers Rp8,000 per hour. 
 * Customers are billed for every started hour. If the total playing time exceeds 5 hours, they receive a 15% discount.
 * Today, a customer used a computer for:
 * 7 hours and 35 minutes
 * 
 * 
 * You need to determine:
 * - Total playing time in minutes
 * - Remaining minutes after full hours
 * - Total billed hours
 * - Total payment before discount
 * - Discount amount
 * - Final payment
 */

const charges: number = 8000;
const hour: number = 7;
const minute: number = 35;
const isDiscount = hour > 5 ? 0.15 : 1;
const Discount = (hour * charges) * isDiscount;

console.log(`Total playing time: ${hour * 60 + minute} minutes`)
console.log(`Remaining minutes after full hours: ${60 - minute} `)
console.log(`Total payment before discount: ${hour * charges}`)
console.log(`discount amount: ${(hour * charges) * isDiscount}`)
console.log(`Final payment: ${(hour * charges) - Discount}`)
