const formEl = document.querySelector(".login-form");
formEl.addEventListener("submit", sendForm);

function sendForm(event) {
  event.preventDefault();

  const emailInput = formEl.elements.email;
  const passwordInput = formEl.elements.password;

  if (emailInput.value.trim() === "" || passwordInput.value.trim() === "") {
    alert("Please fill in all fields of the form.");
    return;
  }

  const dataForm = {};
  dataForm[emailInput.name] = emailInput.value.trim();
  dataForm[passwordInput.name] = passwordInput.value.trim();
  console.log(dataForm);
  formEl.reset();
}