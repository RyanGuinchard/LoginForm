document.addEventListener("DOMContentLoaded", function () {
  const switchInput = document.querySelector(".switch input");
  const loginForm = document.getElementById("login-form");
  const signupForm = document.getElementById("signup-form");

  //Initalize hiding the signup form
  signupForm.style.display = "none";

  // Add event listener for switch input
  switchInput.addEventListener("change", function () {
    if (switchInput.checked) {
      loginForm.style.display = "none";
      signupForm.style.display = "block";
    } else {
      loginForm.style.display = "block";
      signupForm.style.display = "none";
    }
  });
});
