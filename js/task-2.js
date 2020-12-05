const total = 100;
let ordered = prompt("Введите количество товаров в заказе");
ordered =  Number(ordered);
if (ordered<total){
    console.log("Заказ оформлен, с вами свяжется менеджер")
}
else {
console.log("На складе недостаточно твоаров!");
}