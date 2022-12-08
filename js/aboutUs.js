//session storage save function
function saveToSessionStorage() {
  sessionStorage.loggedIn = loggedIn;
}

// Read from Session Storage fucntion
function readFromSessionStorage() {
  loggedIn = sessionStorage.loggedIn === "true";
}

//check earlier progress and load from session storafe
window.addEventListener("load", function () {
  readFromSessionStorage();

  if (loggedIn === true) {
    loginBox.style.display = "none";
    username.style.display = "none";
    usernameHeader.style.display = "none";
    password.style.display = "none";
    passwordHeader.style.display = "none";
    logInButton.style.display = "none";
    close.style.display = "none";
    logInButtonTop.style.display = "none";
    profile.style.display = "block";
  }
});

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
let logInButtonTop = document.getElementById("logInButtonTop");
let loginBox = document.getElementById("loginBox");
let username = document.getElementById("username");
let usernameHeader = document.getElementById("usernameHeader");
let password = document.getElementById("password");
let passwordHeader = document.getElementById("passwordHeader");
let logInButton = document.getElementById("logInButton");
let close = document.getElementById("close");
let create = document.getElementById("create");

//opens the log in window if you clicck right top corner
logInButtonTop.addEventListener("click", function (event) {
  loginBox.style.display = "block";
  username.style.display = "block";
  usernameHeader.style.display = "block";
  password.style.display = "block";
  passwordHeader.style.display = "block";
  logInButton.style.display = "block";
  close.style.display = "block";
  create.style.display = "block";
});

//closes the log in window
close.addEventListener("click", function (event) {
  loginBox.style.display = "none";
  username.style.display = "none";
  usernameHeader.style.display = "none";
  password.style.display = "none";
  passwordHeader.style.display = "none";
  logInButton.style.display = "none";
  close.style.display = "none";
  create.style.display = "none";
});

//log u in
logInButton.addEventListener("click", function (event) {
  loginBox.style.display = "none";
  username.style.display = "none";
  usernameHeader.style.display = "none";
  password.style.display = "none";
  passwordHeader.style.display = "none";
  logInButton.style.display = "none";
  close.style.display = "none";
  logInButtonTop.style.display = "none";
  profile.style.display = "block";
  create.style.display = "none";

  //save that you are logged in in s. storage
  loggedIn = true;
  saveToSessionStorage();
});

// No code is copied straight from internet,
// but a lot of the code is made with help to understand
// logics and find the right "commands" from lecture slides,
// lecture videos and also from W3Schools.com
