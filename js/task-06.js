const inputEl = document.querySelector('#validation-input');
inputEl.style.outline = "none";
const inputElLength = Number(inputEl.getAttribute('data-length'));

inputEl.addEventListener('blur', event => {
  if (event.target.value.length === inputElLength) {
    inputEl.classList.add('valid');
    if (inputEl.classList.contains('invalid')) {
      inputEl.classList.remove('invalid');
    }
  } else {
    inputEl.classList.add('invalid');
  }
});