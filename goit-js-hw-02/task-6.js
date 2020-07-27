// let input;
// const numbers = [];
// let total = 0;

function totalInput() {
  const numbers = [];
  while (true) {
    let input = prompt("Введите число");
    if (input === "" || input === null || !isFinite(input)) break;
    numbers.push(+input);
  }
  let total = 0;
  for (let number of numbers) {
    total += number;
  }
  return total;
}

alert(totalInput());
