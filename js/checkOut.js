//session storage save function
function saveToSessionStorage() {
  sessionStorage.gameOwned = gameOwned;
}

let next = document.getElementById("next");
let back = document.getElementById("back");
let myGamesButton = document.getElementById("myGamesButton");
let myGames = document.getElementById("myGames");
let stage = 1;

let circle2 = document.getElementById("circle2");
let circle3 = document.getElementById("circle3");

let line1 = document.getElementById("line1");
let line2 = document.getElementById("line2");

let gamecover = document.getElementById("gamecover");
let text18 = document.getElementById("text18");
let checkbox18 = document.getElementById("checkbox18");

let done = document.getElementById("done");

let paymentCards = document.getElementById("paymentCards");
let cardNumber = document.getElementById("cardNumber");
let expire = document.getElementById("expire");
let cardCode = document.getElementById("cardCode");
let agree = document.getElementById("agree");

let cardNumberHeader = document.getElementById("cardNumberHeader");
let expireHeader = document.getElementById("expireHeader");
let cardCodeHeader = document.getElementById("cardCodeHeader");
let agreeText = document.getElementById("agreeText");

let agreeCheck = false;
let eighteen = false;
let gameOwned;

// Only shows next when you check you are 18+
checkbox18.addEventListener("click", function (event) {
  if (eighteen === false) {
    next.style.display = "block";
    eighteen = true;
  } else if (eighteen === true) {
    next.style.display = "none";
    eighteen = false;
  }
});

// Only shows next when you check you agree to our terms
agree.addEventListener("click", function (event) {
  if (agreeCheck === false) {
    next.style.display = "block";
    agreeCheck = true;
  } else if (agreeCheck === true) {
    next.style.display = "none";
    agreeCheck = false;
  }
});

//Next button
next.addEventListener("click", function (event) {
  if (stage === 1) {
    back.style.display = "block";
    line1.style.backgroundColor = "#396b43";
    circle2.style.backgroundColor = "#396b43";
    gamecover.style.display = "none";
    checkbox18.style.display = "none";
    text18.style.display = "none";
    next.style.display = "none";

    paymentCards.style.display = "block";
    cardNumber.style.display = "block";
    expire.style.display = "block";
    cardCode.style.display = "block";
    agree.style.display = "block";
    cardNumberHeader.style.display = "block";
    expireHeader.style.display = "block";
    cardCodeHeader.style.display = "block";
    agreeText.style.display = "block";

    stage = 2;
  } else if (stage === 2) {
    line2.style.backgroundColor = "#396b43";
    circle3.style.backgroundColor = "#396b43";

    paymentCards.style.display = "none";
    cardNumber.style.display = "none";
    expire.style.display = "none";
    cardCode.style.display = "none";
    agree.style.display = "none";
    cardNumberHeader.style.display = "none";
    expireHeader.style.display = "none";
    cardCodeHeader.style.display = "none";
    agreeText.style.display = "none";

    back.style.display = "none";
    next.style.display = "none";
    done.style.display = "block";
    myGamesButton.style.display = "block";
    myGames.style.display = "block";

    stage = 3;

    gameOwned = true;
    saveToSessionStorage();
  }
});

//back button
back.addEventListener("click", function (event) {
  if (stage === 2) {
    back.style.display = "none";
    line1.style.backgroundColor = "#727272";
    circle2.style.backgroundColor = "#727272";
    gamecover.style.display = "block";
    checkbox18.style.display = "block";
    text18.style.display = "block";

    paymentCards.style.display = "none";
    cardNumber.style.display = "none";
    expire.style.display = "none";
    cardCode.style.display = "none";
    agree.style.display = "none";
    cardNumberHeader.style.display = "none";
    expireHeader.style.display = "none";
    cardCodeHeader.style.display = "none";
    agreeText.style.display = "none";

    stage = 1;
  }
  if (stage === 3) {
    line2.style.backgroundColor = "#727272";
    circle3.style.backgroundColor = "#727272";

    done.style.display = "none";

    stage = 2;
  }
});

// No code is copied straight from internet,
// but a lot of the code is made with help to understand
// logics and find the right "commands" from lecture slides,
// lecture videos and also from W3Schools.com
