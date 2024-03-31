"use strict";

let container = document.querySelector(".container");
let containerButtons = document.querySelector(".buttons");
let placeCroupier = document.querySelector(".place-croupier");
let placePlayer = document.querySelector(".place-player");
let divTitleCroupier = document.querySelector(".div-title-croupier");
let divTitlePlayer = document.querySelector(".div-title-player");
let deal = document.querySelector(".button");

let totalPlayer = document.createElement("DIV");
totalPlayer.classList.add("div-total-player");

let totalCroupier = document.createElement("DIV");
totalCroupier.classList.add("div-total-croupier");

let player1CardValue = [];
let player2CardValue = [];
let croupierCardValue = [];

function createPlayerCard(i) {
  let randomValue = Math.round(Math.random() * 13 + 1);
  let randomLetter;
  if (randomValue === 2) randomLetter = 2;
  if (randomValue === 3) randomLetter = 3;
  if (randomValue === 4) randomLetter = 4;
  if (randomValue === 5) randomLetter = 5;
  if (randomValue === 6) randomLetter = 6;
  if (randomValue === 7) randomLetter = 7;
  if (randomValue === 8) randomLetter = 8;
  if (randomValue === 9) randomLetter = 9;
  if (randomValue === 10) randomLetter = 10;
  if (randomValue === 11) {
    randomLetter = "J";
    randomValue = 10;
  }
  if (randomValue === 12) {
    randomLetter = "Q";
    randomValue = 10;
  }
  if (randomValue === 13) {
    randomLetter = "K";
    randomValue = 10;
  }
  if (randomValue === 1) {
    randomLetter = "A";
    randomValue = 1;
  }
  if (randomLetter === undefined) {
    randomLetter = 10;
    randomValue = 10;
  }
  console.log(randomLetter);
  let card = document.createElement("DIV");
  placePlayer.appendChild(card);
  card.classList.add(`card-${i}-player`);
  card.setAttribute("id", "card");
  placePlayer.appendChild(totalPlayer);
  totalPlayer.innerHTML = Number(totalPlayer.innerHTML) + randomValue;
  card.innerHTML = randomLetter;
  player1CardValue.push(randomValue);
  return randomValue;
}

function createCroupierCard(i) {
  let randomValue = Math.round(Math.random() * 13 + 1);
  let randomLetter;
  if (randomValue === 2) randomLetter = 2;
  if (randomValue === 3) randomLetter = 3;
  if (randomValue === 4) randomLetter = 4;
  if (randomValue === 5) randomLetter = 5;
  if (randomValue === 6) randomLetter = 6;
  if (randomValue === 7) randomLetter = 7;
  if (randomValue === 8) randomLetter = 8;
  if (randomValue === 9) randomLetter = 9;
  if (randomValue === 10) randomLetter = 10;
  if (randomValue === 11) {
    randomLetter = "J";
    randomValue = 10;
  }
  if (randomValue === 12) {
    randomLetter = "Q";
    randomValue = 10;
  }
  if (randomValue === 13) {
    randomLetter = "K";
    randomValue = 10;
  }
  if (randomValue === 1) {
    randomLetter = "A";
    randomValue = 1;
  }
  if (randomLetter === undefined) {
    randomLetter = 10;
    randomValue = 10;
  }
  console.log(randomLetter);
  let card = document.createElement("DIV");
  placeCroupier.appendChild(card);
  card.classList.add(`card-${i}-croupier`);
  card.setAttribute("id", "card");
  placeCroupier.appendChild(totalCroupier);
  totalCroupier.innerHTML = Number(totalCroupier.innerHTML) + randomValue;
  card.innerHTML = randomLetter;
  croupierCardValue.push(randomValue);
  return randomValue;
}

function styleWin(total) {
  total.style.backgroundColor = "rgb(218, 165, 32)";
  total.style.color = "rgb(49, 49, 49)";
  total.style.fontSize = "14px";
  total.innerHTML = "Win";
}

function styleLose(total) {
  total.style.backgroundColor = "rgb(49, 49, 49)";
  total.style.color = "rgb(255, 255, 255)";
  total.style.fontSize = "14px";
  total.innerHTML = "Lose";
}

function stylePush(total) {
  total.style.backgroundColor = "rgb(20, 132, 223)";
  total.style.color = "rgb(49, 49, 49)";
  total.style.fontSize = "14px";
  total.innerHTML = "Push";
}

function styleBust(total) {
  total.style.backgroundColor = "rgb(49, 49, 49)";
  total.style.color = "rgb(255, 255, 255)";
  total.style.fontSize = "14px";
  total.innerHTML = "Bust";
}

function styleBJ(total) {
  total.style.backgroundColor = "rgb(218, 165, 32)";
  total.style.color = "rgb(49, 49, 49)";
  total.style.fontSize = "14px";
  total.innerHTML = "BJ";
}

