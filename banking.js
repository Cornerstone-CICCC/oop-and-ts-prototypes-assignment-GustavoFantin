function Account (accountNumber, balance) {
    this.accountNumber = accountNumber;
    this.balance = balance;
}

Account.prototype.deposit = function (amount) {
    this.balance += amount;
    console.log (`CA$ ${amount} were deposit successfully. Now your new balance is CA$ ${this.balance}`)
}

Account.prototype.withdraw = function(amount) {
    if (amount > this.balance) {
        console.log(`Insufficient balance.`)
    } else {
        this.balance -= amount;
        console.log(`CA$ ${amount} was withdrawn. Current balance: ${this.balance}`)
    }
}

function SavingsAccount (accountNumber, balance, interestRate) {
    Account.call(this, accountNumber, balance);
    this.interestRate = interestRate
}

SavingsAccount.prototype = Object.create(Account.prototype);
SavingsAccount.prototype.constructor = SavingsAccount;


SavingsAccount.prototype.addInterest = function () {
    const interest = this.balance * (this.interestRate / 100);
    this.balance += interest;
    console.log(`Interest added of ${interest}%. Your balance is CA$ ${this.balance}`)
}

function CheckingAccount (accountNumber, balance) {
    Account.call(this, accountNumber, balance)
}

CheckingAccount.prototype = Object.create(Account.prototype);
CheckingAccount.prototype.constructor = CheckingAccount;


CheckingAccount.prototype.withdrawUsingCheck = function (amount) {
    if (amount > this.balance) {
        console.log(`Insufficient balance.`)
    } else {
        this.balance -= amount;
        console.log(`CA$ ${amount} was withdrawn. Current balance: ${this.balance}`)
    }   
}

const savings = new SavingsAccount('123456', 2750, 1);

savings.deposit(250);
savings.addInterest(3)
savings.withdraw(500);

const checks = new CheckingAccount('098543', 1000);

checks.deposit(500);

checks.withdrawUsingCheck(100)