
var randomNumber1;
randomNumber1 = Math.random();
randomNumber1 = randomNumber1 * 6;
randomNumber1 = Math.floor(randomNumber1) + 1;
console.log(randomNumber1);

function cambiarImagenes() {
  let img1 = (document.getElementsByTagName("img")[0].src = "images/dice1.png");
  let img11 = (document.getElementsByTagName("img")[(0, 1)].src =
    "images/dice1.png");
  let img2 = (document.getElementsByTagName("img")[0].src = "images/dice2.png");
  let img22 = (document.getElementsByTagName("img")[(0, 1)].src =
    "images/dice2.png");
  let img3 = (document.getElementsByTagName("img")[0].src = "images/dice3.png");
  let img33 = (document.getElementsByTagName("img")[(0, 1)].src =
    "images/dice3.png");
  let img4 = (document.getElementsByTagName("img")[0].src = "images/dice4.png");
  let img44 = (document.getElementsByTagName("img")[(0, 1)].src =
    "images/dice4.png");
  let img5 = (document.getElementsByTagName("img")[0].src = "images/dice5.png");
  let img55 = (document.getElementsByTagName("img")[(0, 1)].src =
    "images/dice5.png");
  let img6 = (document.getElementsByTagName("img")[0].src = "images/dice6.png");
  let img66 = (document.getElementsByTagName("img")[(0, 1)].src =
    "images/dice6.png");

  if (randomNumber1 === 1) {
    img1 = document.getElementsByTagName("img")[0].src = "images/dice6.png";
    img11 = document.getElementsByTagName("img")[(0, 1)].src =
      "images/dice3.png";
    if (img1 > img11) {
      var text = document.querySelector("h1");
      text.innerHTML = "Player 1 wins!!!";
    } else if (img1 < img11) {
      var text = document.querySelector("h1");
      text.innerHTML = "Player 2 wins!!!";
    }
    if (img1 === img11) {
      var text = document.querySelector("h1");
      text.innerHTML = "Draw!!!";
    }
  }
  if (randomNumber1 === 2) {
    img2 = document.getElementsByTagName("img")[0].src = "images/dice3.png";
    img22 = document.getElementsByTagName("img")[(0, 1)].src =
      "images/dice1.png";
      if (img2 > img22) {
        var text = document.querySelector("h1");
        text.innerHTML = "Player 1 wins!!!";
      } else if (img2 < img22) {
        var text = document.querySelector("h1");
        text.innerHTML = "Player 2 wins!!!";
      }
      if (img2 === img22) {
        var text = document.querySelector("h1");
        text.innerHTML = "Draw!!!";
      }
  }
  if (randomNumber1 === 3) {
    img3 = document.getElementsByTagName("img")[0].src = "images/dice1.png";
    img33 = document.getElementsByTagName("img")[(0, 1)].src =
      "images/dice5.png";
      if (img3 > img33) {
        var text = document.querySelector("h1");
        text.innerHTML = "Player 1 wins!!!";
      } else if (img3 < img33) {
        var text = document.querySelector("h1");
        text.innerHTML = "Player 2 wins!!!";
      }
      if (img3 === img33) {
        var text = document.querySelector("h1");
        text.innerHTML = "Draw!!!";
      }
  }
  if (randomNumber1 === 4) {
    img4 = document.getElementsByTagName("img")[0].src = "images/dice5.png";
    img44 = document.getElementsByTagName("img")[(0, 1)].src =
      "images/dice2.png";
      if (img4 > img44) {
        var text = document.querySelector("h1");
        text.innerHTML = "Player 1 wins!!!";
      } else if (img4 < img44) {
        var text = document.querySelector("h1");
        text.innerHTML = "Player 2 wins!!!";
      }
      if (img4 === img44) {
        var text = document.querySelector("h1");
        text.innerHTML = "Draw!!!";
      }
  }
  if (randomNumber1 === 5) {
    img5 = document.getElementsByTagName("img")[0].src = "images/dice2.png";
    img55 = document.getElementsByTagName("img")[(0, 1)].src =
      "images/dice6.png";
      if (img5 > img55) {
        var text = document.querySelector("h1");
        text.innerHTML = "Player 1 wins!!!";
      } else if (img5 < img55) {
        var text = document.querySelector("h1");
        text.innerHTML = "Player 2 wins!!!";
      }
      if (img5 === img55) {
        var text = document.querySelector("h1");
        text.innerHTML = "Draw!!!";
      }
  }
  if (randomNumber1 === 6) {
    img6 = document.getElementsByTagName("img")[0].src = "images/dice1.png";
    img66 = document.getElementsByTagName("img")[(0, 1)].src =
      "images/dice4.png";
      if (img6 > img66) {
        var text = document.querySelector("h1");
        text.innerHTML = "Player 1 wins!!!";
      } else if (img6 < img66) {
        var text = document.querySelector("h1");
        text.innerHTML = "Player 2 wins!!!";
      }
      if (img6 === img66) {
        var text = document.querySelector("h1");
        text.innerHTML = "Draw!!!";
      }
  }
}
cambiarImagenes();
