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

//profile log in js

let profile = document.getElementById("profile");
let loginBox = document.getElementById("loginBox");
let username = document.getElementById("username");
let usernameHeader = document.getElementById("usernameHeader");
let password = document.getElementById("password");
let passwordHeader = document.getElementById("passwordHeader");
let logInButton = document.getElementById("logInButton");
let close = document.getElementById("close");

profile.addEventListener("click", function (event) {
  loginBox.style.display = "block";
  username.style.display = "block";
  usernameHeader.style.display = "block";
  password.style.display = "block";
  passwordHeader.style.display = "block";
  logInButton.style.display = "block";
  close.style.display = "block";
});

close.addEventListener("click", function (event) {
  loginBox.style.display = "none";
  username.style.display = "none";
  usernameHeader.style.display = "none";
  password.style.display = "none";
  passwordHeader.style.display = "none";
  logInButton.style.display = "none";
  close.style.display = "none";
});
