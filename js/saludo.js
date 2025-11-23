let email = localStorage.getItem("email");

let login = document.querySelector(".headl");
let register = document.querySelector(".register");
let saludo = document.querySelector(".saludo");
let salu = document.querySelector(".saludoss");


console.log(salu)

if (email) {
    login.style.display = "none";
    register.style.display = "none";
    saludo.style.display = "block";
    salu.style.display = "block";
    salu.innerText = `Hola, ${email}`;
}