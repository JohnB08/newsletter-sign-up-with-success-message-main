//tom for nå.

const subBtn = document.getElementById("subbtn");
const mainPage = document.getElementById("maincontent");
const email = document.getElementById("Emailfield");
const subPage = document.getElementById("submitpage");
const returnBtn = document.getElementById("dismissbtn");
const error = document.getElementById("error");
let emailValid = document.getElementById("emailinput");
subBtn.addEventListener("click", (event) => {
  if (email.value && email.value.includes("@" && ".")) {
    mainPage.style.display = "none";
    subPage.style.display = "grid";
    emailValid.textContent = email.value;
  } else {
    error.style.display = "inline";
    email.style.backgroundColor = "hsla(4, 100%, 67%, 0.5)";
    email.style.borderColor = "hsl(4, 100%, 67%)";
  }
});
returnBtn.addEventListener("click", (event) => {
  subPage.style.display = "none";
  mainPage.style.display = "grid";
});
