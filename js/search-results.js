
let query = location.search
let queryObj = new URLSearchParams (query)
let busqueda = queryObj.get("query")
let final = document.querySelector(".contenidoindex")

fetch(`https://dummyjson.com/products/search?q=${busqueda}`)

.then(function (response) {
    return response.json();
})

.then(function (data){
    console.log(data);
     let contenidos = '';

        for(let i = 0; i < data.products.length; i++) {
            contenidos += `
             <article>
                    <div class='product-details-info'>
                    <div class='imagen14'>
                    <img class=derechos1205 src='${data.products[i].thumbnail}' alt=""> 
                    </div>

                    <p class="texto1234">${data.products[i].title}</p>
                    <p class="texto1234"> $${data.products[i].price}</p>
                     <p class="texto1234"> ${data.products[i].description}</p>
                     <p>  .         </p>
                    <a class="texto1234" href="./producto.html?id=${data.products[i].id}">VER DETALLES</a>

                    </article>
            `
            final.innerHTML = contenidos;
        }
})