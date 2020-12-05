let total = 0;
let input;
while(true) {
    let input = prompt("Введите число");
    
    if (input === null) {
        break;
    }
    input = Number(input);
    const nan = Number.isNaN(input)
    if (nan) {
        continue;
    }

    total += Number(input);
}

alert("Общая сумма чисел равна " + total);