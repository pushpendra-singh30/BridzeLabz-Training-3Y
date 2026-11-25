// Q7: Banking Application with Private Field
class BankAccount {
  #balance;
  constructor(initialBalance = 0) {
    if (initialBalance < 0) throw new Error("Initial balance cannot be negative.");
    this.#balance = initialBalance;
  }
  deposit(amount) {
    if (typeof amount !== "number" || !Number.isFinite(amount) || amount <= 0)
      throw new Error("Deposit must be a positive number.");
    this.#balance += amount;
    return this.#balance;
  }
  withdraw(amount) {
    if (typeof amount !== "number" || !Number.isFinite(amount) || amount <= 0)
      throw new Error("Withdrawal must be a positive number.");
    if (amount > this.#balance) throw new Error("Insufficient balance.");
    this.#balance -= amount;
    return this.#balance;
  }
  getBalance() { return this.#balance; }
}
const account = new BankAccount(1000);
try {
  account.deposit(500);
  console.log("After deposit: ₹" + account.getBalance());
  account.withdraw(300);
  console.log("After withdrawal: ₹" + account.getBalance());
} catch (err) { console.log("Transaction failed:", err.message); }
try {
  account.withdraw(5000);
} catch (err) { console.log("Transaction failed:", err.message); }
// #balance is private and cannot be accessed directly outside the class.
