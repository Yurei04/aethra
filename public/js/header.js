/* ===============================
HEADER LOAD
================================ */

fetch("header.html")
.then(res => res.text())
.then(data => {

document.getElementById("header").innerHTML = data

loadProfileCircle?.()
loadAuthMenu?.()

})

/* ===============================
active page highlight
================================ */

document.addEventListener("DOMContentLoaded", function () {

const links = document.querySelectorAll(".nav-link");
const currentPage = window.location.pathname.split("/").pop();

links.forEach(link => {
const linkPage = link.getAttribute("href");

if(linkPage === currentPage){
link.classList.add("active");
}
});

});

