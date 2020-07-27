let input = +prompt("Введите число!!!");
let total = 0;

if (!input) {
  alert("Нужно ввести число!!!");
}
while (input) {
  total += input;
  input = +prompt();
}
alert(`Общая сумма чисел будет равна ${total}`);
