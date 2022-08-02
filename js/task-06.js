const input = document.querySelector("#validation-input");
const neededLength = input.dataset.length;

input.addEventListener("blur", onInputChecked);
input.addEventListener("focus", onInputFocus);

function onInputChecked(event) {
  const value = event.target.value;
  value.length >= neededLength
    ? input.classList.add("valid")
    : input.classList.add("invalid");
}

function onInputFocus(event) {
  input.classList.remove("invalid");
}
