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

function randomCard(receiver) {
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
    if (receiver === "croupier") randomValue = 11;
  }
  if (randomLetter === undefined) {
    randomLetter = 10;
    randomValue = 10;
  }
  return [randomValue, randomLetter];
}

function createPlayerCard(i) {
  const valueAndLetter = randomCard("player");
  //console.log(valueAndLetter[1]);
  let card = document.createElement("DIV");
  placePlayer.appendChild(card);
  card.classList.add(`card-${i}-player`);
  card.setAttribute("id", "card");
  placePlayer.appendChild(totalPlayer);
  totalPlayer.innerHTML = Number(totalPlayer.innerHTML) + valueAndLetter[0];
  card.innerHTML = valueAndLetter[1];
  player1CardValue.push(valueAndLetter[0]);
  return valueAndLetter[0];
}

function createCroupierCard(i) {
  const valueAndLetter = randomCard("croupier");
  //console.log(valueAndLetter[1]);
  let card = document.createElement("DIV");
  placeCroupier.appendChild(card);
  card.classList.add(`card-${i}-croupier`);
  card.setAttribute("id", "card");
  placeCroupier.appendChild(totalCroupier);
  totalCroupier.innerHTML = Number(totalCroupier.innerHTML) + valueAndLetter[0];
  card.innerHTML = valueAndLetter[1];
  croupierCardValue.push(valueAndLetter[0]);
  return valueAndLetter[0];
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
  if (
    (receiverCardValue.includes(1) || receiverCardValue.includes(11)) &&
    total <= 11
  ) {
    if (total <= 10) {
      totalReceiver.innerHTML = `${total}/${total + 10}`;
      totalReceiver.style.fontSize = "14px";
    } else totalReceiver.innerHTML = total + 10;
  }
}

function ASPasses21(totalReceiver, receiverCardValue) {
  const total = Number(totalReceiver.innerHTML);
  let sum = 0;
  let foundOne = false;
  for (let i = 0; i < receiverCardValue.length; i++) {
    if (receiverCardValue[i] === 11 || receiverCardValue[i] === 1) {
      foundOne = true;
      sum += 1;
    } else if (!foundOne) sum += receiverCardValue[i];
  }
  if (
    sum <= 10 &&
    (receiverCardValue.includes(11) || receiverCardValue.includes(1)) &&
    total > 21
  ) {
    console.log(totalReceiver.innerHTML);
    totalReceiver.innerHTML = total - 10;
    receiverCardValue.fill(0);
  }
}

