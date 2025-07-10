const formElement = document.querySelector(".login-form");
formElement.addEventListener("submit", (ev) => {
  ev.preventDefault();
  const form = ev.currentTarget;
  const email = form.elements.email.value.trim();
  const password = form.elements.password.value.trim();
  if (!email||!password) {
    alert('All form fields must be filled in');

  } else {
    const login = {
      email: email,
      password: password,
    }
    console.log(login);
    form.reset();
  }
})


