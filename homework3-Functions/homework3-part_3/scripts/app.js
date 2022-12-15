const moneyAvailable = 50000;

function atmMoneyWithdraw(withdrawAmount) {
    if (Number.isNaN(withdrawAmount) ||
        typeof withdrawAmount !== "number" ||
        withdrawAmount <= 0) {
        return "Invalid Input!";
    }
    else if (withdrawAmount > moneyAvailable) {
        return "Not enough money.";
    }
    let moneyLeft = moneyAvailable - withdrawAmount;
    return `You have withdrawn ${withdrawAmount} and you have ${moneyLeft} "left on the account.`
}

console.log(atmMoneyWithdraw(5000))

// Working with prompt

function atmMoneyWithdraw() {
    let withdrawAmount = prompt("How much money would you like to withdraw?");
    let convertedWithdrawAmount = Number(withdrawAmount);
    if (Number.isNaN(convertedWithdrawAmount) ||
        convertedWithdrawAmount <= 0) {
        return "Invalid Input!";
    }
    else if (convertedWithdrawAmount > moneyAvailable) {
        return "Not enough money.";
    }
    let moneyLeft = moneyAvailable - convertedWithdrawAmount;
    return `You have withdrawn ${convertedWithdrawAmount} and you have ${moneyLeft} left on the account.`
}

console.log(atmMoneyWithdraw())