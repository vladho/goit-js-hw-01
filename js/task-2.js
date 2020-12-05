const total = 100;
const ordered = prompt("Введите количество товаров в заказе");

let numbOrdered = Number(ordered);
let totalOrdered;

for (totalOrdered = numbOrdered; totalOrdered < total; totalOrdered += numbOrdered) {
 console.log(totalOrdered);
}
console.log(numbOrdered);