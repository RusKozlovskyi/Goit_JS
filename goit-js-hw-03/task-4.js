const countTotalSalary = function (employees) {
  return (
    Object.values(employees).reduce((a, b) => a + b, 0) +
    ":" +
    Object.keys(employees)
  );

  //   let sum = 0;
  //   let result = Object.values(employees);
  //   for (let salary of result) {
  //     sum += salary;
  //   }
  //   return sum ;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(countTotalSalary({})); // 0

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  })
); // 330

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  })
); // 400
