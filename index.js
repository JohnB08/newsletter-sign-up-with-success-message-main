//tom for nå.

const subBtn = document.getElementById("subbtn");
const mainPage = document.getElementById("maincontent");
const email = document.getElementById("Emailfield");
const subPage = document.getElementById("submitpage");
const returnBtn = document.getElementById("dismissbtn");
subBtn.addEventListener("click", (event) => {
  if (email.value) {
    mainPage.style.display = "none";
    subPage.style.display = "grid";
  }
});
returnBtn.addEventListener("click", (event) => {
  subPage.style.display = "none";
  mainPage.style.display = "grid";
});
