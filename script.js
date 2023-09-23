let nameInput = document.querySelector(".name");
let email = document.querySelector(".email");
let password = document.querySelector(".password");
let confPassword = document.querySelector(".confPassword");
let register = document.querySelector(".register");
let errorMessage = document.querySelector(".error");
let worning = document.querySelector(".worning");


function getValues(e) {
  e.preventDefault();
  const name = nameInput.value;
  const userEmail = email.value;
  const userPassword = password.value;
  const userConfPassword = confPassword.value;

  const userData = {
    name,
    userEmail,
    userPassword,
  };
  if (!userData.name || !userData.userEmail || !userData.userPassword) {
    worning.style.display = "block";
  }
  if (userPassword === userConfPassword && userPassword) {
    localStorage.setItem("userData", JSON.stringify(userData));
    window.location.href = '/signUpSuccessfully.html'
  } else {
    errorMessage.style.display = "block";
  }
}

register.addEventListener("click", getValues);


