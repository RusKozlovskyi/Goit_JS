const ADMIN_PASSWORD = "jqueryismyjam";
const USER_PASSWORD = prompt("Введите пароль для авторизации!");
let message;

if (USER_PASSWORD == ADMIN_PASSWORD) {
  alert("Добро пожаловать!");
} else if (USER_PASSWORD == null) {
  alert("Отменено пользователем!");
} else {
  alert("Доступ запрещен, неверный пароль!");
}

console.log(message);
