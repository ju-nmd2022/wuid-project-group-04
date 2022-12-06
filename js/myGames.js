//Hamburger menu js

const hamburgerMenu = document.getElementById("hamburger-menu");
const menuIcon = document.getElementById("menuicon");
const aboutUs = document.getElementById("about-menu");
const community = document.getElementById("community-menu");
const store = document.getElementById("store-menu");
const myGames = document.getElementById("myGames-menu");

menuIcon.addEventListener("click", function (event) {
  hamburgerMenu.style.display = "block";
});
