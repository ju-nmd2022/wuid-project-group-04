let buynow = document.getElementById("buynow");
let buynowLink = document.getElementById("buynowLink");
let logInBuy = document.getElementById("logInBuy");
let loggedIn;

// Read from Session Storage fucntion
function readFromSessionStorage() {
  loggedIn = sessionStorage.loggedIn === "true";
}

//check if you are logged in when you load the window
window.addEventListener("load", function () {
  readFromSessionStorage();

  if (loggedIn === false) {
    buynow.style.display = "none";
    buynowLink.style.display = "none";
    logInBuy.style.display = "block";
  }
});

// No code is copied straight from internet,
// but a lot of the code is made with help to understand
// logics and find the right "commands" from lecture slides,
// lecture videos and also from W3Schools.com
