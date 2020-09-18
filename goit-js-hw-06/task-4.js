import users from "./users.js";

// Получить массив только неактивных пользователей(поле isActive).

const getInactiveUsers = (users) => {
  const falseActive = users.filter((user) => user.isActive === false);
  return falseActive.map((user) => user.name);
};

console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]
