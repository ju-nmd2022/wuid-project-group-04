let buynow = document.getElementById("buynow");
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
    logInBuy.style.display = "block";
  }
});
