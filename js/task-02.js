const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");
const items = ingredients.map((item) => {
  let itemLi = document.createElement("li");
  itemLi.textContent = item;
  itemLi.classList.add("item");
  return itemLi;
});
ingredientsList.append(...items);
