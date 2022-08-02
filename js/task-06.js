const input = document.querySelector("#validation-input");
const neededLength = input.dataset.length;

input.addEventListener("blur", onInputChecked);
input.addEventListener("focus", onInputFocus);

function onInputChecked(event) {
  const value = event.target.value;
  if (value.length === Number(neededLength)) {
    input.classList.add("valid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
}

function onInputFocus(event) {
  input.classList.remove("invalid");
}
