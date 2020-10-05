// Напиши скрипт, который реагирует на изменение значения input#font - size - control(событие input)
// и изменяет инлайн - стиль span#text обновляя свойство font - size.
// В результате при перетаскивании ползункабудет меняться размер текста.

let controlFontSize = document.getElementById("font-size-control");

let text = document.getElementById("text");

controlFontSize.oninput = function () {
  text.style.fontSize = controlFontSize.value + "px";
};
