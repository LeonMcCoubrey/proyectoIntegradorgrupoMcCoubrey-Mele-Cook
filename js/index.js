document.addEventListener("DOMContentLoaded", function () {

  let lista1 = document.querySelector(".contenedortop");

  fetch("https://dummyjson.com/products/category/sports-accessories")
    .then(function(res) { return res.json(); })
    .then(function(data) {
      let productos = data.products;
      for (let i = 0; i < 10; i++) {
        lista1.innerHTML += `
          <article>
            <img src="${productos[i].thumbnail}">
            <p>${productos[i].title}</p>
            <p>${productos[i].description}</p>
            <p>$${productos[i].price}</p>
            <a href="./producto.html?id=${productos[i].id}">Ver detalle</a>
          </article>
        `;
      }
    });

  let lista2 = document.querySelector(".contenedoraleatorio");

  fetch("https://dummyjson.com/products/category/smartphones")
    .then(function(res) { return res.json(); })
    .then(function(data) {
      let productos = data.products;
      for (let i = 0; i < 10; i++) {
        lista2.innerHTML += `
          <article>
            <img src="${productos[i].thumbnail}">
            <p>${productos[i].title}</p>
            <p>${productos[i].description}</p>
            <p>$${productos[i].price}</p>
            <a href="./producto.html?id=${productos[i].id}">Ver detalle</a>
          </article>
        `;
      }
    });

});

let categorias = document.querySelector(".contenidoindex");

fetch("https://dummyjson.com/products/category-list")
  .then(res => res.json())
  .then(data => {
    data.forEach(cat => {
      categorias.innerHTML += `
        <li class="category">
          <a href="./catalogo.html?category=${cat}">
            ${cat}
          </a>
        </li>
      `;
    });
  })
  .catch(err => console.log("Error cargando categorías:", err));

