const input = document.querySelector("#name-input");
const userName = document.querySelector("#name-output");

input.addEventListener("input", onInputChanges);

function onInputChanges(event) {
  const currentValue = event.target.value;
  userName.textContent = currentValue;
  if (currentValue === "") {
    userName.textContent = "Anonymous";
  }
}
