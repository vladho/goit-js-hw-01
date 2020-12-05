const credits = 23580;
const pricePerDroid = 3000;
let WantToBuy = prompt("Введите количество дроидов для покупки")

if (WantToBuy === null) {
    console.log("Отменено пользователем!")
}
else {
    WantToBuy = Number(WantToBuy);
    let totalPrice = WantToBuy * pricePerDroid;
    if (totalPrice > credits) {
        console.log("Недостаточно средств на счету!");
    }
    else
    {
        let balance = credits - totalPrice;
        console.log("Вы купили " + WantToBuy + " дроидов, на счету осталось " + balance + " кредитов.");
    }
}