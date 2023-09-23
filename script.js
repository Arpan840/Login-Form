let nameInput = document.querySelector(".name");
let email = document.querySelector(".email");
let password = document.querySelector(".password");
let confPassword = document.querySelector(".confPassword");
let register = document.querySelector(".register");
let errorMessage = document.querySelector(".error");
let worning = document.querySelector(".worning");
let passWordSize = document.querySelector("#passSize");
const currentPage = window.location.href;

const signupPageURL = "/";
const profilePageURL = "/index.html";

function generateRandom16DigitNumber() {
  const min = 1000000000000000;
  const max = 9999999999999999;
  const random16DigitNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return random16DigitNumber.toString();
}
let salt = generateRandom16DigitNumber();

function getValues(e) {
  e.preventDefault();
  const name = nameInput.value;
  const userEmail = email.value;
  const userPassword = password.value;
  const userConfPassword = confPassword.value;
  const accessToken = name + userEmail + userPassword + salt;
  
 
  const userData = {
    name,
    userEmail,
    userPassword,
    accessToken,
    userConfPassword,
  };
  if (currentPage.includes(profilePageURL)) {
    
    if (!accessToken) {
        window.location.href = signupPageURL;
    }
}
  if (userData.userPassword <= 8) {
    passWordSize.style.display = "block";
  }
  if (
    !userData.name ||
    !userData.userEmail ||
    !userData.userPassword ||
    !userData.userConfPassword
  ) {
    worning.style.display = "block";
  }
  if (
    userPassword === userConfPassword &&
    userPassword &&
    userPassword.length >= 8 &&
    userConfPassword
  ) {
    localStorage.setItem("userData", JSON.stringify(userData));
    window.location.href = "/index.html";
  } else {
    errorMessage.style.display = "block";
  }
}

register.addEventListener("click", getValues);
