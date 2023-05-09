const addListenerBtn = document.querySelector('[data-action="increment"]');
const removeListenerBtn = document.querySelector('[data-action="decrement"]');
const spanValue = document.querySelector("#value");
let counterValue = 0;

addListenerBtn.addEventListener("click", () => {
 spanValue.textContent = counterValue += 1;
});
removeListenerBtn.addEventListener("click", () => {
    spanValue.textContent = counterValue -=1;
   });




