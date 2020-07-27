const total = 100;
const ordered = prompt("Введите кол-во едениц товара!");

if (ordered <= total) {
  alert("Заказ оформлен, с вами свяжется менеджер");
} else {
  alert("На складе недостаточно товаров!");
}

console.log();
