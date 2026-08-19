/**
 * An online store wants to generate a daily sales dashboard. All transaction amounts are stored in an array.
 * Instead of writing one long program, the development team decides to split the calculations into reusable functions.
 * The dashboard should display:
 * - Total sales
 * - Highest transaction
 * - Lowest transaction
 * - Average transaction
 * - Number of transactions above Rp500,000
 * 
 * Student Tasks
 * Create the following functions:
 */

const sales = [
  125000,
  780000,
  250000,
  99000,
  540000,
  670000,
  180000,
  450000,
  310000,
  820000
];

function calculateTotalSales(sales: number[]): number {
  let totalsales: number = 0
  for (let i = 0; i < sales.length; i++) {
    totalsales += sales[i]
  }
  return totalsales
}

function findHighestTransaction(sales: number[]): number {
  let highesttransaction: number = sales[0]
  for (let i = 0; i < sales.length; i++) {
    if (highesttransaction < sales[i]) {
        highesttransaction = sales[i]
      }    
  }
  return highesttransaction
}

function findLowestTransaction(sales: number[]): number {
  let lowesttransaction: number = sales[0]
    for (let i = 0; i < sales.length; i++) {
      if (lowesttransaction > sales[i]) {
          lowesttransaction = sales[i]
        }    
    }
    return lowesttransaction
}

function calculateAverageSale(sales: number[]): number {
  const avgScore: number = calculateTotalSales(sales) / sales.length
  return avgScore
}

function countLargeTransactions(sales: number[], minimumAmount: number): number {
  let countlargetransaction: number = 0
  for (let i = 0; i < sales.length; i++) {
    if (sales[i] >= minimumAmount) {
      countlargetransaction++
    }    
  }
  return countlargetransaction
}

console.log(`Total sales: `, calculateTotalSales(sales))
console.log(`Highest transaction: `, findHighestTransaction(sales))
console.log(`Lowest transaction: `, findLowestTransaction(sales))
console.log(`Average transaction: `, calculateAverageSale(sales))
console.log(`Large transaction: `, countLargeTransactions(sales, 500000))