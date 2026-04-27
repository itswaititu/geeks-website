const header = document.querySelector("header");
header.style.backgroundColor = "blue";

const h1 = document.querySelector("h1");
const headerParagraph = document.querySelector("#headerp");

const submitButton = document.querySelector("#submitbutton");
let fullName;
let email;
let message;
submitButton.addEventListener("click", (event) => {
  // prevent from from refreshing page
  event.preventDefault();
  fullName = document.querySelector("#fullname").value;
  email = document.querySelector("#email").value;
  message = document.querySelector("#message").value;

  h1.textContent = fullName;
  headerParagraph.textContent = message;
});
