
let form = document.querySelector(".logeo");

if (form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    let emailInput = form.querySelector("#Email");
    let passwordInput = form.querySelector("#Password");
    let email = emailInput.value;
    let password = passwordInput.value;

    if (email === "") {
      alert("No se ingreso ningun email.");
      return;
    }

    if (password === "") {
      alert("No se ingreso ninguna contraseña.");
      return;
    }

    if (password.length < 6) {
      alert("La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    form.action = "./index.html";
    form.submit();
  });
}