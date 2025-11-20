let contenedor = document.querySelector(".producto-real");
let params = new URLSearchParams(location.search);
let id = params.get("id");


fetch(`https://dummyjson.com/products/${id}`)
  .then(res => res.json())
  .then(data => {

  
    let tagsHTML = "";
    for (let i = 0; i < data.tags.length; i++) {
      tagsHTML += "<li>" + data.tags[i] + "</li>";
    }

   
let reviewsHTML = "";
 for (let i = 0; i < data.reviews.length; i++) {
  let r = data.reviews[i];

      reviewsHTML +=
        "<div class='review'>" +
        "<p><strong>" + r.reviewerName + "</strong></p>" +
        "<p>Rating: " + r.rating + "/5</p>" +
        "<p>" + r.comment + "</p>" +
        "<p><em>" + r.date + "</em></p>" +
        "<hr>" +
        "</div>";
    }


 contenedor.innerHTML = `
      <article class="producto-box">
        <h1>${data.title}</h1>
     <h3>${data.brand}</h3>

     <img class="producto-img" src="${data.thumbnail}" alt="${data.title}">

     <p><strong>Precio:</strong> $${data.price}</p>
     <p><strong>Stock:</strong> ${data.stock} unidades</p>
         <p><strong>Categoría:</strong> ${data.category}</p>

 <h3>Tags:</h3>
 <ul>${tagsHTML}</ul>
 <h3>Reviews:</h3>
        <div>${reviewsHTML}</div>
      </article>
    `;
  })
  .catch(err => {
    contenedor.innerHTML = "<h2>Error al cargar el producto</h2>";
    console.log(err);
  });