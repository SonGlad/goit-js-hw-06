function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEl = document.querySelector("#controls input");
const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");
const boxesContainer = document.getElementById("boxes");

btnCreate.addEventListener("click", () => {
  const amount = Number(inputEl.value);
  const maxAttributeValue = inputEl.max;

  if(amount > maxAttributeValue){
    alert(`Please enter amount in range between 1 to 100`);
    return;
  }
  createBoxes(amount);
});

btnDestroy.addEventListener("click", destroyBoxes);


function createBoxes(amount) {
  destroyBoxes();

  const boxes = [];
  for (let i = 1; i <= amount; i += 1) {
    const box = document.createElement("div");

    const size = 30 + i * 10 + "px";

    box.style.width = size;
    box.style.height = size;
    box.style.margin = "6px";
    box.style.backgroundColor = getRandomHexColor();
    boxes.push(box);
  }; 
  boxesContainer.append(...boxes);
}

function destroyBoxes() {
  boxesContainer.innerHTML = "";
}
