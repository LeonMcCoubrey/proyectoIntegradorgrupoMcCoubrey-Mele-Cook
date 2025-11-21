let catalogo = document.querySelector(".catalogo");
let titulo = document.querySelector("#tituloCatalogo");

let params = new URLSearchParams(location.search);
let categoria = params.get("category");

let url = categoria
    ? `https://dummyjson.com/products/category/${categoria}`
    : "https://dummyjson.com/products?";

fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(function(data)  {

    let productos = data.products || data;

    titulo.innerText = categoria 
        ? `Categoría: ${categoria}` 
        : "Catálogo general";

    productos.forEach(function(prod) {
      catalogo.innerHTML += `
        <article>
          <a href="./producto.html?id=${prod.id}">
            <img src="${prod.thumbnail}">
            <p>${prod.title}</p>
            <p>Precio: $${prod.price}</p>
          </a>
        </article>
      `;
    });

  })
  .catch(function (error) {
      console.log("Error:", error);
    });