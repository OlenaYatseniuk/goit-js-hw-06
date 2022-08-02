let counterValue = 0;
const btnDecrement = document.querySelector('[data-action="decrement"]');
const btnIncrement = document.querySelector('[data-action="increment"]');
const value = document.querySelector("#value");

const onButtonIncrement = (event) => {
  counterValue += 1;
  value.textContent = counterValue;
};
const onButtonDecrement = (event) => {
  counterValue -= 1;
  value.textContent = counterValue;
};

btnIncrement.addEventListener("click", onButtonIncrement);
btnDecrement.addEventListener("click", onButtonDecrement);
