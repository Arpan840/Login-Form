let logout = document.querySelector("#logout");
const userDataDiv = document.querySelector(".userData");
const userDataJSON = localStorage.getItem("userData");
const userData = JSON.parse(userDataJSON);

const fullNameParagraph = document.createElement("p");
fullNameParagraph.textContent = `Full Name : ${userData.name}`;
fullNameParagraph.classList.add("personDetails");

const emailParagraph = document.createElement("p");
emailParagraph.textContent = `Email : ${userData.userEmail}`;
emailParagraph.classList.add("personDetails");

const tokenParagraph = document.createElement("p");
tokenParagraph.textContent = "Token : Your Token";
tokenParagraph.classList.add("personDetails");

const passwordParagraph = document.createElement("p");
passwordParagraph.textContent = `Password : ${userData.userPassword}`;
passwordParagraph.classList.add("personDetails");

userDataDiv.appendChild(fullNameParagraph);
userDataDiv.appendChild(emailParagraph);
userDataDiv.appendChild(tokenParagraph);
userDataDiv.appendChild(passwordParagraph);

function logoutUser(e) {
  e.preventDefault();
  localStorage.clear();
  window.location.href = "/";
}
logout.addEventListener("click", logoutUser);
