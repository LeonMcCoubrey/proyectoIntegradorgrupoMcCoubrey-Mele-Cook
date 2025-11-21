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
