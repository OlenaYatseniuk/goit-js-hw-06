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
let valueInput = input.value;

input.addEventListener("input", onInputChange);
btnCreate.addEventListener("click", onBtnCreateClick);
dtnDestroy.addEventListener("click", destroyBoxes);

function onInputChange(event) {
  valueInput = event.target.value;
}

function onBtnCreateClick() {
  const tagStr = createBoxes(valueInput);
  divBoxes.innerHTML = "";
  divBoxes.insertAdjacentHTML("afterbegin", tagStr);
}

function destroyBoxes(event) {
  divBoxes.innerHTML = "";
  input.value = "";
}

function createBoxes(amount) {
  let divArray = [];
  let width = 30;
  for (let i = 0; i < amount; i += 1) {
    divArray[
      i
    ] = `<div class ="box" style = 'background-color: ${getRandomHexColor()}; width: ${
      width + "px"
    }; height:${width + "px"}'>${i + 1}</div>`;
    width += 10;
  }
  return divArray.join("");
}
