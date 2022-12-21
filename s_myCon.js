function Wage(amountPerBlock) {
    this.balance = balance;
    this.amount= amountPerBlock;
    this.total = total;
}

function balance(block) {
    this.amount *= block;
}

function total() {
    return this.amount;
}

const block = new Wage(100);
block.balance(200);
print(block.total());