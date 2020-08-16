const user = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true,
};

user.mood = [];
user.mood = "happy";
console.log(user);

user.hobby = "skydiving";
console.log(user);

user.premium = false;
console.log(user);

for (const key in user) {
  console.log(key);
  console.log(user[key]);
}

const keys = Object.keys(user);
const values = Object.values(user);
console.log(keys);
console.log(values);
