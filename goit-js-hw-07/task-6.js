// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его
// содержимое на правильное количество символов.

let inputValid = document.getElementById("validation-input");

let totalLenght = inputValid.getAttribute("data-length");
let intTotallenght = parseInt(totalLenght, 10);

inputValid.oninput = function () {
  if (inputValid.value.length === intTotallenght) {
    inputValid.classList.remove("invalid");
    inputValid.classList.add("valid");
  }
  if (inputValid.value.length === 0) {
    inputValid.classList.remove("valid");
    inputValid.classList.remove("invalid");
  }
  if (
    inputValid.value.length !== intTotallenght &&
    inputValid.value.length !== 0
  ) {
    inputValid.classList.add("invalid");
  }
};
