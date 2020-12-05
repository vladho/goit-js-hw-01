let country = prompt("Введите страну в которую нужно доставить").toLowerCase();
let cost;
switch (country){

case "китай" :
    cost = 100;
    country = "Китай";
    break;
    case "чили" :
    cost = 250;
    country = "Чили";
    break;
    case "автралия" :
    cost = 170;
    country = "Австралия";
    break;
    case "индия" :
    cost = 80;
    country = "Индия";
    break;
    case "ямайка" :
    cost = 120;
    country = "Ямайка";
    break;
    default:
        alert("В вашей стране доставка не доступна");
}

 console.log("Доставка в " + country + " будет стоить " +  cost + " кредитов");