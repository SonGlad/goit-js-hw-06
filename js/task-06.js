const inputEl = document.querySelector('#validation-input');
inputEl.style.outline = "none";

inputEl.addEventListener("blur", () => {
    const requiredLength = inputEl.dataset.length;
    const inputValue = inputEl.value;

    if(parseInt(requiredLength) === inputValue.length){
      inputEl.classList.add("valid");
      inputEl.classList.remove("invalid")
    } else {
      inputEl.classList.remove("valid");
      inputEl.classList.add("invalid")
    }
});