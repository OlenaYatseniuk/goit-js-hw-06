const input = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

input.addEventListener("input", onInputChangeFontSize);

function onInputChangeFontSize(event) {
  const value = event.target.value;
  text.style.fontSize = value + "px";
}
