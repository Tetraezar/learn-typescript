/**
 * A hotel calculates a guest's payment based on the following information.
 * | Information          | Value  |
 * | -------------------- | ------ |
 * | Room Price per Night | 650000 |
 * | Nights Stayed        | 4      |
 * | Service Charge       | 120000 |
 * | Tax                  | 11%    |
 * | VIP Member           | Yes    |
 * 
 * Business Rules
 * - VIP guests receive a 12% room discount.
 * - Tax is calculated after the discount.
 * - Service charge is not discounted.
 * - The hotel also offers free breakfast if the guest stays at least 3 nights or is a VIP member.
 * 
 * The system must calculate:
 * - Room subtotal
 * - Discount
 * - Tax
 * - Final payment
 * - Whether the guest is eligible for free breakfast
 */

const pricePer: number = 650000;
const nightsStay: number = 4;
const serviceCharge: number = 120000;
const tax: number = 0.11;
const Vip: boolean = true;

const isDiscount = Vip ? 0.12 : 1
const isfreeBreakfast = nightsStay >= 3 || Vip == true ? `yes` : `no`

const Discount: number = ((pricePer * nightsStay) * isDiscount)
const priceAFTRdic: number = (pricePer * nightsStay) - Discount + serviceCharge
const taxFIx: number = ((pricePer * nightsStay) - Discount + serviceCharge) * tax
const finalPaymnet: number = priceAFTRdic + taxFIx

console.log(`Room subtotal: ${pricePer * nightsStay}`)
console.log(`Discount: ${Discount}`)
console.log(`Tax: ${taxFIx}`)
console.log(`Final payment: ${finalPaymnet}`)
console.log(`Is free eligible for free breakfast : ${isfreeBreakfast}`)