/**
 * An online store wants to analyze today's sales transactions. 
 * Each transaction amount is stored in an array.
 * ---------------------------------
 * const sales = [
 * 125000,
 * 350000,
 * 78000,
 * 910000,
 * 150000,
 * 420000,
 * 275000,
 * 99000,
 * 640000,
 * 18000
 * ]
 * -------------------------------------
 * 
 * Student task in calculate:
 * 1. Total sales revenue
 * 2. Highest transaction
 * 3. Lowest transaction
 * 4. Number of transactions worth Rp300,000 or more
 * 5. Average transaction value
 */

const sales = [
  125000,
  350000,
  78000,
  910000,
  150000,
  420000,
  275000,
  99000,
  640000,
  18000
  ]

  let totalRevenue: number = 0
  const saleslong: number = sales.length
  let over300: number = 0
  const MaxRevenue: number = Math.max(...sales)
  const MinRevenue: number = Math.min(...sales)
  for (let i = 0; i < saleslong; i++) {
        totalRevenue += sales[i];
        if (sales[i] >= 300000) {
            over300 ++
        }
  }

  const average: number = totalRevenue / saleslong

  console.log(`total revenue: ${totalRevenue}`)
  console.log(`highest transaction: ${MaxRevenue}`)
  console.log(`lowest transaction: ${MinRevenue}`)
  console.log(`transactions worth Rp300,000: ${over300} transactions`)
  console.log(`average transaction value: ${average}`)