const passed = "You passed 21";
const croupier = "Croupier Wins";
const player = "Player Wins";
const draw = "Draw";

function winner(person) {
  setTimeout(() => {
    let winnerBackground = document.createElement("DIV");
    container.appendChild(winnerBackground);
    winnerBackground.classList.add("winner-background-div");
    let winnerDiv = document.createElement("DIV");
    winnerBackground.appendChild(winnerDiv);
    winnerDiv.classList.add("div-winner");
    let winner = document.createElement("H2");
    winnerDiv.appendChild(winner);
    winner.innerHTML = person;
    console.log(person);
    if (person === player) {
      styleWin(totalPlayer);
      winnerDiv.style.backgroundColor = "rgb(49, 49, 49)";
      winnerDiv.style.color = "rgb(218, 165, 32)";
      winnerDiv.style.border = "5px solid rgb(218, 165, 32)";
    } else if (person === croupier) {
      styleLose(totalPlayer);
      winnerDiv.style.backgroundColor = "rgb(49, 49, 49)";
      winnerDiv.style.color = "rgb(255, 255, 255)";
      winnerDiv.style.border = "5px solid rgb(255, 255, 255)";
    } else if (person === draw) {
      stylePush(totalPlayer);
      winnerDiv.style.backgroundColor = "rgb(49, 49, 49)";
      winnerDiv.style.color = "rgb(20, 132, 223)";
      winnerDiv.style.border = "5px solid rgb(20, 132, 223)";
    } else {
      styleBust(totalPlayer);
      winnerDiv.style.backgroundColor = "rgb(49, 49, 49)";
      winnerDiv.style.color = "rgb(255, 255, 255)";
      winnerDiv.style.border = "5px solid rgb(255, 255, 255)";
    }
    let form = document.createElement("FORM");
    winnerDiv.appendChild(form);
    let loop = document.createElement("DIV");
    form.appendChild(loop);
    loop.innerHTML = `<input type="submit" value="Accept" class="form">`;
  }, 800);
}

const croupierSplit = "Croupier wins over";
const playerSplit = "Player wins in";
const drawSplit = "Draw in";
const passedSplit = "You passed 21 in";
const deck1 = "game 1";
const deck2 = "game 2";

function winnerSplit(person1, deck1, person2, deck2) {
  setTimeout(() => {
    let winnerBackground = document.createElement("DIV");
    container.appendChild(winnerBackground);
    winnerBackground.classList.add("winner-background-div");
    let winnerDiv = document.createElement("DIV");
    winnerBackground.appendChild(winnerDiv);
    winnerDiv.classList.add("div-winner");
    let winner = document.createElement("H2");
    winnerDiv.appendChild(winner);
    winner.innerHTML = `${person1} ${deck1} <br> ${person2} ${deck2}`;
    let form = document.createElement("FORM");
    winnerDiv.appendChild(form);
    let loop = document.createElement("DIV");
    form.appendChild(loop);
    loop.innerHTML = `<input type="submit" value="Accept" class="form">`;
  }, 800);
}

const both = "both juegos";

function winnerSplitBoth(person, deck) {
  setTimeout(() => {
    let winnerBackground = document.createElement("DIV");
    container.appendChild(winnerBackground);
    winnerBackground.classList.add("winner-background-div");
    let winnerDiv = document.createElement("DIV");
    winnerBackground.appendChild(winnerDiv);
    winnerDiv.classList.add("div-winner");
    let winner = document.createElement("H2");
    winnerDiv.appendChild(winner);
    winner.innerHTML = `${person} ${deck}`;
    let form = document.createElement("FORM");
    winnerDiv.appendChild(form);
    let loop = document.createElement("DIV");
    form.appendChild(loop);
    loop.innerHTML = `<input type="submit" value="Accept" class="form">`;
  }, 800);
}

function winnerBlackJack(person) {
  setTimeout(() => {
    let winnerBackground = document.createElement("DIV");
    container.appendChild(winnerBackground);
    winnerBackground.classList.add("winner-background-div");
    let winnerDiv = document.createElement("DIV");
    winnerBackground.appendChild(winnerDiv);
    winnerDiv.classList.add("div-winner");
    let winner = document.createElement("H2");
    winnerDiv.appendChild(winner);
    winner.innerHTML = person;
    if (person === player) {
      totalPlayer.style.backgroundColor = "rgb(218, 165, 32)";
      totalPlayer.style.color = "rgb(49, 49, 49)";
      totalPlayer.innerHTML = "BJ";
      winnerDiv.style.backgroundColor = "rgb(49, 49, 49)";
      winnerDiv.style.color = "rgb(218, 165, 32)";
      winnerDiv.style.border = "5px solid rgb(218, 165, 32)";
    }
    let form = document.createElement("FORM");
    winnerDiv.appendChild(form);
    let loop = document.createElement("DIV");
    form.appendChild(loop);
    loop.innerHTML = `<input type="submit" value="Accept" class="form">`;
  }, 800);
}

