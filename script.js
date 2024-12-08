function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
// script.js
function toggleNav() {
  const sideNav = document.getElementById('side-nav');
  sideNav.classList.toggle('closed');
}
// Charger la navbar
document.addEventListener("DOMContentLoaded", function () {
  fetch("navbar.html")
    .then((response) => response.text())
    .then((data) => {
      document.body.insertAdjacentHTML("afterbegin", data);
    })
    .catch((error) => console.error("Erreur de chargement de la navbar :", error));
});
function loadNavbar() {
  fetch('navbar.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('navbar-container').innerHTML = data;
    })
    .catch(error => {
      console.error('Error loading the navbar:', error);
    });
}

// Charger la navbar dès le chargement de la page
loadNavbar();
