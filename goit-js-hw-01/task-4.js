let credits = 23580;
const pricePerDroid = 3000;
let ordered = +prompt("Введите колличество дроидов для покупки!");
let totalPrice;

if (ordered == null) {
  console.log("Отменено пользователем!");
} else {
  totalPrice = pricePerDroid * ordered;
}

if (credits - totalPrice < 0) {
  console.log("Недостаточно средств на счету!.");
} else {
  credits = credits - totalPrice;
  console.log(`Вы купили ${ordered} дроида(ов), на счету осталось ${credits}`);
}

console.log();
