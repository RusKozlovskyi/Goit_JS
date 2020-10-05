// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li,
// после чего вставит все li за одну операцию в список ul.ingredients.
// Для создания DOM - узлов используй document.createElement().

const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

let list = document.querySelector("#ingredients");

let listItems = ingredients.reduce((acc, item) => {
  let li = document.createElement("li");
  li.textContent = item;
  acc.push(li);

  return acc;
}, []);

list.append(...listItems);

console.log(list);
