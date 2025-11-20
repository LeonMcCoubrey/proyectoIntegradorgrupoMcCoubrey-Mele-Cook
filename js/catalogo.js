let catalogo = document.querySelector(".catalogo");

fetch("https://dummyjson.com/products?limit=10")
  .then(res => res.json())
  .then(data => {

    let productos = data.products;

    productos.forEach((p, i) => {

      catalogo.innerHTML += `
        <article class="caja${i+1}">
          <a href="./producto.html?id=${p.id}">
            <img src="${p.thumbnail}" alt="${p.title}">
            <p>Precio: $${p.price}</p>
            <p>${p.stock} en stock</p>
          </a> 
          <span class="ver-detalle">Ver detalle</span>
        Ver detalle
          </a>
        </article>
      `;
    });

  })
  .catch(error => {
    console.log("Hubo un error al cargar los productos:", error);
  });