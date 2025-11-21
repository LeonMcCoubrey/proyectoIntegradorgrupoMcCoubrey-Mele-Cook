let params = new URLSearchParams(window.location.search);
const id = params.get("id");

let contenedor = document.querySelector(".contenedor-producto");

if (!id) {
  contenedor.innerHTML = "<p>Error: no se encontró el producto.</p>";
}

fetch("https://dummyjson.com/products/${id}")
  .then(res => res.json())
  .then(producto => {

    contenedor.innerHTML = `
      <h2>${producto.title}</h2>

      <img src="${producto.thumbnail}" alt="${producto.title}" class="img-producto">

      <p><strong>Precio:</strong> $${producto.price}</p>
      <p><strong>Stock disponible:</strong> ${producto.stock}</p>
      <p><strong>Marca:</strong> ${producto.brand}</p>
      <p><strong>Categoría:</strong> ${producto.category}</p>
      
      <h3>Descripción</h3>
      <p>${producto.description}</p>

      <button onclick="history.back()"> Volver</button>
    `;
  })
  .catch(error => {
    console.log("Error al cargar el producto:", error);
    contenedor.innerHTML = "<p>Error al cargar la información del producto.</p>";
  });
