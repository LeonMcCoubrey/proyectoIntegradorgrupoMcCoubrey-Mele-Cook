let logout = document.querySelector(".saludo");
let loginLink = document.querySelector(".headl");
let registerLink = document.querySelector(".headr");
let saludoLogout = document.querySelector(".saludo");
let saluLogout = document.querySelector(".saludoss");


console.log(logout);




logout.addEventListener("click", function () {
    console.log(logout);

    localStorage.clear();


    loginLink.style.display = "block";
    registerLink.style.display = "block";
    saludoLogout.style.display = "none";
    saluLogout.style.display = "none";

})