function ItsAS(receiver, receiverCardValue) {
  if (
    receiverCardValue[0] === 1 ||
    receiverCardValue[1] === 1 ||
    receiverCardValue[2] === 1
  ) {
    receiver.innerHTML = Number(receiver.innerHTML) + 10;
    console.log(receiver.innerHTML);
  }
}

function ASPasses21(receiver, receiverCardValue) {
  if (
    receiverCardValue[0] === 1 ||
    receiverCardValue[1] === 1 ||
    receiverCardValue[2] === 1
  ) {
    console.log(receiver.innerHTML);
    if (receiver.innerHTML > 21) {
      receiver.innerHTML = Number(receiver.innerHTML) - 10;
      console.log(receiver.innerHTML);
      receiverCardValue[0] = 0;
      receiverCardValue[1] = 0;
      receiverCardValue[2] = 0;
    }
  }
}

deal.addEventListener("click", () => {
  container.removeChild(deal);
  // container.removeChild(apuestastart);
  let titlePlayer = document.createElement("H2");
  divTitlePlayer.appendChild(titlePlayer);
  titlePlayer.classList.add("title");
  titlePlayer.innerHTML = "Player";
  let buttons = document.createElement("DIV");
  containerButtons.appendChild(buttons);
  buttons.classList.add("div-buttons");

  function remove(btn1, btn2) {
    buttons.removeChild(btn1);
    buttons.removeChild(btn2);
  }

  function cardsInterval() {
    let croupierCounter = 3;
    createCroupierCard(2);
    ItsAS(totalCroupier, croupierCardValue);
    if (totalCroupier.innerHTML === 21) winner(croupier);
    let int = setInterval(() => {
      while (
        totalCroupier.innerHTML != 17 &&
        totalCroupier.innerHTML != 18 &&
        totalCroupier.innerHTML != 19 &&
        totalCroupier.innerHTML != 20 &&
        totalCroupier.innerHTML != 21 &&
        totalCroupier.innerHTML < 22
      ) {
        createCroupierCard(croupierCounter);
        croupierCounter += 1;
        ASPasses21(totalCroupier, croupierCardValue);
      }
      if (totalCroupier.innerHTML === 21) {
        if (totalPlayer.innerHTML === totalCroupier.innerHTML) {
          winner(draw);
          clearInterval(int);
        } else {
          winner(croupier);
          clearInterval(int);
        }
      }
      if (Number(totalCroupier.innerHTML) > 21) {
        winner(player);
        clearInterval(int);
      } else if (
        Number(totalCroupier.innerHTML) > Number(totalPlayer.innerHTML)
      ) {
        winner(croupier);
        clearInterval(int);
      } else if (
        Number(totalCroupier.innerHTML) < Number(totalPlayer.innerHTML)
      ) {
        winner(player);
        clearInterval(int);
      } else if (
        Number(totalCroupier.innerHTML) === Number(totalPlayer.innerHTML)
      ) {
        winner(draw);
        clearInterval(int);
      }
    }, 1000);
  }

  if (createPlayerCard(1) === createPlayerCard(2)) {
    ItsAS(totalPlayer, player1CardValue);
    buttons.innerHTML = `<input type="button" value="Hit" id="hit"><input type="button" value="Stand" id="stand"><input type="button" value="Split" class="input-split">`;
    let player1AndPlayer2 = document.querySelector(".div-player-and-player2");
    let inputSplit = document.querySelector(".input-split");
    //Split
    inputSplit.addEventListener("click", () => {
      buttons.removeChild(inputSplit);
      buttons.innerHTML = `<input type="button" value="Hit" id="hit" class="input-hit"><input type="button" value="Stand" id="stand" class="input-stand"><input type="button" value="Hit" id="hit" class="input-hit-2-hidden"><input type="button" value="Stand" id="stand" class="input-stand-2-hidden">`;
      let placePlayer2 = document.createElement("DIV");
      player1AndPlayer2.appendChild(placePlayer2);
      placePlayer2.classList.add("place-player2");
      let divTitlePlayer2 = document.createElement("DIV");
      placePlayer2.appendChild(divTitlePlayer2);
      divTitlePlayer2.classList.add("div-Title-Player2");
      let titlePlayer2 = document.createElement("H2");
      divTitlePlayer2.appendChild(titlePlayer2);
      titlePlayer2.classList.add("title");
      titlePlayer.innerHTML = "Player-Game-1";
      titlePlayer2.innerHTML = "Player-Game-2";

      let totalPlayer2 = document.createElement("DIV");
      totalPlayer2.classList.add("div-total-player2");

      function createPlayerCard2(i) {
        let randomValue = Math.round(Math.random() * 13 + 1);
        let randomLetter;
        if (randomValue === 2) randomLetter = 2;
        if (randomValue === 3) randomLetter = 3;
        if (randomValue === 4) randomLetter = 4;
        if (randomValue === 5) randomLetter = 5;
        if (randomValue === 6) randomLetter = 6;
        if (randomValue === 7) randomLetter = 7;
        if (randomValue === 8) randomLetter = 8;
        if (randomValue === 9) randomLetter = 9;
        if (randomValue === 10) randomLetter = 10;
        if (randomValue === 11) {
          randomLetter = "J";
          randomValue = 10;
        }
        if (randomValue === 12) {
          randomLetter = "Q";
          randomValue = 10;
        }
        if (randomValue === 13) {
          randomLetter = "K";
          randomValue = 10;
        }
        if (randomValue === 1) {
          randomLetter = "A";
          randomValue = 1;
        }
        if (randomLetter === undefined) {
          randomLetter = 10;
          randomValue = 10;
        }
        let card = document.createElement("DIV");
        placePlayer2.appendChild(card);
        card.classList.add(`card-${i}-player`);
        card.setAttribute("id", "card");
        placePlayer2.appendChild(totalPlayer2);
        totalPlayer2.innerHTML = Number(totalPlayer2.innerHTML) + randomValue;
        card.innerHTML = randomLetter;
        player2CardValue.push(randomValue);
        return randomValue;
      }

      placePlayer.classList.replace("place-player", "place-player-split");
      buttons.classList.replace("div-buttons", "div-buttons-split");
      let card2 = document.querySelector(".card-2-player");
      let queLetter = card2.innerHTML;
      if (
        card2.innerHTML === "K" ||
        card2.innerHTML === "Q" ||
        card2.innerHTML === "J"
      ) {
        card2.innerHTML = 10;
      }
      if (card2.innerHTML === "A") card2.innerHTML = 1;
      totalPlayer.innerHTML = totalPlayer.innerHTML - card2.innerHTML;

      let card = document.createElement("DIV");
      placePlayer2.appendChild(card);
      card.classList.add(`card-1-player`);
      card.setAttribute("id", "card");
      placePlayer2.appendChild(totalPlayer2);
      card.innerHTML = queLetter;
      if (
        card2.innerHTML === "K" ||
        card2.innerHTML === "Q" ||
        card2.innerHTML === "J"
      ) {
        card2.innerHTML = 10;
      }
      if (card2.innerHTML === "A") card2.innerHTML = 1;
      totalPlayer2.innerHTML = card2.innerHTML;

      let inputHitSplit = document.querySelector(".input-hit");
      let inputHitSplit2 = document.querySelector(".input-hit-2-hidden");
      let inputStandSplit = document.querySelector(".input-stand");
      let inputStandSplit2 = document.querySelector(".input-stand-2-hidden");

      function remplaceClasses() {
        inputHitSplit.classList.replace("input-hit", "input-hit-hidden");
        inputStandSplit.classList.replace("input-stand", "input-stand-hidden");
        inputHitSplit2.classList.replace("input-hit-2-hidden", "input-hit-2");
        inputStandSplit2.classList.replace(
          "input-stand-2-hidden",
          "input-stand-2"
        );
      }

      createPlayerCard2(2);
      card2.remove();
      player2CardValue.unshift(player1CardValue[1]);
      player1CardValue.pop();
      console.log(player2CardValue);
      ItsAS(totalPlayer2, player2CardValue);
      if (Number(totalPlayer2.innerHTML) === 21) {
        styleBJ(totalPlayer2);
        let croupierCounterSplit = 3;
        inputStandSplit.addEventListener("click", () => {
          remove(inputHitSplit, inputStandSplit);
          remove(inputHitSplit2, inputStandSplit2);
          createCroupierCard(2);
          ItsAS(totalCroupier, croupierCardValue);
          if (totalCroupier.innerHTML === 21)
            winnerSplitBoth(croupierSplit, both);
          if (totP === undefined) totP = totalPlayer.innerHTML;
          if (totP2 === undefined) {
            totP2 = totalPlayer2.innerHTML;
            if (totP2 === "BJ") totP2 = 21;
          }
          let intSplit = setInterval(() => {
            while (
              totalCroupier.innerHTML != 17 &&
              totalCroupier.innerHTML != 18 &&
              totalCroupier.innerHTML != 19 &&
              totalCroupier.innerHTML != 20 &&
              totalCroupier.innerHTML != 21 &&
              totalCroupier.innerHTML < 22
            ) {
              createCroupierCard(croupierCounterSplit);
              croupierCounterSplit += 1;
              ASPasses21(totalCroupier, croupierCardValue);
            }
            if (totalCroupier.innerHTML === 21) {
              if (totP === totalCroupier.innerHTML) {
                winner(draw);
                clearInterval(intSplit);
              } else {
                winner(croupier);
                clearInterval(intSplit);
              }
            }
            console.log(totP);
            console.log(totP2);
            if (totP > 21 && totP2 > totalCroupier.innerHTML) {
              console.log(`game 1 is greater than 21 and I win`);
              winnerSplit(passedSplit, deck1, playerSplit, deck2);
              styleWin(totalPlayer2);
              clearInterval(intSplit);
            } else if (
              totalCroupier.innerHTML > 21 &&
              totP <= 21 &&
              totP2 <= 21
            ) {
              console.log(`the croupier is older than 21`);
              winnerSplitBoth(playerSplit, both);
              styleWin(totalPlayer);
              clearInterval(intSplit);
            } else if (
              totalCroupier.innerHTML > totP &&
              totalCroupier.innerHTML < totP2
            ) {
              console.log(`I lose and I win`);
              winnerSplit(croupierSplit, deck1, playerSplit, deck2);
              styleLose(totalPlayer);
              clearInterval(intSplit);
            } else if (
              totalCroupier.innerHTML < totP &&
              totalCroupier.innerHTML < totP2 &&
              totP <= 21 &&
              totP2 <= 21
            ) {
              console.log(`I win and I win`);
              winnerSplitBoth(playerSplit, both);
              styleWin(totalPlayer);
              clearInterval(intSplit);
            } else if (
              totalCroupier.innerHTML === totP &&
              totalCroupier.innerHTML < totP2 &&
              totP <= 21
            ) {
              console.log(`I draw and I win`);
              winnerSplit(drawSplit, deck1, playerSplit, deck2);
              stylePush(totalPlayer);
              styleWin(totalPlayer2);
              clearInterval(intSplit);
            } else {
              clearInterval(intSplit);
              console.log("Error");
            }
          }, 1000);
        });
        //Observe
      } else console.log("its not");

      console.log(player1CardValue);
      createPlayerCard(2);
      if (Number(totalPlayer.innerHTML) === 21) remplaceClasses();
      console.log(player1CardValue);

      // player 1, hit and stand
      let totP;
      let playerSplitCounter = 3;
      inputHitSplit.addEventListener("click", () => {
        createPlayerCard(playerSplitCounter);
        playerSplitCounter += 1;
        ASPasses21(totalPlayer, player1CardValue);
        if (totalPlayer.innerHTML > 21) {
          totP = totalPlayer.innerHTML;
          styleBust(totalPlayer);
          remplaceClasses();
        }
      });

      inputStandSplit.addEventListener("click", remplaceClasses);

      // player 2, hit and stand
      let totP2;
      let playerSplitCounter2 = 3;
      inputHitSplit2.addEventListener("click", () => {
        createPlayerCard2(playerSplitCounter2);
        playerSplitCounter2 += 1;
        ASPasses21(totalPlayer2, player2CardValue);
        if (totP === undefined) totP = totalPlayer.innerHTML;
        if (totP > 21 && totalPlayer2.innerHTML > 21) {
          remove(inputHitSplit2, inputStandSplit2);
          console.log(`both over 21`);
          totP2 = totalPlayer2.innerHTML;
          styleBust(totalPlayer2);
          winnerSplitBoth(passedSplit, both);
        } else if (totalPlayer2.innerHTML > 21) {
          remove(inputHitSplit2, inputStandSplit2);
          totP2 = totalPlayer2.innerHTML;
          styleBust(totalPlayer2);
          createCroupierCard(2);
          ItsAS(totalCroupier, croupierCardValue);
          if (totalCroupier.innerHTML === 21)
            winnerSplitBoth(croupierSplit, both);
          if (totP2 === undefined) totP2 = totalPlayer2.innerHTML;
          let intSplit = setInterval(() => {
            while (
              totalCroupier.innerHTML != 17 &&
              totalCroupier.innerHTML != 18 &&
              totalCroupier.innerHTML != 19 &&
              totalCroupier.innerHTML != 20 &&
              totalCroupier.innerHTML != 21 &&
              totalCroupier.innerHTML < 22
            ) {
              createCroupierCard(croupierCounterSplit);
              croupierCounterSplit += 1;
              ASPasses21(totalCroupier, croupierCardValue);
            }
            if (totalCroupier.innerHTML === 21) {
              if (totP === totalCroupier.innerHTML) {
                winner(draw);
                clearInterval(intSplit);
              } else {
                winner(croupier);
                clearInterval(intSplit);
              }
            }

            if (
              totP > 21 &&
              totP2 < totalCroupier.innerHTML &&
              totalCroupier.innerHTML <= 21
            ) {
              console.log(`game 1 is greater than 21 and I lose`);
              winnerSplit(passedSplit, deck1, croupierSplit, deck2);
              styleLose(totalPlayer2);
              clearInterval(intSplit);
            } else if (totP > 21 && totP2 > totalCroupier.innerHTML) {
              console.log(`game 1 is greater than 21 and I win`);
              winnerSplit(passedSplit, deck1, playerSplit, deck2);
              styleWin(totalPlayer2);
              clearInterval(intSplit);
            } else if (
              totP > 21 &&
              totP2 === totalCroupier.innerHTML &&
              totP2 <= 21
            ) {
              console.log(`game 1 is greater than 21 and I draw`);
              winnerSplit(passedSplit, deck1, drawSplit, deck2);
              stylePush(totalPlayer2);
              clearInterval(intSplit);
            } else if (
              totP2 > 21 &&
              totP < totalCroupier.innerHTML &&
              totalCroupier.innerHTML <= 21
            ) {
              console.log(`game 2 is greater than 21 and I lose`);
              winnerSplit(croupierSplit, deck1, passedSplit, deck2);
              styleLose(totalPlayer);
              clearInterval(intSplit);
            } else if (totP2 > 21 && totP > totalCroupier.innerHTML) {
              console.log(`game 2 is greater than 21 and I win`);
              winnerSplit(playerSplit, deck1, passedSplit, deck2);
              styleWin(totalPlayer);
              clearInterval(intSplit);
            } else if (
              totP2 > 21 &&
              totP === totalCroupier.innerHTML &&
              totP <= 21
            ) {
              console.log(`game 2 is greater than 21 and I draw`);
              winnerSplit(drawSplit, deck1, passedSplit, deck2);
              stylePush(totalPlayer);
              clearInterval(intSplit);
            } else if (
              totP <= 21 &&
              totP2 > 21 &&
              totP > totalCroupier.innerHTML
            ) {
              console.log(`game 2 is greater than 21`);
              winnerSplit(playerSplit, deck1, passedSplit, deck2);
              styleWin(totalPlayer);
              clearInterval(intSplit);
            } else if (
              totalCroupier.innerHTML > 21 &&
              totP <= 21 &&
              totP2 <= 21
            ) {
              console.log(`croupier is greater than 21`);
              winnerSplitBoth(playerSplit, both);
              styleWin(totalPlayer);
              styleWin(totalPlayer2);
              clearInterval(intSplit);
            } else if (
              totalCroupier.innerHTML > totP &&
              totalCroupier.innerHTML > totP2
            ) {
              console.log(`I lose and I lose`);
              winnerSplitBoth(croupierSplit, both);
              styleLose(totalPlayer);
              styleLose(totalPlayer2);
              clearInterval(intSplit);
            } else if (
              totalCroupier.innerHTML > totP &&
              totalCroupier.innerHTML < totP2
            ) {
              console.log(`I lost and I win`);
              winnerSplit(croupierSplit, deck1, playerSplit, deck2);
              styleLose(totalPlayer);
              styleWin(totalPlayer2);
              clearInterval(intSplit);
            } else if (
              totalCroupier.innerHTML > totP &&
              totalCroupier.innerHTML === totP2 &&
              totP2 <= 21
            ) {
              console.log(`I lost and I draw`);
              winnerSplit(croupierSplit, deck1, drawSplit, deck2);
              styleLose(totalPlayer);
              stylePush(totalPlayer2);
              clearInterval(intSplit);
            } else if (
              totalCroupier.innerHTML < totP &&
              totalCroupier.innerHTML < totP2
            ) {
              console.log(`I win and I win`);
              winnerSplitBoth(playerSplit, both);
              styleWin(totalPlayer);
              styleWin(totalPlayer2);
              clearInterval(intSplit);
            } else if (
              totalCroupier.innerHTML < totP &&
              totalCroupier.innerHTML > totP2
            ) {
              console.log(`I win and I lost`);
              winnerSplit(playerSplit, deck1, croupierSplit, deck2);
              styleWin(totalPlayer);
              styleLose(totalPlayer2);
              clearInterval(intSplit);
            } else if (
              totalCroupier.innerHTML < totP &&
              totalCroupier.innerHTML === totP2 &&
              totP2 <= 21
            ) {
              console.log(`I win and I draw`);
              winnerSplit(playerSplit, deck1, drawSplit, deck2);
              styleWin(totalPlayer);
              stylePush(totalPlayer2);
              clearInterval(intSplit);
            } else if (
              totalCroupier.innerHTML === totP &&
              totalCroupier.innerHTML === totP2
            ) {
              console.log(`Idraw and I draw`);
              winnerSplitBoth(drawSplit, both);
              stylePush(totalPlayer);
              stylePush(totalPlayer2);
              clearInterval(intSplit);
            } else if (
              totalCroupier.innerHTML === totP &&
              totalCroupier.innerHTML > totP2 &&
              totP <= 21
            ) {
              console.log(`I draw and I lost`);
              winnerSplit(drawSplit, deck1, croupierSplit, deck2);
              stylePush(totalPlayer);
              styleLose(totalPlayer2);
              clearInterval(intSplit);
            } else if (
              totalCroupier.innerHTML === totP &&
              totalCroupier.innerHTML < totP2 &&
              totP <= 21
            ) {
              console.log(`I draw and I win`);
              winnerSplit(drawSplit, deck1, playerSplit, deck2);
              stylePush(totalPlayer);
              styleWin(totalPlayer2);
              clearInterval(intSplit);
            } else {
              clearInterval(intSplit);
              console.log("Error");
            }
          }, 1000);
        }
      });

      let croupierCounterSplit = 3;
      inputStandSplit2.addEventListener("click", () => {
        remove(inputHitSplit2, inputStandSplit2);
        createCroupierCard(2);
        ItsAS(totalCroupier, croupierCardValue);
        if (totalCroupier.innerHTML === 21)
          winnerSplitBoth(croupierSplit, both);
        if (totP === undefined) totP = totalPlayer.innerHTML;
        if (totP2 === undefined) totP2 = totalPlayer2.innerHTML;
        let intSplit = setInterval(() => {
          while (
            totalCroupier.innerHTML != 17 &&
            totalCroupier.innerHTML != 18 &&
            totalCroupier.innerHTML != 19 &&
            totalCroupier.innerHTML != 20 &&
            totalCroupier.innerHTML != 21 &&
            totalCroupier.innerHTML < 22
          ) {
            createCroupierCard(croupierCounterSplit);
            croupierCounterSplit += 1;
            ASPasses21(totalCroupier, croupierCardValue);
          }
          if (totalCroupier.innerHTML === 21) {
            if (totP === totalCroupier.innerHTML) {
              winner(draw);
              clearInterval(intSplit);
            } else {
              winner(croupier);
              clearInterval(intSplit);
            }
          }
          if (totP > 21 && totP2 > 21) {
            console.log(`both over 21`);
            winnerSplitBoth(passedSplit, both);
            clearInterval(intSplit);
          } else if (
            totP > 21 &&
            totP2 < totalCroupier.innerHTML &&
            totalCroupier.innerHTML <= 21
          ) {
            console.log(`game 1 is greater than 21 and I lose`);
            winnerSplit(passedSplit, deck1, croupierSplit, deck2);
            styleLose(totalPlayer2);
            clearInterval(intSplit);
          } else if (totP > 21 && totP2 > totalCroupier.innerHTML) {
            console.log(`game 1 is greater than 21 and I win`);
            winnerSplit(passedSplit, deck1, playerSplit, deck2);
            styleWin(totalPlayer2);
            clearInterval(intSplit);
          } else if (totP > 21 && totalCroupier.innerHTML > 21) {
            console.log(
              `game 1 is greater than 21 and I win because croupier over than 21`
            );
            winnerSplit(passedSplit, deck1, playerSplit, deck2);
            styleWin(totalPlayer2);
            clearInterval(intSplit);
          } else if (
            totP > 21 &&
            totP2 === totalCroupier.innerHTML &&
            totP2 <= 21
          ) {
            console.log(`game 1 is greater than 21 and I draw`);
            winnerSplit(passedSplit, deck1, drawSplit, deck2);
            stylePush(totalPlayer2);
            clearInterval(intSplit);
          } else if (
            totP <= 21 &&
            totP2 > 21 &&
            totP > totalCroupier.innerHTML
          ) {
            console.log(`game 1 is greater than 21`);
            winnerSplit(playerSplit, deck1, passedSplit, deck2);
            styleWin(totalPlayer);
            clearInterval(intSplit);
          } else if (
            totalCroupier.innerHTML > 21 &&
            totP <= 21 &&
            totP2 <= 21
          ) {
            console.log(`croupier is greater than 21 and I lose`);
            winnerSplitBoth(playerSplit, both);
            styleWin(totalPlayer);
            styleWin(totalPlayer2);
            clearInterval(intSplit);
          } else if (
            totalCroupier.innerHTML > totP &&
            totalCroupier.innerHTML > totP2 &&
            totalCroupier.innerHTML <= 21
          ) {
            console.log(`I lose and I lose`);
            winnerSplitBoth(croupierSplit, both);
            styleLose(totalPlayer);
            styleLose(totalPlayer2);
            clearInterval(intSplit);
          } else if (
            totalCroupier.innerHTML > totP &&
            totalCroupier.innerHTML < totP2
          ) {
            console.log(`I lose and I win`);
            winnerSplit(croupierSplit, deck1, playerSplit, deck2);
            styleLose(totalPlayer);
            styleWin(totalPlayer2);
            clearInterval(intSplit);
          } else if (
            totalCroupier.innerHTML > totP &&
            totalCroupier.innerHTML === totP2 &&
            totP2 <= 21
          ) {
            console.log(`I lose and I draw`);
            winnerSplit(croupierSplit, deck1, drawSplit, deck2);
            styleLose(totalPlayer);
            stylePush(totalPlayer2);
            clearInterval(intSplit);
          } else if (
            totalCroupier.innerHTML < totP &&
            totalCroupier.innerHTML < totP2 &&
            totP <= 21 &&
            totP2 <= 21
          ) {
            console.log(`I win and I win`);
            winnerSplitBoth(playerSplit, both);
            styleWin(totalPlayer);
            styleWin(totalPlayer2);
            clearInterval(intSplit);
          } else if (
            totalCroupier.innerHTML < totP &&
            totalCroupier.innerHTML > totP2 &&
            totP <= 21
          ) {
            console.log(`I win and I lose`);
            winnerSplit(playerSplit, deck1, croupierSplit, deck2);
            styleWin(totalPlayer);
            styleLose(totalPlayer2);
            clearInterval(intSplit);
          } else if (
            totalCroupier.innerHTML < totP &&
            totalCroupier.innerHTML === totP2 &&
            totP2 <= 21
          ) {
            console.log(`I win and I draw`);
            winnerSplit(playerSplit, deck1, drawSplit, deck2);
            styleWin(totalPlayer);
            stylePush(totalPlayer2);
            clearInterval(intSplit);
          } else if (
            totalCroupier.innerHTML === totP &&
            totalCroupier.innerHTML === totP2
          ) {
            console.log(`I draw and I draw`);
            winnerSplitBoth(drawSplit, both);
            stylePush(totalPlayer);
            stylePush(totalPlayer2);
            clearInterval(intSplit);
          } else if (
            totalCroupier.innerHTML === totP &&
            totalCroupier.innerHTML > totP2 &&
            totP <= 21
          ) {
            console.log(`I draw and I lose`);
            winnerSplit(drawSplit, deck1, croupierSplit, deck2);
            stylePush(totalPlayer);
            styleLose(totalPlayer2);
            clearInterval(intSplit);
          } else if (
            totalCroupier.innerHTML === totP &&
            totalCroupier.innerHTML < totP2 &&
            totP <= 21
          ) {
            console.log(`I draw and I win`);
            winnerSplit(drawSplit, deck1, playerSplit, deck2);
            stylePush(totalPlayer);
            styleWin(totalPlayer2);
            clearInterval(intSplit);
          } else {
            clearInterval(intSplit);
            console.log("Error");
          }
        }, 1000);
      });
    });

    // NO SPLIT
    // hit if not split
    let playerCounter = 3;
    let inputHit = document.getElementById("hit");
    inputHit.addEventListener("click", () => {
      if (
        buttons.innerHTML ===
        `<input type="button" value="Hit" id="hit"><input type="button" value="Stand" id="stand"><input type="button" value="Split" class="input-split">`
      )
        inputSplit.classList.replace("input-split", "input-split-hidden");
      createPlayerCard(playerCounter);
      playerCounter += 1;
      if (totalPlayer.innerHTML > 21) {
        winner(passed);
        remove(inputHit, inputStand);
      }
    });

    let titleCroupier = document.createElement("H2");
    divTitleCroupier.appendChild(titleCroupier);
    titleCroupier.classList.add("title");
    titleCroupier.innerHTML = "Croupier";
    createCroupierCard(1);

    let card0 = document.createElement("DIV");
    placeCroupier.appendChild(card0);
    card0.classList.add(`card-0-croupier`);
    card0.setAttribute("id", "card-0");
    placeCroupier.appendChild(totalCroupier);

    // stand if not split
    let inputStand = document.getElementById("stand");
    inputStand.addEventListener("click", () => {
      if (
        buttons.innerHTML ===
        `<input type="button" value="Hit" id="hit"><input type="button" value="Stand" id="stand"><input type="button" value="Split" class="input-split">`
      )
        buttons.removeChild(inputSplit);
      remove(inputHit, inputStand);
      cardsInterval();
    });
  } else {
    ItsAS(totalPlayer, player1CardValue);
    buttons.innerHTML = `<input type="button" value="Hit" id="hit"><input type="button" value="Stand" id="stand">`;
    let playerCounter = 3;
    let inputHit = document.getElementById("hit");
    inputHit.addEventListener("click", () => {
      createPlayerCard(playerCounter);
      playerCounter += 1;
      ASPasses21(totalPlayer, player1CardValue);
      if (totalPlayer.innerHTML > 21) {
        winner(passed);
        remove(inputHit, inputStand);
      }
    });

    let titleCroupier = document.createElement("H2");
    divTitleCroupier.appendChild(titleCroupier);
    titleCroupier.classList.add("title");
    titleCroupier.innerHTML = "Croupier";
    createCroupierCard(1);

    let card0 = document.createElement("DIV");
    placeCroupier.appendChild(card0);
    card0.classList.add(`card-0-croupier`);
    card0.setAttribute("id", "card-0");
    placeCroupier.appendChild(totalCroupier);

    let inputStand = document.getElementById("stand");
    inputStand.addEventListener("click", () => {
      remove(inputHit, inputStand);
      cardsInterval();
    });
    if (totalPlayer.innerHTML === "21") {
      winnerBlackJack(player);
      remove(inputHit, inputStand);
    }
  }
}); //end of play
