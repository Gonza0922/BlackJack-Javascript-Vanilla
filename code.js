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
  if (randomValue === 1) randomLetter = "A";
  if (randomLetter === undefined) {
    randomLetter = 10;
    randomValue = 10;
  }
  //console.log(randomLetter);
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
  if (randomValue === 1) randomLetter = "A";
  if (randomLetter === undefined) {
    randomLetter = 10;
    randomValue = 10;
  }
  //console.log(randomLetter);
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

const passed = "Player passed 21";
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

const blackJackSplit = "BLACKJACK in";
const croupierSplit = "Croupier wins over";
const playerSplit = "Player wins in";
const drawSplit = "Draw in";
const passedSplit = "Player passed 21 in";
const deck1 = "game 1";
const deck2 = "game 2";
const both = "both games";

function resultSplit(person1, deck1, person2, deck2) {
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

function resultSplitBoth(person, deck) {
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

function itsAS(totalReceiver, receiverCardValue) {
  const total = Number(totalReceiver.innerHTML);
  if (receiverCardValue.includes(1) && total <= 11) {
    if (total <= 10) {
      totalReceiver.innerHTML = `${total}/${total + 10}`;
      totalReceiver.style.fontSize = "14px";
    } else totalReceiver.innerHTML = total + 10;
  }
}

function itsASCroupier() {
  const total = Number(totalCroupier.innerHTML);
  if (croupierCardValue.includes(1) && total <= 11)
    if (total <= 10) totalCroupier.innerHTML = total + 10;
}

function ASPasses21(totalReceiver, receiverCardValue) {
  const total = Number(totalReceiver.innerHTML);
  let sum = 0;
  let foundOne = false;
  for (let i = 0; i < receiverCardValue.length; i++) {
    if (receiverCardValue[i] === 1) {
      foundOne = true;
      sum += 1;
    } else if (!foundOne) sum += receiverCardValue[i];
  }
  if (sum <= 10 && total > 10 && receiverCardValue.includes(1) && total > 21) {
    console.log(totalReceiver.innerHTML);
    totalReceiver.innerHTML = total - 10;
    receiverCardValue.fill(0);
  }
}

function ASWhenStand(totalReceiver, receiverCardValue) {
  if (receiverCardValue.includes(1)) {
    if (totalReceiver.innerHTML.length === 4) {
      totalReceiver.innerHTML = Number(
        totalReceiver.innerHTML[2] + totalReceiver.innerHTML[3]
      );
    } else if (totalReceiver.innerHTML.length === 5) {
      totalReceiver.innerHTML = Number(
        totalReceiver.innerHTML[3] + totalReceiver.innerHTML[4]
      );
    }
    totalReceiver.style.fontSize = "16px";
  }
}

function ASWhenHit(totalReceiver, receiverCardValue) {
  if (receiverCardValue.includes(1)) {
    if (totalReceiver.innerHTML.length === 4) {
      totalReceiver.innerHTML = Number(totalReceiver.innerHTML[0]);
    } else if (totalReceiver.innerHTML.length === 5) {
      totalReceiver.innerHTML = Number(
        totalReceiver.innerHTML[0] + totalReceiver.innerHTML[1]
      );
    }
    totalReceiver.style.fontSize = "16px";
  }
}

function intervalWhile() {
  let croupierCounter = 3;
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
    createCroupierCard(2);
    itsASCroupier();
    if (totalCroupier.innerHTML === 21) winner(croupier);
    let int = setInterval(() => {
      intervalWhile();
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
    itsAS(totalPlayer, player1CardValue);
    buttons.innerHTML = `<input type="button" value="Hit" id="hit"><input type="button" value="Stand" id="stand"><input type="button" value="Split" class="input-split">`;
    let player1AndPlayer2 = document.querySelector(".div-player-and-player2");
    let inputSplit = document.querySelector(".input-split");
    //SPLIT
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

      function createPlayer2Card(i) {
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
        if (randomValue === 1) randomLetter = "A";
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
      )
        card2.innerHTML = 10;
      if (card2.innerHTML === "A") card2.innerHTML = 1;
      ASWhenHit(totalPlayer, player1CardValue);
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
      )
        card2.innerHTML = 10;
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

      let totP;
      let totP2;

      createPlayer2Card(2);
      card2.remove();
      player2CardValue.unshift(player1CardValue[1]);
      player1CardValue.pop();
      console.log(player2CardValue);
      itsAS(totalPlayer2, player2CardValue);
      if (Number(totalPlayer2.innerHTML) === 21) {
        styleBJ(totalPlayer2);
        totP2 = 21;
      }

      createPlayerCard(2);
      itsAS(totalPlayer, player1CardValue);
      if (Number(totalPlayer.innerHTML) === 21) {
        totP = 21;
        styleBJ(totalPlayer);
        if (totP2 === 21) {
          remove(inputHitSplit, inputStandSplit);
          resultSplitBoth(blackJackSplit, both);
        } else {
          remplaceClasses();
        }
      }
      console.log(player1CardValue);

      // hit player 1
      let playerSplitCounter = 3;
      inputHitSplit.addEventListener("click", () => {
        ASWhenHit(totalPlayer, player1CardValue);
        createPlayerCard(playerSplitCounter);
        itsAS(totalPlayer, player1CardValue);
        playerSplitCounter += 1;
        if (Number(totalPlayer.innerHTML) === 21) {
          totP = 21;
          if (totP2 === 21) {
            remove(inputHitSplit, inputStandSplit);
            let intHitSplit = setInterval(() => {
              createCroupierCard(2);
              itsASCroupier();
              intervalWhile();
              if (
                totP <= 21 &&
                totalCroupier.innerHTML > totP &&
                totalCroupier.innerHTML <= 21
              ) {
                console.log("I lose and BJ in game 2");
                resultSplit(croupierSplit, deck1, blackJackSplit, deck2);
                clearInterval(intHitSplit);
              } else if (totP <= 21 && totalCroupier.innerHTML < totP) {
                console.log("I win and BJ in game 2");
                resultSplit(playerSplit, deck1, blackJackSplit, deck2);
                clearInterval(intHitSplit);
              } else if (totP <= 21 && totalCroupier.innerHTML === totP) {
                console.log("I draw and BJ in game 2");
                resultSplit(drawSplit, deck1, blackJackSplit, deck2);
                clearInterval(intHitSplit);
              } else {
                console.log("error hit split");
                clearInterval(intHitSplit);
              }
            }, 1000);
          } else {
            remplaceClasses();
          }
        }
        if (Number(totalPlayer.innerHTML) > 21) {
          totP = totalPlayer.innerHTML;
          styleBust(totalPlayer);
          if (totP2 === 21) {
            remove(inputHitSplit, inputStandSplit);
            resultSplit(passedSplit, deck1, blackJackSplit, deck2);
          } else {
            remplaceClasses();
          }
        }
      });

      // stand player 1
      inputStandSplit.addEventListener("click", () => {
        ASWhenStand(totalPlayer, player1CardValue);
        totP = totalPlayer.innerHTML;
        totP2 = totalPlayer2.innerHTML;
        if (totP === "BJ") totP = 21;
        if (totP2 === "BJ") totP2 = 21;
        if (totP2 === 21) {
          remove(inputHitSplit, inputStandSplit);
          let intStandSplit = setInterval(() => {
            createCroupierCard(2);
            itsASCroupier();
            intervalWhile();
            console.log(totP);
            console.log(totP2);
            if (
              totP <= 21 &&
              totalCroupier.innerHTML > totP &&
              totalCroupier.innerHTML <= 21
            ) {
              resultSplit(croupierSplit, deck1, blackJackSplit, deck2);
              styleLose(totalPlayer);
              clearInterval(intStandSplit);
              console.log("I lose and BJ in game 2");
            } else if (totP <= 21 && totalCroupier.innerHTML < totP) {
              styleWin(totalPlayer);
              resultSplit(playerSplit, deck1, blackJackSplit, deck2);
              clearInterval(intStandSplit);
              console.log("I win and BJ in game 2");
            } else if (totP <= 21 && totalCroupier.innerHTML === totP) {
              stylePush(totalPlayer);
              resultSplit(drawSplit, deck1, blackJackSplit, deck2);
              clearInterval(intStandSplit);
              console.log("I draw and BJ in game 2");
            } else if (totP <= 21 && totalCroupier.innerHTML > 21) {
              styleWin(totalPlayer);
              resultSplit(playerSplit, deck1, blackJackSplit, deck2);
              clearInterval(intStandSplit);
              onsole.log("I win because croupier over 21 and BJ in game 2");
            } else {
              console.log("error stand split");
              clearInterval(intStandSplit);
            }
          }, 1000);
        } else {
          remplaceClasses();
        }
      });

      // hit player 2
      let playerSplitCounter2 = 3;
      inputHitSplit2.addEventListener("click", () => {
        ASWhenHit(totalPlayer2, player2CardValue);
        createPlayer2Card(playerSplitCounter2);
        itsAS(totalPlayer2, player2CardValue);
        playerSplitCounter2 += 1;
        totP = totalPlayer.innerHTML;
        totP2 = totalPlayer2.innerHTML;
        if (totP === "BJ") totP = 21;
        if (totP2 === "BJ") totP2 = 21;
        if (totP === "Bust") totP = 25;
        if (totP2 === "Bust") totP2 = 25;
        if (totalCroupier.innerHTML === 21) {
          if (totP === totalCroupier.innerHTML) {
            resultSplit(drawSplit, deck1, croupierSplit, deck2);
          } else if (totP2 === totalCroupier.innerHTML) {
            resultSplit(croupierSplit, deck1, drawSplit, deck2);
          } else {
            resultSplitBoth(croupierSplit, both);
          }
        }
        if (Number(totP2) === 21) {
          remove(inputHitSplit2, inputStandSplit2);
          if (totP !== 21) {
            cardsInterval();
          } else {
            resultSplit(blackJackSplit, deck1, playerSplit, deck2);
          }
        } else if (totP > 21 && totP2 > 21) {
          console.log(`both over 21`);
          remove(inputHitSplit2, inputStandSplit2);
          styleBust(totalPlayer2);
          resultSplitBoth(passedSplit, both);
        } else if (totP2 > 21) {
          if (totP === 21) {
            remove(inputHitSplit2, inputStandSplit2);
            styleBust(totalPlayer2);
            resultSplit(blackJackSplit, deck1, passedSplit, deck2);
          } else {
            createCroupierCard(2);
            itsASCroupier();
            if (totalCroupier.innerHTML === 21)
              resultSplitBoth(croupierSplit, both);
            let intHitSplit = setInterval(() => {
              intervalWhile();
              buttons.remove(inputHitSplit2);
              buttons.remove(inputStandSplit2);
              styleBust(totalPlayer2);
              console.log(totP);
              console.log(totP2);
              if (totP <= 21 && totalCroupier.innerHTML < totP) {
                console.log("I win and game 2 is greater than 21");
                resultSplit(playerSplit, deck1, passedSplit, deck2);
                styleWin(totalPlayer);
                clearInterval(intHitSplit);
              } else if (
                totP <= 21 &&
                totalCroupier.innerHTML > totP &&
                totalCroupier.innerHTML <= 21
              ) {
                console.log("I lose and game 2 is greater than 21");
                resultSplit(croupierSplit, deck1, passedSplit, deck2);
                styleLose(totalPlayer);
                clearInterval(intHitSplit);
              } else if (
                totP <= 21 &&
                totalCroupier.innerHTML === totP &&
                totalCroupier.innerHTML <= 21
              ) {
                console.log("I draw and game 2 is greater than 21");
                resultSplit(drawSplit, deck1, passedSplit, deck2);
                stylePush(totalPlayer);
                clearInterval(intHitSplit);
              } else if (
                totalCroupier.innerHTML > 21 &&
                totP2 > 21 &&
                totP <= 21
              ) {
                console.log(`I win because croupier > 21 and game 2 is > 21`);
                resultSplit(playerSplit, deck1, croupierSplit, deck2);
                styleWin(totalPlayer);
                clearInterval(intHitSplit);
              } else {
                console.log("Error");
                console.log(totP);
                console.log(totP2);
                console.log(totalCroupier.innerHTML);
                clearInterval(intHitSplit);
              }
            });
          }
        }
      });
      // stand player 2
      inputStandSplit2.addEventListener("click", () => {
        remove(inputHitSplit2, inputStandSplit2);
        ASWhenStand(totalPlayer2, player2CardValue);
        createCroupierCard(2);
        itsASCroupier();
        if (totalCroupier.innerHTML === 21)
          resultSplitBoth(croupierSplit, both);
        totP = totalPlayer.innerHTML;
        totP2 = totalPlayer2.innerHTML;
        if (totP === "BJ") totP = 21;
        if (totP2 === "BJ") totP2 = 21;
        if (totP === "Bust") totP = 25;
        if (totP2 === "Bust") totP2 = 25;
        let intStandSplit = setInterval(() => {
          intervalWhile();
          if (totalCroupier.innerHTML === 21) {
            if (totP === totalCroupier.innerHTML) {
              resultSplit(drawSplit, deck1, croupierSplit, deck2);
              clearInterval(intStandSplit);
            } else if (totP2 === totalCroupier.innerHTML) {
              resultSplit(croupierSplit, deck1, drawSplit, deck2);
              clearInterval(intStandSplit);
            } else {
              resultSplitBoth(croupierSplit, both);
              clearInterval(intStandSplit);
            }
          }
          //CONDITIONS
          if (totP > 21 && totP2 > 21) {
            console.log(`both over 21`);
            resultSplitBoth(passedSplit, both);
            clearInterval(intStandSplit);
          } else if (
            totP === 21 &&
            totalCroupier.innerHTML <= 21 &&
            totalCroupier.innerHTML > totP2 &&
            totP2 <= 21
          ) {
            console.log(`BJ and I lose`);
            resultSplit(blackJackSplit, deck1, croupierSplit, deck2);
            styleLose(totalPlayer2);
            clearInterval(intStandSplit);
          } else if (
            totP2 === 21 &&
            totalCroupier.innerHTML <= 21 &&
            totalCroupier.innerHTML > totP &&
            totP <= 21
          ) {
            console.log(`I lose and BJ`);
            resultSplit(croupierSplit, deck1, blackJackSplit, deck2);
            styleLose(totalPlayer);
            clearInterval(intStandSplit);
          } else if (
            totP === 21 &&
            totalCroupier.innerHTML <= 21 &&
            totalCroupier.innerHTML < totP2 &&
            totP2 <= 21
          ) {
            console.log(`BJ and I win`);
            resultSplit(blackJackSplit, deck1, playerSplit, deck2);
            styleWin(totalPlayer2);
            clearInterval(intStandSplit);
          } else if (
            totP2 === 21 &&
            totalCroupier.innerHTML <= 21 &&
            totalCroupier.innerHTML < totP &&
            totP <= 21
          ) {
            console.log(`I win and BJ`);
            resultSplit(croupierSplit, deck1, blackJackSplit, deck2);
            styleLose(totalPlayer);
            clearInterval(intStandSplit);
          } else if (
            totP > 21 &&
            totP2 < totalCroupier.innerHTML &&
            totalCroupier.innerHTML <= 21
          ) {
            console.log(`game 1 is greater than 21 and I lose`);
            resultSplit(passedSplit, deck1, croupierSplit, deck2);
            styleLose(totalPlayer2);
            clearInterval(intStandSplit);
          } else if (
            totP > 21 &&
            totP2 > totalCroupier.innerHTML &&
            totP2 <= 21
          ) {
            console.log(`game 1 is greater than 21 and I win`);
            resultSplit(passedSplit, deck1, playerSplit, deck2);
            styleWin(totalPlayer2);
            clearInterval(intStandSplit);
          } else if (totP > 21 && totalCroupier.innerHTML > 21) {
            console.log(`game 1 > 21 and I win because croupier > 21`);
            resultSplit(passedSplit, deck1, playerSplit, deck2);
            styleWin(totalPlayer2);
            clearInterval(intStandSplit);
          } else if (
            totP > 21 &&
            totP2 === totalCroupier.innerHTML &&
            totP2 <= 21
          ) {
            console.log(`game 1 is greater than 21 and I draw`);
            resultSplit(passedSplit, deck1, drawSplit, deck2);
            stylePush(totalPlayer2);
            clearInterval(intStandSplit);
          } else if (
            totalCroupier.innerHTML > totP &&
            totalCroupier.innerHTML > totP2 &&
            totalCroupier.innerHTML <= 21
          ) {
            console.log(`I lose and I lose`);
            resultSplitBoth(croupierSplit, both);
            styleLose(totalPlayer);
            styleLose(totalPlayer2);
            clearInterval(intStandSplit);
          } else if (
            totalCroupier.innerHTML > totP &&
            totalCroupier.innerHTML < totP2
          ) {
            console.log(`I lose and I win`);
            resultSplit(croupierSplit, deck1, playerSplit, deck2);
            styleLose(totalPlayer);
            styleWin(totalPlayer2);
            clearInterval(intStandSplit);
          } else if (
            totalCroupier.innerHTML <= 21 &&
            totalCroupier.innerHTML > totP &&
            totalCroupier.innerHTML === totP2 &&
            totP2 <= 21
          ) {
            console.log(`I lose and I draw`);
            resultSplit(croupierSplit, deck1, drawSplit, deck2);
            styleLose(totalPlayer);
            stylePush(totalPlayer2);
            clearInterval(intStandSplit);
          } else if (
            totalCroupier.innerHTML < totP &&
            totalCroupier.innerHTML < totP2 &&
            totP <= 21 &&
            totP2 <= 21
          ) {
            console.log(`I win and I win`);
            resultSplitBoth(playerSplit, both);
            styleWin(totalPlayer);
            styleWin(totalPlayer2);
            clearInterval(intStandSplit);
          } else if (
            totalCroupier.innerHTML < totP &&
            totalCroupier.innerHTML > totP2 &&
            totalCroupier.innerHTML <= 21 &&
            totP <= 21
          ) {
            console.log(`I win and I lose`);
            resultSplit(playerSplit, deck1, croupierSplit, deck2);
            styleWin(totalPlayer);
            styleLose(totalPlayer2);
            clearInterval(intStandSplit);
          } else if (
            totalCroupier.innerHTML < totP &&
            totalCroupier.innerHTML === totP2 &&
            totP <= 21 &&
            totP2 <= 21
          ) {
            console.log(`I win and I draw`);
            resultSplit(playerSplit, deck1, drawSplit, deck2);
            styleWin(totalPlayer);
            stylePush(totalPlayer2);
            clearInterval(intStandSplit);
          } else if (
            totalCroupier.innerHTML === totP &&
            totalCroupier.innerHTML === totP2 &&
            totP <= 21 &&
            totP2 <= 21
          ) {
            console.log(`I draw and I draw`);
            resultSplitBoth(drawSplit, both);
            stylePush(totalPlayer);
            stylePush(totalPlayer2);
            clearInterval(intStandSplit);
          } else if (
            totalCroupier.innerHTML === totP &&
            totalCroupier.innerHTML > totP2 &&
            totalCroupier.innerHTML <= 21 &&
            totP <= 21
          ) {
            console.log(`I draw and I lose`);
            resultSplit(drawSplit, deck1, croupierSplit, deck2);
            stylePush(totalPlayer);
            styleLose(totalPlayer2);
            clearInterval(intStandSplit);
          } else if (
            totalCroupier.innerHTML === totP &&
            totalCroupier.innerHTML < totP2 &&
            totP2 <= 21 &&
            totP <= 21
          ) {
            console.log(`I draw and I win`);
            resultSplit(drawSplit, deck1, playerSplit, deck2);
            stylePush(totalPlayer);
            styleWin(totalPlayer2);
            clearInterval(intStandSplit);
          } else if (
            totalCroupier.innerHTML > 21 &&
            totP2 <= 21 &&
            totP <= 21
          ) {
            console.log(`I win both because croupier over than 21`);
            resultSplitBoth(playerSplit, both);
            styleWin(totalPlayer);
            styleWin(totalPlayer2);
            clearInterval(intStandSplit);
          } else {
            clearInterval(intStandSplit);
            console.log("Error");
            console.log(totP);
            console.log(totP2);
            console.log(totalCroupier.innerHTML);
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
      ASWhenHit(totalPlayer, player1CardValue);
      createPlayerCard(playerCounter);
      itsAS(totalPlayer, player1CardValue);
      playerCounter += 1;
      if (Number(totalPlayer.innerHTML) === 21) {
        remove(inputHit, inputStand);
        cardsInterval();
      }
      if (Number(totalPlayer.innerHTML) > 21) {
        winner(passed);
        remove(inputHit, inputStand);
      }
    });

    let titleCroupier = document.createElement("H2");
    divTitleCroupier.appendChild(titleCroupier);
    titleCroupier.classList.add("title");
    titleCroupier.innerHTML = "Croupier";
    createCroupierCard(1);
    //cartaAcordadaCroupier(1, 1);

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
      ASWhenStand(totalPlayer, player1CardValue);
      remove(inputHit, inputStand);
      cardsInterval();
    });
  } else {
    //Cards are not equals
    itsAS(totalPlayer, player1CardValue);
    buttons.innerHTML = `<input type="button" value="Hit" id="hit"><input type="button" value="Stand" id="stand">`;
    let playerCounter = 3;
    // hit
    let inputHit = document.getElementById("hit");
    inputHit.addEventListener("click", () => {
      ASWhenHit(totalPlayer, player1CardValue);
      createPlayerCard(playerCounter);
      itsAS(totalPlayer, player1CardValue);
      playerCounter += 1;
      if (Number(totalPlayer.innerHTML) === 21) {
        remove(inputHit, inputStand);
        cardsInterval();
      }
      if (Number(totalPlayer.innerHTML) > 21) {
        winner(passed);
        remove(inputHit, inputStand);
      }
    });

    let titleCroupier = document.createElement("H2");
    divTitleCroupier.appendChild(titleCroupier);
    titleCroupier.classList.add("title");
    titleCroupier.innerHTML = "Croupier";
    createCroupierCard(1);
    //cartaAcordadaCroupier(1, 1);

    let card0 = document.createElement("DIV");
    placeCroupier.appendChild(card0);
    card0.classList.add(`card-0-croupier`);
    card0.setAttribute("id", "card-0");
    placeCroupier.appendChild(totalCroupier);

    //stand
    let inputStand = document.getElementById("stand");
    inputStand.addEventListener("click", () => {
      ASWhenStand(totalPlayer, player1CardValue);
      remove(inputHit, inputStand);
      cardsInterval();
    });
    if (totalPlayer.innerHTML === "21") {
      winnerBlackJack(player);
      remove(inputHit, inputStand);
    }
  }
}); //end of play
