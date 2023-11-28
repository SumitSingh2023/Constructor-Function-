/*Task: Implement a bank account management system using JavaScript objects and functions.

Create a constructor function called BankAccount that takes accountNumber, name, type, and balance as arguments.

Inside the constructor, initialize the properties of the bank account object.

Add the following methods to the BankAccount prototype:

deposit(amount) - Deposits the specified amount into the account.

withdraw(amount) - Withdraws the specified amount from the account if the balance is sufficient.

checkBalance() - Prints the account's balance.

isActive() - Checks and returns whether the account is active.

Create multiple BankAccount objects representing different accounts.

Perform a series of deposit, withdrawal, and balance check operations on these accounts.

Test the isActive method to check if the accounts are active.

Implement a function getTotalBalance that calculates and returns the total balance of all active accounts.

Test the getTotalBalance function to display the total balance of all active accounts.*/

// BankAccount constructor function
function BankAccount(accountNumber, name, type, balance) {
    this.accountNumber = accountNumber;
    this.name = name;
    this.type = type;
    this.balance = balance;
    this.active = true; // Setting account as active by default
  }
  
  // Methods added to the BankAccount prototype
  BankAccount.prototype.deposit = function(amount) {
    if (amount > 0) {
      this.balance += amount;
      console.log(`Deposited ${amount} into ${this.name}'s account.`);
    } else {
      console.log('Deposit amount should be greater than zero.');
    }
  };
  
  BankAccount.prototype.withdraw = function(amount) {
    if (this.balance >= amount && amount > 0) {
      this.balance -= amount;
      console.log(`Withdrawn ${amount} from ${this.name}'s account.`);
    } else {
      console.log('Insufficient balance or invalid amount for withdrawal.');
    }
  };
  
  BankAccount.prototype.checkBalance = function() {
    console.log(`${this.name}'s account balance: ${this.balance}`);
  };
  
  BankAccount.prototype.isActive = function() {
    return this.active;
  };
  
  // Creating multiple BankAccount objects
  const account1 = new BankAccount(1001, 'Alice', 'Savings', 500);
  const account2 = new BankAccount(1002, 'Bob', 'Checking', 1000);
  
  // Testing deposit, withdrawal, and balance check operations
  account1.deposit(200);
  account1.checkBalance();
  account1.withdraw(100);
  account1.checkBalance();
  
  account2.deposit(500);
  account2.checkBalance();
  account2.withdraw(200);
  account2.checkBalance();
  
  // Testing isActive method
  console.log(account1.isActive()); // true
  console.log(account2.isActive()); // true
  
  // Function to calculate total balance of all active accounts
  function getTotalBalance(accounts) {
    let totalBalance = 0;
    accounts.forEach(account => {
      if (account.isActive()) {
        totalBalance += account.balance;
      }
    });
    return totalBalance;
  }
  
  // Testing getTotalBalance function
  const allAccounts = [account1, account2];
  const total = getTotalBalance(allAccounts);
  console.log(`Total balance of all active accounts: ${total}`);
  