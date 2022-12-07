//session storage save function
function saveToSessionStorage() {
  sessionStorage.loggedIn = loggedIn;
}

// Read from Session Storage fucntion
function readFromSessionStorage() {
  loggedIn = sessionStorage.loggedIn === "true";
}

//check earlier progress and load from session storage
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

let arrowLeft = document.getElementById("arrowLeft");
let arrowRight = document.getElementById("arrowRight");
let game1 = document.getElementById("game1");
let game2 = document.getElementById("game2");
let game3 = document.getElementById("game3");
let game4 = document.getElementById("game4");
let game5 = document.getElementById("game5");

let scrollState = 1;

arrowRight.addEventListener("click", function () {
  if (scrollState === 1) {
    game2.src = "pictures/game1.jpg";
    game3.src = "pictures/game2.jpg";
    game4.src = "pictures/game3.jpg";
    game5.src = "pictures/game4.png";
    game1.src = "pictures/game5.jpg";

    scrollState = 2;
  } else if (scrollState === 2) {
    game3.src = "pictures/game1.jpg";
    game4.src = "pictures/game2.jpg";
    game5.src = "pictures/game3.jpg";
    game1.src = "pictures/game4.png";
    game2.src = "pictures/game5.jpg";

    scrollState = 3;
  } else if (scrollState === 3) {
    game4.src = "pictures/game1.jpg";
    game5.src = "pictures/game2.jpg";
    game1.src = "pictures/game3.jpg";
    game2.src = "pictures/game4.png";
    game3.src = "pictures/game5.jpg";

    scrollState = 4;
  } else if (scrollState === 4) {
    game5.src = "pictures/game1.jpg";
    game1.src = "pictures/game2.jpg";
    game2.src = "pictures/game3.jpg";
    game3.src = "pictures/game4.png";
    game4.src = "pictures/game5.jpg";

    scrollState = 5;
  } else if (scrollState === 5) {
    game1.src = "pictures/game1.jpg";
    game2.src = "pictures/game2.jpg";
    game3.src = "pictures/game3.jpg";
    game4.src = "pictures/game4.png";
    game5.src = "pictures/game5.jpg";

    scrollState = 1;
  }
});

arrowLeft.addEventListener("click", function () {
  if (scrollState === 1) {
    game5.src = "pictures/game1.jpg";
    game1.src = "pictures/game2.jpg";
    game2.src = "pictures/game3.jpg";
    game3.src = "pictures/game4.png";
    game4.src = "pictures/game5.jpg";
    scrollState = 5;
  } else if (scrollState === 5) {
    game4.src = "pictures/game1.jpg";
    game5.src = "pictures/game2.jpg";
    game1.src = "pictures/game3.jpg";
    game2.src = "pictures/game4.png";
    game3.src = "pictures/game5.jpg";
    scrollState = 4;
  } else if (scrollState === 4) {
    game3.src = "pictures/game1.jpg";
    game4.src = "pictures/game2.jpg";
    game5.src = "pictures/game3.jpg";
    game1.src = "pictures/game4.png";
    game2.src = "pictures/game5.jpg";
    scrollState = 3;
  } else if (scrollState === 3) {
    game2.src = "pictures/game1.jpg";
    game3.src = "pictures/game2.jpg";
    game4.src = "pictures/game3.jpg";
    game5.src = "pictures/game4.png";
    game1.src = "pictures/game5.jpg";
    scrollState = 2;
  } else if (scrollState === 2) {
    game1.src = "pictures/game1.jpg";
    game2.src = "pictures/game2.jpg";
    game3.src = "pictures/game3.jpg";
    game4.src = "pictures/game4.png";
    game5.src = "pictures/game5.jpg";
    scrollState = 1;
  }
});

//Hamburger menu JS
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
