let catalogo = document.querySelector(".catalogo");

fetch("https://dummyjson.com/products/")
  .then(res => res.json())
  .then(data => {

    let productos = data.products || data;

    productos.forEach((producto, i) => {

    productos.forEach(prod => {
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
  let categorias = document.querySelector(".contenidoindex")
fetch(('https://dummyjson.com/products/category-list'))


 .then(function(response) {
   return response.json()
 })


 .then(function(data) {


   for (let i = 0; i < data.length; i++) {
       let categoria = data[i];
       if (categoria){
           categorias.innerHTML += `
               <li class="category">
               <a href="./category.html?category=${categoria}">${categoria}</a>
               </li>`
           console.log("Categorias");
       }
   }
 })
 .catch(function(error) {
   console.log("Error: " + error)
 })