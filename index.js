var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var text1 = "dice" + randomNumber1 + ".png";
var text2 = "dice" + randomNumber2 + ".png";
// document.querySelector("#dice1").src="images/" + text1;
// document.querySelector("#dice2").src="images/" + text2;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", "images/" + text1);

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", "images/" + text2);

if(randomNumber1 > randomNumber2) {
  document.querySelector("h1").textContent="👍Player 1 Wins";
} else if(randomNumber1 < randomNumber2) {
  document.querySelector("h1").textContent="Player 2 Wins👍";
} else if(randomNumber1 === randomNumber2) {
  document.querySelector("h1").textContent="Draws";
}
