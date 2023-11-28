/*Instructions
Task: Implement a bank account management system using JavaScript objects and functions.
Instructions:
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


function BankAccount(accountNumber,name,type,balance){
    this.accountNumber = accountNumber
    this.name = name
    this.type = type
    this.balance = balance
    this.isActive= ""
}

function deposit(cash){
    if(cash>0){
        this.balance += cash;
        console.log(`Deposited ${cash} into ${this.name}'s account`);
    }else{
        console.log(`Deposit Cash`);
    }
}

function withdraw(cash){
    if(this.balance >=cash && cash>0){
        this.balance-= cash;
        console.log(`Withdrawn ${cash} from ${this.name}'s account`);
    }else{
        console.log(`Insufficient balance`)
    }
    
}

function checkBalance(){
    
    //this.balance
    console.log(`Your account balance is ${this.balance}`)
}

function active(){
    if(this.balance > 100 ){
        act=this.isActive+"Yes"
        console.log(act)
       
    }else{
        act=this.isActive+"NO"
        console.log(act)
    }
}


function getTotalBalance(){
    let totalBalance=0
    if(this.isActive=="yes"){
        totalBalance+=this.balance
        return totalBalance

    }
    
    
}
let a=getTotalBalance(this.balance)
console.log(a)

let bankdetails1=new BankAccount(6767656,"Sumit Singh","Saving",195)
let bankdetails2=new BankAccount(700765,"Rohit Singh","Current",500)

deposit.call(bankdetails1,10);
checkBalance.call(bankdetails1);

withdraw.call(bankdetails1,50);
checkBalance.call(bankdetails1)

active.call(bankdetails1)


deposit.call(bankdetails2,500);
checkBalance.call(bankdetails2);

withdraw.call(bankdetails2,200);
checkBalance.call(bankdetails2)

active.call(bankdetails2)


getTotalBalance(bankdetails1.isActive)







/*deposit.call(bankdetails,100)
console.log(bankdetails)

withdraw.call(bankdetails,200)
console.log(bankdetails)

checkBalance(bankdetails)
console.log(bankdetails)

active.call(bankdetails)
console.log(bankdetails)*/


