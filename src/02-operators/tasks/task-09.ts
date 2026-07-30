/**
 * An online marketplace wants to calculate the customer's final payment and reward points after checkout.
 * The customer purchases the following items:
 * | Product             |  Price | Quantity |
 * | ------------------- | -----: | -------: |
 * | Mechanical Keyboard | 850000 |        1 |
 * | Wireless Mouse      | 275000 |        2 |
 * | Monitor Stand       | 420000 |        1 |
 * 
 * Customer Information:
 * | Information       | Value                            |
 * | ----------------- | -------------------------------- |
 * | Voucher Value     | 100000                           |
 * | Premium Member    | Yes                              |
 * | Reward Point Rate | 1 point for every Rp50,000 spent |
 * 
 * Business Rules:
 * - Premium members receive 10% discount.
 * - Voucher is deducted after the membership discount.
 * - Reward points are calculated from the final payment before tax.
 * - VAT is 11%.
 * - Free shipping is available if:
 * - Premium member OR
 * - Final payment before tax exceeds Rp1,500,000.
 * 
 * The checkout system must calculate:
 * - Product subtotal
 * - Membership discount
 * - Voucher deduction
 * - Payment before tax
 * - VAT
 * - Final payment
 * - Reward points
 * - Free shipping eligibility

 */

const mechKeyboardPrice: number = 850000;
const wirelessMousePrice: number = 275000;
const monitorStandPrice: number = 420000;
const mechKeyboardQTY: number = 2;
const wirelessMouseQTY: number = 1;
const monitorStandQTY: number = 1;
const voucherValue: number = 100000;
const premMember: string = `yes`;
const RewardPointRate: number = 50000;

const discount = premMember == `yes` ? 0.1 : 1

const subtotal = (mechKeyboardPrice * mechKeyboardQTY) + (wirelessMousePrice * wirelessMouseQTY) + (monitorStandPrice * monitorStandQTY)
const totalaftrVCR = subtotal - (subtotal * discount) - voucherValue
const tax: number = totalaftrVCR * 0.11
const reward: number = totalaftrVCR / RewardPointRate
const eligibility = premMember == `yes` || totalaftrVCR > 1500000 ? `yes` : `no`

console.log(`Product Subtotal: ${subtotal}`)
console.log(`Membership discount: ${subtotal * discount}`)
console.log(`Voucher deduction: ${voucherValue}`)
console.log(`Payment before tax: ${totalaftrVCR}`)
console.log(`VAT: ${tax}`)
console.log(`Final payment: ${totalaftrVCR + tax}`)
console.log(`Reward points: ${reward}`)
console.log(`Free shipping eligibility: ${eligibility}`)
