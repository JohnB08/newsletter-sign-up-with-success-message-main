//tom for nå.

const subBtn = document.getElementById("subbtn");
const mainPage = document.getElementById("maincontent");
const email = document.getElementById("Emailfield");
const subPage = document.getElementById("submitpage");
const returnBtn = document.getElementById("dismissbtn");
const error = document.getElementById("error");
let emailValid = document.getElementById("emailinput");
/* I still don't know any better ways to fetch elements from my HTML
like fetching the css sheet and styling that instead of inline css. */
subBtn.addEventListener("click", (event) => {
  if (email.value && email.value.includes("@" && ".")) {
    //This worked quite nicely. Probably not an ideal way to validate emails.
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
