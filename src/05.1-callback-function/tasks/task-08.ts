/**
 * A company has a simple data-processing engine used to analyze transaction records.
 */

type transaction = {
    id: string,
    customer: string,
    amount: number,
    status: String
}
type Transaction_Category = `HIGH VALUE` | `MEDIUM VALUE` | `LOW VALUE`
type Transaction = transaction & {
    transaction_category: Transaction_Category,
    platform_fee: number
}

const transactions = [
    {
        id: "TRX001",
        customer: "Alya",
        amount: 850000,
        status: "paid"
    },
    {
        id: "TRX002",
        customer: "Budi",
        amount: 1250000,
        status: "pending"
    },
    {
        id: "TRX003",
        customer: "Citra",
        amount: 450000,
        status: "paid"
    },
    {
        id: "TRX004",
        customer: "Dimas",
        amount: 2100000,
        status: "paid"
    },
    {
        id: "TRX005",
        customer: "Eka",
        amount: 780000,
        status: "cancelled"
    }
];

/** TASKS:
 * - Extract customer's name only in array
 * - Determine Transaction Category with rules below:
 *   - ≥ Rp2,000,000 → HIGH VALUE
 *   - ≥ Rp1,000,000 → MEDIUM VALUE
 *   - < Rp1,000,000 → LOW VALUE
 * - Calculate platform fee:
 *   - Paid transactions → 2%
 *   - Pending transactions → 1%
 *   - Cancelled transactions → 0%
 */

function calculateTask(selectedTransaction: transaction): Transaction {
    let transaction_category: Transaction_Category = `LOW VALUE`
    if (selectedTransaction.amount >= 2000000) {
        transaction_category = `HIGH VALUE`
    } 
    else if (selectedTransaction.amount >= 1000000) {
        transaction_category = `MEDIUM VALUE`
    } 

    let platformFee = 0
    if (selectedTransaction.status == `paid`) {
        platformFee = selectedTransaction.amount * 0.2
    } else if (selectedTransaction.status == `pending`) {
        platformFee = selectedTransaction.amount * 0.1
    } else {
        platformFee = selectedTransaction.amount * 0
    }

    return {
        ...selectedTransaction,
        transaction_category: transaction_category,
        platform_fee: platformFee
    }
}

function ExtractName(transaction: transaction[]): String[] {
    let customerName: string[] = []
    for (let i = 0; i < transaction.length; i++) {
        customerName.push(transaction[i].customer)
    }
    return customerName
}

function transactionProcess<T>(
    arr: transaction[],
    callback: (transaction: transaction) => T
): T[] {
    let result: T[] = []

    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i]))
    }

    return result
}


const finaltask = transactionProcess(transactions, calculateTask)
const CustomerName = ExtractName(transactions)
console.log(`Customer Name: `)
console.log(CustomerName)
console.log(`===================================================`)
console.log(finaltask)