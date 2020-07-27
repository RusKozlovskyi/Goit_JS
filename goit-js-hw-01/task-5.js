const deliveryCountry = prompt("Укажите страну доставки!").toLowerCase();
let price;

switch (deliveryCountry) {
  case "китай":
    price = 100;
    alert(
      `Доставка в ${deliveryCountry.toLowerCase()} будет стоить ${price} кредитов`
    );
    break;
  case "чили":
    price = 250;
    alert(`Доставка в ${deliveryCountry} будет стоить ${price} кредитов`);
    break;
  case "австралия":
    price = 170;
    alert(`Доставка в ${deliveryCountry} будет стоить ${price} кредитов`);
    break;
  case "индия":
    price = 80;
    alert(`Доставка в ${deliveryCountry} будет стоить ${price} кредитов`);
    break;
  case "ямайка":
    price = 120;
    alert(`Доставка в ${deliveryCountry} будет стоить ${price} кредитов`);
    break;

  default:
    alert("Указанной страны нет в списке!");
}
