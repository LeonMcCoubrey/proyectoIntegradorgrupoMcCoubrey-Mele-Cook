
let form = document.querySelector(".registrar");

if (form) {
  form.addEventListener("submit", function (event) {

    event.preventDefault();
    let emailInput = form.querySelector("#email");
    let passwordInput = form.querySelector("#contraseña");
    let repeatPasswordInput = form.querySelector("#repetircontraseña");
    let terminosInput = form.Terminos; 
    let email = emailInput.value;
    let password = passwordInput.value;
    let repeatPassword = repeatPasswordInput.value;

    if (email === "") {
      alert("Ingresá un email, por favor.");
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

    if (repeatPassword === "") {
      alert("escribi la contraseña nuevamente.");
      return;
    }

    if (password !== repeatPassword) {
      alert("tiene que coincidir con la contraseña.");
      return;
    }

    if (terminos === false) {
      alert("no se han aceptado los terminos y condiciones.");
      return;
    }
    
    form.action = "./login.html";
    form.submit();
  });
}

let cont = document.querySelector(".producto");

let params = new URLSearchParams(location.search);
let id = params.get("id");

fetch(`https://dummyjson.com/products/${id}`)
  .then(res => res.json())
  .then(prod => {

    cont.innerHTML = `
      <div class="producto-box">
        <img class="producto-img" src="${prod.thumbnail}">
        <h1>${prod.title}</h1>
        <h3>$${prod.price}</h3>
        <p>${prod.description}</p>
      </div>
    `;
  })
  .catch(err => console.log("Error cargando producto:", err));

