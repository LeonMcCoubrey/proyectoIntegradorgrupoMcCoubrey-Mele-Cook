document.addEventListener("DOMContentLoaded", function () {


  let listaCategorias = document.querySelector(".ligas");

  fetch("https://dummyjson.com/products/category-list")
    .then(function (res) {
      return res.json();
    })
    .then(function (categorias) {

      listaCategorias.innerHTML = "";

      for (let i = 0; i < categorias.length; i++) {
        let cat = categorias[i];

        listaCategorias.innerHTML += `
          <li class="category">
            <a href="./catalogo.html?category=${cat}">
              ${cat}
            </a>
          </li>
        `;
      }
    })
    .catch(function (error) {
      console.log("Error cargando categorías:", error);
    });


  let lista1 = document.querySelector(".contenedortop");

  fetch("https://dummyjson.com/products/category/sports-accessories")
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      let productos = data.products;

      for (let i = 0; i < 10 && i < productos.length; i++) {
        lista1.innerHTML += `
          <article class="articulotop">
            <img src="${productos[i].thumbnail}">
            <p>${productos[i].title}</p>
            <p>${productos[i].description}</p>
            <p>$${productos[i].price}</p>
            <a href="./producto.html?id=${productos[i].id}">Ver detalle</a>
          </article>
        `;
      }
    })
    .catch(function (error) {
      console.log("Error:", error);
    });

  let lista2 = document.querySelector(".contenedoraleatorio");

  fetch("https://dummyjson.com/products/category/smartphones")
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      let productos = data.products;

      for (let i = 0; i < 10 && i < productos.length; i++) {
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
    })
    .catch(function (error) {
      console.log("Error:", error);
    });

});




