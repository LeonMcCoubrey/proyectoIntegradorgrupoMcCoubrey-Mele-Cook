fetch("https://dummyjson.com/products/categories")
.then(res => res.json())
.then(categorias => {
   let ul = document.querySelector(".ligas");
   ul.innerHTML = "";
   categorias.forEach(cat => {
      ul.innerHTML += `<li><a href="./category.html?cat=${cat}">${cat}</a></li>`;
   });
});








