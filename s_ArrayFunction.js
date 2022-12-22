

function Checking (amount) {
    this.balance = amount;
    this.deposit = deposit;
    this.withdraw = withdraw;
    this.toString = toString;
}

function deposit(amount) {
    this.balance += amount;
}

function withdraw(amount) {
    if (amount <= this.balance) {
        this.balance -= amount;
    }
    if (amount > this.balance) {
        print("Insufficient funds");
    }
}

function toString(){
    return "Balance: " +this.balance;
}

print("Hello Welcome to IE Finance");
putstr("What will you like to do? \n Enter => 1 for Account Opening \n Enter => 2 for Deposit \n Enter => 3 to Withdraw \n ");
var opt = readline();

switch (opt) {
    case "1":
            putstr("Please Enter Initial Accont opening amount ");
            var init = +readline();
            var account = new Checking(init);
        break;
    case "2":
        putstr("Please Enter amount to deposit ");
        var deposite = +readline();
        account.deposit(deposite);
        print(account.toString());
        break;
    case "3":
            putstr("Please Enter amount to withdraw ");
            var withdrawer = readline();
            account.withdraw(withdrawer);
            print(account.toString());
        break;

    default:
        break;
}



// account.withdraw(800);
// print(account.toString());


// function Name(arr){
//     arr = arr;
// }


// putstr("Enter a name: ")
// var names = readline();
// Name(names);
// print(names)