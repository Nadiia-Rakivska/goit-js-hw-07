function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnItem = document.querySelector(".change-color");
const spanItem = document.querySelector(".color");
const body = document.querySelector("body");

btnItem.addEventListener("click", el => {
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  spanItem.textContent = color;
})