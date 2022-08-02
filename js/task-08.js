const formRef = document.querySelector(".login-form");

formRef.addEventListener("submit", onButtonSubmit);

function onButtonSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.target;
  const emailValue = email.value;
  const passwordValue = password.value;

  if (emailValue && passwordValue) {
    const data = {
      email: emailValue,
      password: passwordValue,
    };
    console.log(data);
    event.target.reset();
  } else {
    alert("All inputs need to be filled!");
  }
}
