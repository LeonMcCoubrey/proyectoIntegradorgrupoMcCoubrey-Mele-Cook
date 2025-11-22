let categorias = document.querySelector(".contenidoindex");

fetch("https://dummyjson.com/products/category-list")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {

    for (let i = 0; i < data.length; i++) {
      let categoria = data[i];

      if (categoria) {
        categorias.innerHTML += `
          <li class="category">
            <a href="./category.html?category=${categoria}">${categoria}</a>
          </li>`;
      }
    }
  })
  .catch(function (error) {
    console.log("Error: " + error);
  });




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