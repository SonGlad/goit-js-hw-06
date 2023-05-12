function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxesContainer = document.getElementById("boxes");
const inputEl = document.querySelector("#controls input ");
const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");

btnCreate.addEventListener("click", () => {
  const amount = Number(inputEl.value);
  createBoxes(amount);
});

function createBoxes(amount) {
  destroyBoxes();

  const boxes = [];
  for (let i = 1; i <= amount; i += 1) {
    const box = document.createElement("div");

    const size = 30 + i * 10 + "px";

    box.style.width = size;
    box.style.height = size;
    box.style.backgroundColor = getRandomHexColor();
    box.style.margin = "6px";
    boxes.push(box);
  }
  // const boxes = [];
  // let size = 30;
  // for(let i of Array(amount)){
  //   const box = document.createElement("div");
  //   size += 10;
    

  //   box.style.width = size + "px";
  //   box.style.height = size + "px";
  //   box.style.backgroundColor = getRandomHexColor();
  //   box.style.margin = "6px";
  //   boxes.push(box);
  // }
  boxesContainer.append(...boxes);
}

btnDestroy.addEventListener("click", destroyBoxes);
function destroyBoxes() {
  boxesContainer.innerHTML = "";
}
