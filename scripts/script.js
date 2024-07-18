function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function renderError() {
  let errorMessage = document.createElement("p");

  errorMessage.className = "error";
  errorMessage.innerText = "Please provide a valid email address";
  errorMessage.style.visibility = "hidden";

  document.getElementById("subscription").appendChild(errorMessage);
}

function checkEmail() {
  let emailInput = document.getElementById("email").value;
  let errorMessage = document.querySelector(".error");

  if (!validateEmail(emailInput)) {
    errorMessage.style.visibility = "visible"; // Mostrar mensaje de error
  } else {
    errorMessage.style.visibility = "hidden"; // Ocultar mensaje de error
  }
}

document.addEventListener("DOMContentLoaded", function () {
  renderError();

  // Añadir evento al botón de verificación de email (asumiendo que hay un botón con id "checkEmailBtn")
  document.getElementById("submit").addEventListener("click", checkEmail);
});

