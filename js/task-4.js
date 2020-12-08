const credits = 23580;
const pricePerDroid = 3000;
let wantToBuy = Number(prompt("Введите количество дроидов для покупки"))

if (wantToBuy === null) {
    console.log("Отменено пользователем!")
}
else
if (Number.isNaN(wantToBuy) === true) {
    alert("просьба ввести число");
    }
else    
{
    wantToBuy = Number(wantToBuy);
    let totalPrice = wantToBuy * pricePerDroid;

if (totalPrice > credits) {
        console.log("Недостаточно средств на счету!");
    }
else
    {
        let balance = credits - totalPrice;
        console.log("Вы купили " + wantToBuy + " дроидов, на счету осталось " + balance + " кредитов.");
    }
}