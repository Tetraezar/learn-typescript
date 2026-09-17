/**
 * A digital wallet application stores information about a user's account.
 * 
 * A wallet has:
 * - Owner name
 * - Wallet ID
 * - InitialBalance
 * 
 * For example, Jude Bellingham creates a wallet with:
 * | Property        | Value           |
 * | --------------- | --------------- |
 * | Wallet ID       | WAL001          |
 * | Owner           | Harry Maguire   |
 * | Initial InitialBalance | Rp500,000       |
 * 
 * The application allows the user to:
 * - Deposit money
 * - Withdraw money
 * - Check the current InitialBalance
 * However, the InitialBalance must not be changed directly from outside the class.
 * 
 * Student Tasks:
 * Create: class DigitalWallet
 * Use:
 * - private InitialBalance: number;
 * 
 * The class should provide public methods:
 * - deposit(amount)
 * - withdraw(amount)
 * - getInitialBalance()
 * - showWalletInfo()
 * 
 * Business Rules
 * deposit():
 * - Amount must be greater than 0.
 * 
 * withdraw():
 * - Amount must be greater than 0.
 * - Amount cannot exceed the current InitialBalance.
 */


class DigitalWallet {
    constructor(
        public WalletID : String,
        public Owner : String,
        private InitialBalance : number
    ) {
    }
    public deposit(amount: number): void {
        if (amount > 0) {
        this.InitialBalance += amount;
        }
    }

    public withdraw(amount: number): void {
        if (amount > 0 && amount <= this.InitialBalance) {
        this.InitialBalance -= amount;
        }
    }

    public getInitialBalance(): number {
        return this.InitialBalance;
    }

    public showWalletInfo(): void {
        console.log(`Wallet ID: `, this.WalletID)
        console.log(`Owner: `, this.Owner)
        console.log(`Initial InitialBalance: `, this.InitialBalance)
        console.log(``)
    }
}

const digitalwallet1 = new DigitalWallet(`WAL001`, `Harry Maguire`, 500000)
const digitalwallet2 = new DigitalWallet(`WAL002`, `Prabu panedya`, 100000)
const digitalwallet3 = new DigitalWallet(`WAL003`, `Fatih Lintang`, 50000)

digitalwallet1.deposit(10000);
digitalwallet2.withdraw(50000);
digitalwallet3.getInitialBalance();

digitalwallet1.showWalletInfo();
digitalwallet2.showWalletInfo();
digitalwallet3.showWalletInfo();

