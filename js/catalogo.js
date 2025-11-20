let catalogo = document.querySelector(".catalogo");

fetch("https://dummyjson.com/products?limit=10")
  .then(res => res.json())
  .then(data => {

    let productos = data.products;

    productos.forEach((producto, i) => {

      catalogo.innerHTML += `
        <article class="caja${i+1}">
          <a href="./producto.html?id=${producto.id}">
            <img src="${producto.thumbnail}" alt="${producto.title}">
            <p>Precio: $${producto.price}</p>
            <p>${producto.stock} en stock</p>
          </a> 
       <span class="ver-detalle">Ver detalle</span>
          </a>
        </article>
      `;
    });

  })
  .catch(error => {
    console.log("Hubo un error al cargar los productos:", error);
  });