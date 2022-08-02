const categoriesList = document.querySelector("#categories");
const children = categoriesList.children;
console.log("Number of categories:", children.length);
const list = [...children].map((child) =>
  console.log(
    `Category: ${child.firstElementChild.textContent}\nElements: ${child.lastElementChild.children.length}`
  )
);
