function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  inputEl: document.querySelector("#controls input"),
  btnCreatEl: document.querySelector("button[data-create]"),
  btnDestrEl: document.querySelector("button[data-destroy]"),
  boxesEl: document.querySelector("#boxes"),
};

refs.btnCreatEl.addEventListener('click', inputChecksAndTransformation);
refs.btnDestrEl.addEventListener('click', destroyBox);


function inputChecksAndTransformation(){
    const amount = Number(refs.inputEl.value);
    const maxAmout = refs.inputEl.max;
  
    if (amount > maxAmout){
      alert(`Please choose the value in range between 1 to 100 in input field `);
      refs.inputEl.value = "";
      return;
    } 
    createBox(amount);
  };

function createBox(amount){
  destroyBox();
  
  const boxes = [];
  for(let i = 1; i <= amount; i += 1){
    const box = document.createElement('div');
    const size = 30 + i * 10 + "px";

    box.style.width = size;
    box.style.height = size;
    box.style.margin = "10px";
    box.style.backgroundColor = getRandomHexColor();
    boxes.push(box);
  };
  refs.boxesEl.append(...boxes);
};

function destroyBox(){
  refs.boxesEl.innerHTML = "";
  refs.inputEl.value = "";
};