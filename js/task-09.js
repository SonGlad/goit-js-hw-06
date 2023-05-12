function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnEL = document.querySelector(".change-color");
const spanEL = document.querySelector(".color");

btnEL.addEventListener("click", () => {
  
  document.body.style.backgroundColor = getRandomHexColor();
  spanEL.textContent = document.body.style.backgroundColor;

});
