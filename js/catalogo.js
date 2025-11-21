let catalogo = document.querySelector(".catalogo");
let titulo = document.querySelector("#tituloCatalogo");

let params = new URLSearchParams(location.search);
let categoria = params.get("category");

let url = undefined;

if (categoria == null) {
  url = "https://dummyjson.com/products";
} else {
  url = "https://dummyjson.com/products/category/" + categoria;
}

fetch(url)
  .then(function (respuesta) {
    return respuesta.json();
  })
  .then(function (data) {

    let productos;

    if (data.products != undefined) {
      productos = data.products;
    } else {
      productos = data;
    }

    if (categoria == null) {
      titulo.innerText = "Catálogo general";
    } else {
      titulo.innerText = "Categoría: " + categoria;
    }

    for (let i = 0; i < productos.length; i++) {
      let prod = productos[i];

      catalogo.innerHTML += `
                <article>
                    <a href="./producto.html?id=${prod.id}">
                        <img src="${prod.thumbnail}">
                        <p>${prod.title}</p>
                        <p>Precio: $${prod.price}</p>
                    </a>
                </article>
            `;
    }
  })
  .catch(function (error) {
    console.log("Error:", error);
  });
