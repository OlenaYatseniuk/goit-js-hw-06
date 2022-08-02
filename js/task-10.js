function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const parentDiv = document.querySelector("#controls");
const input = parentDiv.firstElementChild;
const btnCreate = input.nextElementSibling;
const dtnDestroy = parentDiv.lastElementChild;
const divBoxes = parentDiv.nextElementSibling;
input.value = 1;
let valueInput = 1;
let lastIndex = 0;

input.addEventListener("input", onInputChange);
btnCreate.addEventListener("click", onBtnCreateClick);
dtnDestroy.addEventListener("click", destroyBoxes);

function onInputChange(event) {
  valueInput = Number(event.target.value);
}

function onBtnCreateClick() {
  const tagStr = createBoxes(valueInput);
  divBoxes.insertAdjacentHTML("beforeend", tagStr);
}

function destroyBoxes(event) {
  divBoxes.innerHTML = "";
  lastIndex = 0;
}

function createBoxes(amount) {
  let divStr = "";
  for (let i = lastIndex; i < lastIndex + amount; i += 1) {
    let width = 30 + i * 10;
    divStr += `<div class ="box" style = 'background-color: ${getRandomHexColor()}; width: ${
      width + "px"
    }; height:${width + "px"}'>${i + 1}</div>`;
  }
  lastIndex += amount;
  return divStr;
}
