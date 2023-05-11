const inputEl = document.querySelector("#font-size-control");
const fontSizeEl = document.querySelector("#text");

inputEl.addEventListener("input", () => {
    fontSizeEl.style.fontSize = inputEl.value + "px";
});
    