function itsASCroupier() {
  ASPasses21(totalCroupier, croupierCardValue);
  const total = Number(totalCroupier.innerHTML);
  if (
    (croupierCardValue.includes(1) || croupierCardValue.includes(11)) &&
    total <= 11
  )
    totalCroupier.innerHTML = total + 10;
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

function firstTwoCardsCroupier() {
  let titleCroupier = document.createElement("H2");
  divTitleCroupier.appendChild(titleCroupier);
  titleCroupier.classList.add("title");
  titleCroupier.innerHTML = "Croupier";
  createCroupierCard(1);
  let faceDownCard = document.createElement("DIV");
  placeCroupier.appendChild(faceDownCard);
  faceDownCard.classList.add(`face-down-card-croupier`);
  faceDownCard.setAttribute("id", "face-down-card");
  placeCroupier.appendChild(totalCroupier);
}

deal.addEventListener("click", () => {
  container.removeChild(deal);
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
    ASPasses21(totalCroupier, croupierCardValue);
    console.log(totalCroupier.innerHTML);

    let int = setInterval(() => {
      if (totalCroupier.innerHTML == 21) {
        console.log("I Lose for a BJ");
        styleBJ(totalCroupier);
        styleLose(totalPlayer);
        winner(croupier);
        clearInterval(int);
      }
      intervalWhile();
      if (totalCroupier.innerHTML == 21) {
        if (totalPlayer.innerHTML == totalCroupier.innerHTML) {
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
      } else if (totalCroupier.innerHTML > totalPlayer.innerHTML) {
        winner(croupier);
        clearInterval(int);
      } else if (totalCroupier.innerHTML < totalPlayer.innerHTML) {
        winner(player);
        clearInterval(int);
      } else if (totalCroupier.innerHTML == totalPlayer.innerHTML) {
        winner(draw);
        clearInterval(int);
      }
    }, 1000);
  }

  function createAndAddCounterPlayerCard(counter, isSplit) {
    ASWhenHit(totalPlayer, player1CardValue);
    createPlayerCard(counter);
    itsAS(totalPlayer, player1CardValue);
    counter += 1;
    if (isSplit === false) {
      if (Number(totalPlayer.innerHTML) === 21)
        setTimeout(() => cardsInterval(), 1000);
      if (Number(totalPlayer.innerHTML) > 21) winner(passed);
    }
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
        const valueAndLetter = randomCard("player");
        //console.log(valueAndLetter[1]);
        let card = document.createElement("DIV");
        placePlayer2.appendChild(card);
        card.classList.add(`card-${i}-player`);
        card.setAttribute("id", "card");
        placePlayer2.appendChild(totalPlayer2);
        totalPlayer2.innerHTML =
          Number(totalPlayer2.innerHTML) + valueAndLetter[0];
        card.innerHTML = valueAndLetter[1];
        player2CardValue.push(valueAndLetter[0]);
        return valueAndLetter[0];
      }

      placePlayer.classList.replace("place-player", "place-player-split");
      buttons.classList.replace("div-buttons", "div-buttons-split");

      let card2 = document.querySelector(".card-2-player");
      let letter = card2.innerHTML;
      if (
        card2.innerHTML === "K" ||
        card2.innerHTML === "Q" ||
        card2.innerHTML === "J"
      )
        card2.innerHTML = 10;
      if (card2.innerHTML === "A") card2.innerHTML = 1;
      ASWhenHit(totalPlayer, player1CardValue);
      totalPlayer.innerHTML -= card2.innerHTML;

      let card = document.createElement("DIV");
      placePlayer2.appendChild(card);
      card.classList.add(`card-1-player`);
      card.setAttribute("id", "card");
      placePlayer2.appendChild(totalPlayer2);
      card.innerHTML = letter;
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
          if (Number(totalCroupier.innerHTML) >= 10) {
            setTimeout(() => {
              createCroupierCard(2);
              itsASCroupier();
              if (Number(totalCroupier.innerHTML) === 21) {
                console.log("Draw BJ in both games");
                styleBJ(totalCroupier);
                stylePush(totalPlayer);
                stylePush(totalPlayer2);
                resultSplitBoth(drawSplit, both);
              } else {
                console.log("BlackJack in both games");
                resultSplitBoth(blackJackSplit, both);
              }
            }, 1000);
          } else {
            console.log("BlackJack in both games");
            resultSplitBoth(blackJackSplit, both);
          }
        } else remplaceClasses();
      }
      console.log(player1CardValue);

      // HIT player 1
      let playerSplitCounter = 3;
      inputHitSplit.addEventListener("click", () => {
        createAndAddCounterPlayerCard(playerSplitCounter, true);
        if (Number(totalPlayer.innerHTML) === 21) {
          // 21 doesn't mean it's BJ
          totP = 21;
          if (totP2 === 21) {
            //BJ
            remove(inputHitSplit, inputStandSplit);
            createCroupierCard(2);
            itsASCroupier();
            if (Number(totalCroupier.innerHTML) === 21) {
              setTimeout(() => {
                styleBJ(totalCroupier);
                styleLose(totalPlayer);
                stylePush(totalPlayer2);
                resultSplit(croupierSplit, deck1, drawSplit, deck2);
              }, 1000);
              return;
            }
            let intHitSplit = setInterval(() => {
              intervalWhile();
              if (totP <= 21 && totalCroupier.innerHTML < totP) {
                console.log("I win and BJ in game 2");
                styleWin(totalPlayer);
                resultSplit(playerSplit, deck1, blackJackSplit, deck2);
                clearInterval(intHitSplit);
              } else if (
                totP <= 21 &&
                Number(totalCroupier.innerHTML) === totP
              ) {
                console.log("I draw and BJ in game 2");
                stylePush(totalPlayer);
                resultSplit(drawSplit, deck1, blackJackSplit, deck2);
                clearInterval(intHitSplit);
              } else if (totP <= 21 && totalCroupier.innerHTML > 21) {
                console.log("I win because croupier > 21 and BJ in game 2");
                styleWin(totalPlayer);
                resultSplit(playerSplit, deck1, blackJackSplit, deck2);
                clearInterval(intHitSplit);
              } else {
                console.log("error hit split");
                clearInterval(intHitSplit);
              }
            }, 1000);
          } else remplaceClasses();
        }
        if (totalPlayer.innerHTML > 21) {
          totP = totalPlayer.innerHTML;
          styleBust(totalPlayer);
          if (totP2 === 21) {
            //BJ
            remove(inputHitSplit, inputStandSplit);
            if (
              totalCroupier.innerHTML == 10 ||
              totalCroupier.innerHTML == 11
            ) {
              createCroupierCard(2);
              itsASCroupier();
              if (totalCroupier.innerHTML == 21) {
                setTimeout(() => {
                  styleBJ(totalCroupier);
                  stylePush(totalPlayer2);
                  resultSplit(passedSplit, deck1, drawSplit, deck2);
                }, 1000);
                console.log("game 1 > 21 and draw game 1, croupier has BJ");
              } else {
                resultSplit(passedSplit, deck1, blackJackSplit, deck2);
                console.log("game 1 > 21 and BJ in game 1");
              }
              return;
            } else if (totalCroupier.innerHTML <= 9) {
              resultSplit(passedSplit, deck1, blackJackSplit, deck2);
              console.log(" game 1 > 21 and BJ in game 1");
              return;
            }
          } else remplaceClasses();
        }
      });

      // STAND player 1
      inputStandSplit.addEventListener("click", () => {
        ASWhenStand(totalPlayer, player1CardValue);
        totP = totalPlayer.innerHTML;
        totP2 = totalPlayer2.innerHTML;
        if (totP === "BJ") totP = 21;
        if (totP2 === "BJ") totP2 = 21;

        if (totP2 === 21) {
          //BJ
          remove(inputHitSplit, inputStandSplit);
          createCroupierCard(2);
          itsASCroupier();
          if (Number(totalCroupier.innerHTML) === 21) {
            //BJ
            setTimeout(() => {
              styleBJ(totalCroupier);
              styleLose(totalPlayer);
              stylePush(totalPlayer2);
              resultSplit(croupierSplit, deck1, drawSplit, deck2);
            }, 1500);
            return;
          }
          let intStandSplit = setInterval(() => {
            intervalWhile();
            if (
              totP <= 21 &&
              totalCroupier.innerHTML > totP &&
              totalCroupier.innerHTML <= 21
            ) {
              styleLose(totalPlayer);
              resultSplit(croupierSplit, deck1, blackJackSplit, deck2);
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
              console.log("I win because croupier over 21 and BJ in game 2");
            } else {
              console.log("error stand split");
              clearInterval(intStandSplit);
            }
          }, 1000);
        } else remplaceClasses();
      });

      // HIT player 2
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

        if (Number(totP2) === 21) {
          // 21 doesn't mean it's BJ
          remove(inputHitSplit2, inputStandSplit2);
          setTimeout(() => {
            createCroupierCard(2);
            itsASCroupier();
            if (Number(totalCroupier.innerHTML) === 21) {
              //BJ
              styleBJ(totalCroupier);
              if (player1CardValue.length === 2 && totP == 21) {
                stylePush(totalPlayer);
                styleLose(totalPlayer2);
                resultSplit(drawSplit, deck1, croupierSplit, deck2);
                console.log("draw game 1, croupier has BJ and lose in game 2");
              } else {
                styleLose(totalPlayer);
                styleLose(totalPlayer2);
                resultSplitBoth(croupierSplit, both);
                console.log("i lose both, croupier has BJ");
              }
            } else {
              let intHitSplit = setInterval(() => {
                totP = totP.toString();
                intervalWhile();
                if (totP == 21 && player1CardValue.length === 2) {
                  //BJ
                  if (totalCroupier.innerHTML === totP2) {
                    console.log(`BJ and I draw`);
                    resultSplit(blackJackSplit, deck1, drawSplit, deck2);
                    stylePush(totalPlayer2);
                    clearInterval(intHitSplit);
                  } else if (totalCroupier.innerHTML < totP2) {
                    console.log(`BJ and I win`);
                    resultSplit(blackJackSplit, deck1, playerSplit, deck2);
                    styleWin(totalPlayer2);
                    clearInterval(intHitSplit);
                  } else if (totalCroupier.innerHTML > 21) {
                    console.log(`BJ and I win because croupier over than 21`);
                    resultSplit(blackJackSplit, deck1, playerSplit, deck2);
                    styleWin(totalPlayer2);
                    clearInterval(intHitSplit);
                  }
                } else {
                  if (
                    totalCroupier.innerHTML > 21 &&
                    totP2 <= 21 &&
                    totP <= 21
                  ) {
                    console.log(`I win both because croupier over than 21`);
                    resultSplitBoth(playerSplit, both);
                    styleWin(totalPlayer);
                    styleWin(totalPlayer2);
                    clearInterval(intHitSplit);
                  } else if (
                    totalCroupier.innerHTML <= 21 &&
                    totalCroupier.innerHTML > totP &&
                    totalCroupier.innerHTML < totP2 &&
                    totP2 <= 21
                  ) {
                    console.log(`I lose and I win`);
                    resultSplit(croupierSplit, deck1, playerSplit, deck2);
                    styleLose(totalPlayer);
                    styleWin(totalPlayer2);
                    clearInterval(intHitSplit);
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
                    clearInterval(intHitSplit);
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
                    clearInterval(intHitSplit);
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
                    clearInterval(intHitSplit);
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
                    clearInterval(intHitSplit);
                  } else if (totP > 21 && totP2 > totalCroupier.innerHTML) {
                    console.log(`game 1 is greater than 21 and I win`);
                    resultSplit(passedSplit, deck1, playerSplit, deck2);
                    styleWin(totalPlayer2);
                    clearInterval(intHitSplit);
                  } else if (totP > 21 && totalCroupier.innerHTML > 21) {
                    console.log(`game 1 > 21 and I win because croupier > 21`);
                    resultSplit(passedSplit, deck1, playerSplit, deck2);
                    styleWin(totalPlayer2);
                    clearInterval(intHitSplit);
                  } else if (totP > 21 && totP2 === totalCroupier.innerHTML) {
                    console.log(`game 1 is greater than 21 and I draw`);
                    resultSplit(passedSplit, deck1, drawSplit, deck2);
                    stylePush(totalPlayer2);
                    clearInterval(intHitSplit);
                  } else {
                    console.log("error");
                    clearInterval(intHitSplit);
                  }
                }
              }, 1000);
            }
          }, 1000);
        } else if (totP > 21 && totP2 > 21) {
          console.log(`both over 21`);
          remove(inputHitSplit2, inputStandSplit2);
          styleBust(totalPlayer2);
          resultSplitBoth(passedSplit, both);
        } else if (totP2 > 21) {
          remove(inputHitSplit2, inputStandSplit2);
          styleBust(totalPlayer2);
          if (
            totP === 21 &&
            player1CardValue.length === 2 &&
            (totalCroupier.innerHTML == 10 || totalCroupier.innerHTML == 11)
          ) {
            //BJ
            createCroupierCard(2);
            itsASCroupier();
            console.log(croupierCardValue);
            if (totalCroupier.innerHTML == 21) {
              setTimeout(() => {
                styleBJ(totalCroupier);
                stylePush(totalPlayer);
                resultSplit(drawSplit, deck1, passedSplit, deck2);
              }, 1000);
              console.log("draw game 1, croupier has BJ and game 2 > 21");
            } else {
              resultSplit(blackJackSplit, deck1, passedSplit, deck2);
              console.log("BJ in game 1 and game 2 > 21");
            }
            return;
          } else if (
            totP === 21 &&
            player1CardValue.length === 2 &&
            totalCroupier.innerHTML <= 9
          ) {
            resultSplit(blackJackSplit, deck1, passedSplit, deck2);
            console.log("BJ in game 1 and game 2 > 21");
            return;
          }
          createCroupierCard(2);
          itsASCroupier();
          if (totalCroupier.innerHTML == 21) {
            //BJ
            setTimeout(() => {
              styleBJ(totalCroupier);
              styleLose(totalPlayer);
              resultSplit(croupierSplit, deck1, passedSplit, deck2);
              console.log("I lose game 1, croupier has BJ and game 2 > 21");
            }, 1000);
            return;
          }
          let intHitSplit = setInterval(() => {
            intervalWhile();
            if (totalCroupier.innerHTML === 21) {
              if (totP === totalCroupier.innerHTML) {
                resultSplit(drawSplit, deck1, croupierSplit, deck2);
                clearInterval(intHitSplit);
              } else if (totP2 === totalCroupier.innerHTML) {
                resultSplit(croupierSplit, deck1, drawSplit, deck2);
                clearInterval(intHitSplit);
              } else {
                resultSplitBoth(croupierSplit, both);
                clearInterval(intHitSplit);
              }
            }
            //CONDITIONS
            if (totP > 21 && totP2 > 21) {
              console.log(`both over 21`);
              resultSplitBoth(passedSplit, both);
              clearInterval(intHitSplit);
            } else if (totP === 21 && totalCroupier.innerHTML !== 21) {
              console.log(`BJ and game 2 is greather than 21`);
              resultSplit(blackJackSplit, deck1, passedSplit, deck2);
              styleBust(totalPlayer2);
              clearInterval(intHitSplit);
            } else if (
              totalCroupier.innerHTML <= 21 &&
              totP <= 21 &&
              totalCroupier.innerHTML > totP
            ) {
              console.log(`I lose and game 2 is greather than 21`);
              resultSplit(croupierSplit, deck1, passedSplit, deck2);
              styleLose(totalPlayer);
              styleBust(totalPlayer2);
              clearInterval(intHitSplit);
            } else if (totP <= 21 && totalCroupier.innerHTML < totP) {
              console.log(`I win and game 2 is greather than 21`);
              resultSplit(playerSplit, deck1, passedSplit, deck2);
              styleWin(totalPlayer);
              styleBust(totalPlayer2);
              clearInterval(intHitSplit);
            } else if (totP <= 21 && totalCroupier.innerHTML === totP) {
              console.log(`I draw and game 2 is greather than 21`);
              resultSplit(drawSplit, deck1, passedSplit, deck2);
              stylePush(totalPlayer);
              styleBust(totalPlayer2);
              clearInterval(intHitSplit);
            } else if (totalCroupier.innerHTML > 21 && totP <= 21) {
              console.log(`I win game 1, croupier > 21 and game 2 > 21`);
              resultSplit(playerSplit, deck1, passedSplit, deck2);
              styleWin(totalPlayer);
              clearInterval(intHitSplit);
            } else {
              clearInterval(intHitSplit);
              console.log("Error");
            }
          }, 1000);
        }
      });
      // STAND player 2
      inputStandSplit2.addEventListener("click", () => {
        remove(inputHitSplit2, inputStandSplit2);
        ASWhenStand(totalPlayer2, player2CardValue);
        createCroupierCard(2);
        itsASCroupier();
        totP = totalPlayer.innerHTML;
        totP2 = totalPlayer2.innerHTML;
        if (totP === "BJ") totP = 21;
        if (totP2 === "BJ") totP2 = 21;
        if (totP === "Bust") totP = 25;
        if (totP2 === "Bust") totP2 = 25;
        if (totalCroupier.innerHTML == 21) {
          //BJ
          setTimeout(() => {
            styleBJ(totalCroupier);
            styleLose(totalPlayer2);
            if (totP == 21 && player1CardValue.length === 2) {
              stylePush(totalPlayer);
              resultSplit(drawSplit, deck1, croupierSplit, deck2);
            } else {
              styleLose(totalPlayer);
              resultSplitBoth(croupierSplit, both);
            }
          }, 1000);
          return;
        }
        let intStandSplit = setInterval(() => {
          intervalWhile();
          //CONDITIONS
          if (
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
            totP === 21 &&
            totP2 <= 21 &&
            (totalCroupier.innerHTML > 21 ||
              (totalCroupier.innerHTML <= 21 &&
                totalCroupier.innerHTML < totP2))
          ) {
            console.log(`BJ and I win`);
            resultSplit(blackJackSplit, deck1, playerSplit, deck2);
            styleWin(totalPlayer2);
            clearInterval(intStandSplit);
          } else if (
            totP === 21 &&
            totalCroupier.innerHTML <= 21 &&
            totalCroupier.innerHTML === totP2 &&
            totP2 <= 21
          ) {
            console.log(`BJ and I draw`);
            resultSplit(blackJackSplit, deck1, drawSplit, deck2);
            stylePush(totalPlayer2);
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
          }
        }, 1000);
      });
    });

    // NO SPLIT
    // HIT if no split
    let playerCounter = 3;
    let inputHit = document.getElementById("hit");
    const input = `<input type="button" value="Hit" id="hit"><input type="button" value="Stand" id="stand"><input type="button" value="Split" class="input-split">`;
    inputHit.addEventListener("click", () => {
      if (buttons.innerHTML === input)
        inputSplit.classList.replace("input-split", "input-split-hidden");
      createAndAddCounterPlayerCard(playerCounter, false);
      if (Number(totalPlayer.innerHTML) >= 21) remove(inputHit, inputStand);
    });

    firstTwoCardsCroupier();

    // STAND if no split
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
    // Cards are not equals
    itsAS(totalPlayer, player1CardValue);
    buttons.innerHTML = `<input type="button" value="Hit" id="hit"><input type="button" value="Stand" id="stand">`;
    let playerCounter = 3;
    // HIT
    let inputHit = document.getElementById("hit");
    inputHit.addEventListener("click", () => {
      createAndAddCounterPlayerCard(playerCounter, false);
      if (Number(totalPlayer.innerHTML) >= 21) remove(inputHit, inputStand);
    });

    firstTwoCardsCroupier();

    // STAND
    let inputStand = document.getElementById("stand");
    inputStand.addEventListener("click", () => {
      ASWhenStand(totalPlayer, player1CardValue);
      remove(inputHit, inputStand);
      cardsInterval();
    });

    if (Number(totalPlayer.innerHTML) === 21) {
      styleBJ(totalPlayer);
      remove(inputHit, inputStand);
      if (Number(totalCroupier.innerHTML) >= 10) {
        setTimeout(() => {
          createCroupierCard(2);
          itsASCroupier();
          if (Number(totalCroupier.innerHTML) === 21) {
            console.log("Draw BJ");
            styleBJ(totalCroupier);
            stylePush(totalPlayer);
            winner(draw);
          } else {
            console.log("BlackJack!!");
            winnerBlackJack(player);
          }
        }, 1000);
      } else {
        console.log("BlackJack!!");
        winnerBlackJack(player);
      }
    }
  }
}); //end of play
