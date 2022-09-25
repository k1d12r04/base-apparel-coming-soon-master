const regex =
  "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])";

const email = document.querySelector("#email");
const formBtn = document.querySelector(".info__main__form__btn");
const errorSvg = document.querySelector(".error-svg");
const errorMsg = document.querySelector(".error-message");

const form = document.querySelector(".info__main__form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

formBtn.addEventListener("click", () => {
  if (email.value.match(regex)) {
    email.classList.add("success-border");
    email.classList.remove("error-border");
    errorSvg.style.visibility = "hidden";
    errorMsg.style.visibility = "hidden";
  } else {
    email.classList.add("error-border");
    email.classList.remove("success-border");
    errorSvg.style.visibility = "visible";
    errorMsg.style.visibility = "visible";
  }
});
