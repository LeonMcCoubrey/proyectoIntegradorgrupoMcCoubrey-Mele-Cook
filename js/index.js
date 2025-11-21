<<<<<<< HEAD
fetch("https://dummyjson.com/products/categories")
.then(res => res.json())
.then(categorias => {
   let ul = document.querySelector(".ligas");
   ul.innerHTML = "";
   categorias.forEach(cat => {
      ul.innerHTML += `<li><a href="./category.html?cat=${cat}">${cat}</a></li>`;
   });
});








=======
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
>>>>>>> bf5c79b94620fabbef0eeb218bf63d9d8da7b4c5
