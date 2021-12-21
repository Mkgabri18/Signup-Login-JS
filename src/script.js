const FORM = document.getElementsByTagName("form")[0];
const FORM_BOX = document.querySelector("img.form-box__image");
const TITLE = document.querySelector(".form-box__title");

const LOGIN = document.getElementById("login").content;
const SIGNUP = document.getElementById("signup").content;
const RECOVERY = document.getElementById("recovery").content;

// ROUTING FUNCTION
const loginLoad = () => {
  FORM_BOX.classList.remove("hidden"); // show avatar
  TITLE.innerHTML = "Login";
  FORM.innerHTML = "";
  const clone = LOGIN.cloneNode(true);
  FORM.appendChild(clone);
};

const signupLoad = () => {
  FORM_BOX.classList.add("hidden"); // hidden avatar for signup
  TITLE.innerHTML = "Signup";
  FORM.innerHTML = "";
  const clone = SIGNUP.cloneNode(true);
  FORM.appendChild(clone);
};

const recoveryLoad = () => {
  TITLE.innerHTML = "Recovery";
  FORM.innerHTML = "";
  const clone = RECOVERY.cloneNode(true);
  FORM.appendChild(clone);
};

function iframeResize() {
  let heightIfr = document.body.offsetHeight;
  let sendMessage = "height:" + heightIfr
  console.log("height: ", heightIfr);
  parent.postMessage(heightIfr , 'http://localhost:3000/');
}

// CLEAN INPUT FIELDS
document.addEventListener("submit", () => {
  const inputFields = document.querySelectorAll("input");
  inputFields.forEach((item) => {
    console.log(item);
    item.value = item.type === "submit" ? item.value : "";
  });
});

// INIT
document.addEventListener("DOMContentLoaded", () => {
  loginLoad();

  setTimeout(iframeResize, 200);
});
