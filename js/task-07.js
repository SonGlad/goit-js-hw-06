const inputEl = document.querySelector("#font-size-control");
const fontSizeEl = document.querySelector("#text");

inputEl.addEventListener("input", handleInputRange);
function handleInputRange(event) {
    fontSizeEl.style.fontSize = event.currentTarget.value + "px";
}
    