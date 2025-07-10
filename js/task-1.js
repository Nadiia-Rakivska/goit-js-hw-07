const items = document.querySelectorAll(".item");
console.log(`Number of categories: ${items.length}`);

items.forEach(item => {
  const el = item.querySelector("h2");
  console.log(`Category: ${el.textContent}`);
  const count = item.querySelectorAll("ul li");
  console.log(`Elements: ${count.length}`);
  el.classList.add("categories-title");
  count.forEach(element => {
    element.classList.add("categories-item");
  })
  const ulItem = item.querySelector("ul");
  ulItem.classList.add("categories-list");
});
const categories = document.querySelector("ul");
categories.classList.add("categories");

