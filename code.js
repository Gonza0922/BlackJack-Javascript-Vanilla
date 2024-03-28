"use strict";

let todo = document.querySelector(".todo");
let container = document.querySelector(".container");
let containerButtons = document.querySelector(".buttons");
let placeCrupier = document.querySelector(".place-crupier");
let placePlayer = document.querySelector(".place-player");
let divTitleCrupier = document.querySelector(".div-title-crupier");
let divTitlePlayer = document.querySelector(".div-title-player");
let repartir = document.querySelector(".button");

let totalPlayer = document.createElement("DIV");
totalPlayer.classList.add("div-total-player");

let totalCrupier = document.createElement("DIV");
totalCrupier.classList.add("div-total-crupier");

let valorDeCartaPlayer = [];
let valorDeCartaPlayer2 = [];
let valorDeCartaCrupier = [];

function createCardPlayer(i) {
  let random = Math.round(Math.random() * 12 + 1);
  let randomLetra;
  if (random === 2) {
    randomLetra = 2;
  }
  if (random === 3) {
    randomLetra = 3;
  }
  if (random === 4) {
    randomLetra = 4;
  }
  if (random === 5) {
    randomLetra = 5;
  }
  if (random === 6) {
    randomLetra = 6;
  }
  if (random === 7) {
    randomLetra = 7;
  }
  if (random === 8) {
    randomLetra = 8;
  }
  if (random === 9) {
    randomLetra = 9;
  }
  if (random === 10) {
    randomLetra = 10;
  }
  if (random === 11) {
    randomLetra = "J";
    random = 10;
  }
  if (random === 12) {
    randomLetra = "Q";
    random = 10;
  }
  if (random === 0) {
    randomLetra = "K";
    random = 10;
  }
  if (random === 1) {
    randomLetra = "A";
    random = 1;
  }
  let card = document.createElement("DIV");
  placePlayer.appendChild(card);
  card.classList.add(`card-${i}-player`);
  card.setAttribute("id", "card");
  placePlayer.appendChild(totalPlayer);
  totalPlayer.innerHTML = Number(totalPlayer.innerHTML) + random;
  card.innerHTML = randomLetra;
  valorDeCartaPlayer.push(random);
  return random;
}

function createCardCrupier(i) {
  let random = Math.round(Math.random() * 12 + 1);
  let randomLetra;
  if (random === 2) {
    randomLetra = 2;
  }
  if (random === 3) {
    randomLetra = 3;
  }
  if (random === 4) {
    randomLetra = 4;
  }
  if (random === 5) {
    randomLetra = 5;
  }
  if (random === 6) {
    randomLetra = 6;
  }
  if (random === 7) {
    randomLetra = 7;
  }
  if (random === 8) {
    randomLetra = 8;
  }
  if (random === 9) {
    randomLetra = 9;
  }
  if (random === 10) {
    randomLetra = 10;
  }
  if (random === 11) {
    randomLetra = "J";
    random = 10;
  }
  if (random === 12) {
    randomLetra = "Q";
    random = 10;
  }
  if (random === 13) {
    randomLetra = "K";
    random = 10;
  }
  if (random === 1) {
    randomLetra = "A";
    random = 1;
  }
  let card = document.createElement("DIV");
  placeCrupier.appendChild(card);
  card.classList.add(`card-${i}-crupier`);
  card.setAttribute("id", "card");
  placeCrupier.appendChild(totalCrupier);
  totalCrupier.innerHTML = Number(totalCrupier.innerHTML) + random;
  card.innerHTML = randomLetra;
  valorDeCartaCrupier.push(random);
  return random;
}

function estiloWin(total) {
  total.style.backgroundColor = "rgb(218, 165, 32)";
  total.style.color = "rgb(49, 49, 49)";
  total.innerHTML = "Win";
}

function estiloLose(total) {
  total.style.backgroundColor = "rgb(49, 49, 49)";
  total.style.color = "rgb(255, 255, 255)";
  total.innerHTML = "Lose";
}

function estiloPush(total) {
  total.style.backgroundColor = "rgb(20, 132, 223)";
  total.style.color = "rgb(49, 49, 49)";
  total.innerHTML = "Push";
}

function estiloBust(total) {
  total.style.backgroundColor = "rgb(49, 49, 49)";
  total.style.color = "rgb(255, 255, 255)";
  total.innerHTML = "Bust";
}

function estiloBJ(total) {
  total.style.backgroundColor = "rgb(218, 165, 32)";
  total.style.color = "rgb(49, 49, 49)";
  total.innerHTML = "BJ";
}

const pasaste = "Te pasaste";
const crupier = "Gana El Crupier";
const player = "Gana El Jugador";
const empate = "Empate";

function ganador(persona) {
  setTimeout(() => {
    let groundGanador = document.createElement("DIV");
    container.appendChild(groundGanador);
    groundGanador.classList.add("background-div-ganador");
    let divGanador = document.createElement("DIV");
    groundGanador.appendChild(divGanador);
    divGanador.classList.add("div-ganador");
    let ganador = document.createElement("H2");
    divGanador.appendChild(ganador);
    ganador.innerHTML = persona;
    if (persona === "Gana El Jugador") {
      estiloWin(totalPlayer);
      divGanador.style.backgroundColor = "rgb(49, 49, 49)";
      divGanador.style.color = "rgb(218, 165, 32)";
      divGanador.style.border = "5px solid rgb(218, 165, 32)";
    } else if (persona === "Gana El Crupier") {
      estiloLose(totalPlayer);
      divGanador.style.backgroundColor = "rgb(49, 49, 49)";
      divGanador.style.color = "rgb(255, 255, 255)";
      divGanador.style.border = "5px solid rgb(255, 255, 255)";
    } else if (persona === "Empate") {
      estiloPush(totalPlayer);
      divGanador.style.backgroundColor = "rgb(49, 49, 49)";
      divGanador.style.color = "rgb(20, 132, 223)";
      divGanador.style.border = "5px solid rgb(20, 132, 223)";
    } else {
      estiloBust(totalPlayer);
      divGanador.style.backgroundColor = "rgb(49, 49, 49)";
      divGanador.style.color = "rgb(255, 255, 255)";
      divGanador.style.border = "5px solid rgb(255, 255, 255)";
    }
    let form = document.createElement("FORM");
    divGanador.appendChild(form);
    let loop = document.createElement("DIV");
    form.appendChild(loop);
    loop.innerHTML = `<input type="submit" value="Aceptar" class="form">`;
  }, 800);
}

const crupierSplit = "Gana el crupier sobre";
const playerSplit = "Gana el Jugador en";
const empateSplit = "Empate en";
const pasasteSplit = "Te pasaste en";
const mazo1 = "el juego 1";
const mazo2 = "el juego 2";

function ganadorSplit(persona1, mazo1, persona2, mazo2) {
  setTimeout(() => {
    let groundGanador = document.createElement("DIV");
    container.appendChild(groundGanador);
    groundGanador.classList.add("background-div-ganador");
    let divGanador = document.createElement("DIV");
    groundGanador.appendChild(divGanador);
    divGanador.classList.add("div-ganador");
    let ganador = document.createElement("H2");
    divGanador.appendChild(ganador);
    ganador.innerHTML = `${persona1} ${mazo1} <br> ${persona2} ${mazo2}`;
    let form = document.createElement("FORM");
    divGanador.appendChild(form);
    let loop = document.createElement("DIV");
    form.appendChild(loop);
    loop.innerHTML = `<input type="submit" value="Aceptar" class="form">`;
  }, 800);
}

const ambos = "ambos juegos";

function ganadorSplitAmbos(persona, mazo) {
  setTimeout(() => {
    let groundGanador = document.createElement("DIV");
    container.appendChild(groundGanador);
    groundGanador.classList.add("background-div-ganador");
    let divGanador = document.createElement("DIV");
    groundGanador.appendChild(divGanador);
    divGanador.classList.add("div-ganador");
    let ganador = document.createElement("H2");
    divGanador.appendChild(ganador);
    ganador.innerHTML = `${persona} ${mazo}`;
    let form = document.createElement("FORM");
    divGanador.appendChild(form);
    let loop = document.createElement("DIV");
    form.appendChild(loop);
    loop.innerHTML = `<input type="submit" value="Aceptar" class="form">`;
  }, 800);
}

function ganadorBlackJack(persona) {
  setTimeout(() => {
    let groundGanador = document.createElement("DIV");
    container.appendChild(groundGanador);
    groundGanador.classList.add("background-div-ganador");
    let divGanador = document.createElement("DIV");
    groundGanador.appendChild(divGanador);
    divGanador.classList.add("div-ganador");
    let ganador = document.createElement("H2");
    divGanador.appendChild(ganador);
    ganador.innerHTML = persona;
    if (persona === "Gana El Jugador") {
      totalPlayer.style.backgroundColor = "rgb(218, 165, 32)";
      totalPlayer.style.color = "rgb(49, 49, 49)";
      totalPlayer.innerHTML = "BJ";
      divGanador.style.backgroundColor = "rgb(49, 49, 49)";
      divGanador.style.color = "rgb(218, 165, 32)";
      divGanador.style.border = "5px solid rgb(218, 165, 32)";
    }
    let form = document.createElement("FORM");
    divGanador.appendChild(form);
    let loop = document.createElement("DIV");
    form.appendChild(loop);
    loop.innerHTML = `<input type="submit" value="Aceptar" class="form">`;
  }, 800);
}

function hayAs(receptor, valorDeCartaReceptor) {
  if (
    valorDeCartaReceptor[0] === 1 ||
    valorDeCartaReceptor[1] === 1 ||
    valorDeCartaReceptor[2] === 1
  ) {
    receptor.innerHTML = Number(receptor.innerHTML) + 10;
    console.log(receptor.innerHTML);
  }
}

function AsPasa21(receptor, valorDeCartaReceptor) {
  if (
    valorDeCartaReceptor[0] === 1 ||
    valorDeCartaReceptor[1] === 1 ||
    valorDeCartaReceptor[2] === 1
  ) {
    console.log(receptor.innerHTML);
    if (receptor.innerHTML > 21) {
      receptor.innerHTML = Number(receptor.innerHTML) - 10;
      console.log(receptor.innerHTML);
      valorDeCartaReceptor[0] = 0;
      valorDeCartaReceptor[1] = 0;
      valorDeCartaReceptor[2] = 0;
    }
  }
}

//APUESTAS
// let apuestaInicio = document.querySelector(".apuesta-inicio");
// let mon100 = document.querySelector(".moneda-100");
// let mon500 = document.querySelector(".moneda-500");
// let mon1000 = document.querySelector(".moneda-1000");
// let monedaCambiar = document.getElementById("moneda-cambiar");
// let numeroCambiar = document.querySelector(".numero-cambiar");

// mon100.addEventListener("click", ()=> {
//     monedaCambiar.classList.add("moneda-100");
//     numeroCambiar.innerHTML = 100;
// });
// mon500.addEventListener("click", ()=> {
//     monedaCambiar.classList.add("moneda-500");
//     numeroCambiar.innerHTML = 500;
// });
// mon1000.addEventListener("click", ()=> {
//     monedaCambiar.classList.add("moneda-1000");
//     numeroCambiar.innerHTML = 1000;
// });

repartir.addEventListener("click", () => {
  container.removeChild(repartir);
  // container.removeChild(apuestaInicio);
  let titlePlayer = document.createElement("H2");
  divTitlePlayer.appendChild(titlePlayer);
  titlePlayer.classList.add("title");
  titlePlayer.innerHTML = "Player";
  let buttons = document.createElement("DIV");
  containerButtons.appendChild(buttons);
  buttons.classList.add("div-buttons");

  function remover(btn1, btn2) {
    buttons.removeChild(btn1);
    buttons.removeChild(btn2);
  }

  function intervaloDeCartas() {
    let contadorCrupier = 3;
    createCardCrupier(2);
    hayAs(totalCrupier, valorDeCartaCrupier);
    if (totalCrupier.innerHTML === 21) {
      ganador(crupier);
    }
    let int = setInterval(() => {
      while (
        totalCrupier.innerHTML != 17 &&
        totalCrupier.innerHTML != 18 &&
        totalCrupier.innerHTML != 19 &&
        totalCrupier.innerHTML != 20 &&
        totalCrupier.innerHTML != 21 &&
        totalCrupier.innerHTML < 22
      ) {
        createCardCrupier(contadorCrupier);
        contadorCrupier += 1;
        AsPasa21(totalCrupier, valorDeCartaCrupier);
      }
      if (totalCrupier.innerHTML === 21) {
        if (totalPlayer.innerHTML === totalCrupier.innerHTML) {
          ganador(empate);
          clearInterval(int);
        } else {
          ganador(crupier);
          clearInterval(int);
        }
      }
      if (Number(totalCrupier.innerHTML) > 21) {
        ganador(player);
        clearInterval(int);
      } else if (
        Number(totalCrupier.innerHTML) > Number(totalPlayer.innerHTML)
      ) {
        ganador(crupier);
        clearInterval(int);
      } else if (
        Number(totalCrupier.innerHTML) < Number(totalPlayer.innerHTML)
      ) {
        ganador(player);
        clearInterval(int);
      } else if (
        Number(totalCrupier.innerHTML) === Number(totalPlayer.innerHTML)
      ) {
        ganador(empate);
        clearInterval(int);
      }
    }, 1000);
  }

  if (createCardPlayer(1) === createCardPlayer(2)) {
    hayAs(totalPlayer, valorDeCartaPlayer);
    buttons.innerHTML = `<input type="button" value="Hit" id="hit"><input type="button" value="Stand" id="stand"><input type="button" value="Split" class="input-split">`;
    let playerYplayer2 = document.querySelector(".div-player-y-player2");
    let inputSplit = document.querySelector(".input-split");
    //Split
    inputSplit.addEventListener("click", () => {
      buttons.removeChild(inputSplit);
      buttons.innerHTML = `<input type="button" value="Hit" id="hit" class="input-hit"><input type="button" value="Stand" id="stand" class="input-stand"><input type="button" value="Hit" id="hit" class="input-hit-2escondido"><input type="button" value="Stand" id="stand" class="input-stand-2escondido">`;
      let placePlayer2 = document.createElement("DIV");
      playerYplayer2.appendChild(placePlayer2);
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

      function createCardPlayer2(i) {
        // let random = Math.round(Math.random()*12+1);
        let random = Math.round(Math.random());
        let randomLetra;
        if (random === 2) {
          randomLetra = 2;
        }
        if (random === 3) {
          randomLetra = 3;
        }
        if (random === 4) {
          randomLetra = 4;
        }
        if (random === 5) {
          randomLetra = 5;
        }
        if (random === 6) {
          randomLetra = 6;
        }
        if (random === 7) {
          randomLetra = 7;
        }
        if (random === 8) {
          randomLetra = 8;
        }
        if (random === 9) {
          randomLetra = 9;
        }
        if (random === 10) {
          randomLetra = 10;
        }
        if (random === 11) {
          randomLetra = "J";
          random = 10;
        }
        if (random === 12) {
          randomLetra = "Q";
          random = 10;
        }
        if (random === 0) {
          randomLetra = "K";
          random = 10;
        }
        if (random === 1) {
          randomLetra = "A";
          random = 1;
        }
        let card = document.createElement("DIV");
        placePlayer2.appendChild(card);
        card.classList.add(`card-${i}-player`);
        card.setAttribute("id", "card");
        placePlayer2.appendChild(totalPlayer2);
        totalPlayer2.innerHTML = Number(totalPlayer2.innerHTML) + random;
        card.innerHTML = randomLetra;
        valorDeCartaPlayer2.push(random);
        return random;
      }

      placePlayer.classList.replace("place-player", "place-player-split");
      buttons.classList.replace("div-buttons", "div-buttons-split");
      let carta2 = document.querySelector(".card-2-player");
      let queLetra = carta2.innerHTML;
      if (
        carta2.innerHTML === "K" ||
        carta2.innerHTML === "Q" ||
        carta2.innerHTML === "J"
      ) {
        carta2.innerHTML = 10;
      }
      if (carta2.innerHTML === "A") {
        carta2.innerHTML = 1;
      }
      totalPlayer.innerHTML = totalPlayer.innerHTML - carta2.innerHTML;

      let card = document.createElement("DIV");
      placePlayer2.appendChild(card);
      card.classList.add(`card-1-player`);
      card.setAttribute("id", "card");
      placePlayer2.appendChild(totalPlayer2);
      card.innerHTML = queLetra;
      if (
        carta2.innerHTML === "K" ||
        carta2.innerHTML === "Q" ||
        carta2.innerHTML === "J"
      ) {
        carta2.innerHTML = 10;
      }
      if (carta2.innerHTML === "A") {
        carta2.innerHTML = 1;
      }
      totalPlayer2.innerHTML = carta2.innerHTML;

      let inputHitSplit = document.querySelector(".input-hit");
      let inputHitSplit2 = document.querySelector(".input-hit-2escondido");
      let inputStandSplit = document.querySelector(".input-stand");
      let inputStandSplit2 = document.querySelector(".input-stand-2escondido");

      function remplazarClases() {
        inputHitSplit.classList.replace("input-hit", "input-hit-escondido");
        inputStandSplit.classList.replace(
          "input-stand",
          "input-stand-escondido"
        );
        inputHitSplit2.classList.replace("input-hit-2escondido", "input-hit-2");
        inputStandSplit2.classList.replace(
          "input-stand-2escondido",
          "input-stand-2"
        );
      }

      createCardPlayer2(2);
      carta2.remove();
      valorDeCartaPlayer2.unshift(valorDeCartaPlayer[1]);
      valorDeCartaPlayer.pop();
      console.log(valorDeCartaPlayer2);
      hayAs(totalPlayer2, valorDeCartaPlayer2);
      if (Number(totalPlayer2.innerHTML) === 21) {
        estiloBJ(totalPlayer2);
        let contadorCrupierSplit = 3;
        inputStandSplit.addEventListener("click", () => {
          remover(inputHitSplit, inputStandSplit);
          remover(inputHitSplit2, inputStandSplit2);
          createCardCrupier(2);
          hayAs(totalCrupier, valorDeCartaCrupier);
          if (totalCrupier.innerHTML === 21) {
            ganadorSplitAmbos(crupierSplit, ambos);
          }
          if (totP === undefined) {
            totP = totalPlayer.innerHTML;
          }
          if (totP2 === undefined) {
            totP2 = totalPlayer2.innerHTML;
            if (totP2 === "BJ") {
              totP2 = 21;
            }
          }
          let intSplit = setInterval(() => {
            while (
              totalCrupier.innerHTML != 17 &&
              totalCrupier.innerHTML != 18 &&
              totalCrupier.innerHTML != 19 &&
              totalCrupier.innerHTML != 20 &&
              totalCrupier.innerHTML != 21 &&
              totalCrupier.innerHTML < 22
            ) {
              createCardCrupier(contadorCrupierSplit);
              contadorCrupierSplit += 1;
              AsPasa21(totalCrupier, valorDeCartaCrupier);
            }
            if (totalCrupier.innerHTML === 21) {
              if (totP === totalCrupier.innerHTML) {
                ganador(empate);
                clearInterval(intSplit);
              } else {
                ganador(crupier);
                clearInterval(intSplit);
              }
            }
            console.log(totP);
            console.log(totP2);
            if (totP > 21 && totP2 > totalCrupier.innerHTML) {
              console.log(`juego 1 es mayor que 21 y gano`);
              ganadorSplit(pasasteSplit, mazo1, playerSplit, mazo2);
              estiloWin(totalPlayer2);
              clearInterval(intSplit);
            } else if (
              totalCrupier.innerHTML > 21 &&
              totP <= 21 &&
              totP2 <= 21
            ) {
              console.log(`el crupier es mayor que 21`);
              ganadorSplitAmbos(playerSplit, ambos);
              estiloWin(totalPlayer);
              clearInterval(intSplit);
            } else if (
              totalCrupier.innerHTML > totP &&
              totalCrupier.innerHTML < totP2
            ) {
              console.log(`pierdo y gano`);
              ganadorSplit(crupierSplit, mazo1, playerSplit, mazo2);
              estiloLose(totalPlayer);
              clearInterval(intSplit);
            } else if (
              totalCrupier.innerHTML < totP &&
              totalCrupier.innerHTML < totP2 &&
              totP <= 21 &&
              totP2 <= 21
            ) {
              console.log(`gano y gano`);
              ganadorSplitAmbos(playerSplit, ambos);
              estiloWin(totalPlayer);
              clearInterval(intSplit);
            } else if (
              totalCrupier.innerHTML === totP &&
              totalCrupier.innerHTML < totP2 &&
              totP <= 21
            ) {
              console.log(`empato y gano`);
              ganadorSplit(empateSplit, mazo1, playerSplit, mazo2);
              estiloPush(totalPlayer);
              estiloWin(totalPlayer2);
              clearInterval(intSplit);
            } else {
              clearInterval(intSplit);
              console.log("Hubo un error");
            }
          }, 1000);
        });
        //Observar
      } else {
        console.log("no lo es");
      }

      console.log(valorDeCartaPlayer);
      createCardPlayer(2);
      if (Number(totalPlayer.innerHTML) === 21) {
        remplazarClases();
      }
      console.log(valorDeCartaPlayer);

      // hit y stand del player 1
      let totP;
      let contadorPlayerSplit = 3;
      inputHitSplit.addEventListener("click", () => {
        createCardPlayer(contadorPlayerSplit);
        contadorPlayerSplit += 1;
        AsPasa21(totalPlayer, valorDeCartaPlayer);
        if (totalPlayer.innerHTML > 21) {
          totP = totalPlayer.innerHTML;
          estiloBust(totalPlayer);
          remplazarClases();
        }
      });

      inputStandSplit.addEventListener("click", () => {
        remplazarClases();
      });

      // hit y stand del player 2
      let totP2;
      let contadorPlayerSplit2 = 3;
      inputHitSplit2.addEventListener("click", () => {
        createCardPlayer2(contadorPlayerSplit2);
        contadorPlayerSplit2 += 1;
        AsPasa21(totalPlayer2, valorDeCartaPlayer2);
        if (totP === undefined) {
          totP = totalPlayer.innerHTML;
        }
        if (totP > 21 && totalPlayer2.innerHTML > 21) {
          remover(inputHitSplit2, inputStandSplit2);
          console.log(`los dos son mayor que 21`);
          totP2 = totalPlayer2.innerHTML;
          estiloBust(totalPlayer2);
          ganadorSplitAmbos(pasasteSplit, ambos);
        } else if (totalPlayer2.innerHTML > 21) {
          remover(inputHitSplit2, inputStandSplit2);
          totP2 = totalPlayer2.innerHTML;
          estiloBust(totalPlayer2);
          createCardCrupier(2);
          hayAs(totalCrupier, valorDeCartaCrupier);
          if (totalCrupier.innerHTML === 21) {
            ganadorSplitAmbos(crupierSplit, ambos);
          }
          if (totP2 === undefined) {
            totP2 = totalPlayer2.innerHTML;
          }
          let intSplit = setInterval(() => {
            while (
              totalCrupier.innerHTML != 17 &&
              totalCrupier.innerHTML != 18 &&
              totalCrupier.innerHTML != 19 &&
              totalCrupier.innerHTML != 20 &&
              totalCrupier.innerHTML != 21 &&
              totalCrupier.innerHTML < 22
            ) {
              createCardCrupier(contadorCrupierSplit);
              contadorCrupierSplit += 1;
              AsPasa21(totalCrupier, valorDeCartaCrupier);
            }
            if (totalCrupier.innerHTML === 21) {
              if (totP === totalCrupier.innerHTML) {
                ganador(empate);
                clearInterval(intSplit);
              } else {
                ganador(crupier);
                clearInterval(intSplit);
              }
            }

            if (
              totP > 21 &&
              totP2 < totalCrupier.innerHTML &&
              totalCrupier.innerHTML <= 21
            ) {
              console.log(`juego 1 es mayor que 21 y pierdo`);
              ganadorSplit(pasasteSplit, mazo1, crupierSplit, mazo2);
              estiloLose(totalPlayer2);
              clearInterval(intSplit);
            } else if (totP > 21 && totP2 > totalCrupier.innerHTML) {
              console.log(`juego 1 es mayor que 21 y gano`);
              ganadorSplit(pasasteSplit, mazo1, playerSplit, mazo2);
              estiloWin(totalPlayer2);
              clearInterval(intSplit);
            } else if (
              totP > 21 &&
              totP2 === totalCrupier.innerHTML &&
              totP2 <= 21
            ) {
              console.log(`juego 1 es mayor que 21 y empato`);
              ganadorSplit(pasasteSplit, mazo1, empateSplit, mazo2);
              estiloPush(totalPlayer2);
              clearInterval(intSplit);
            } else if (
              totP2 > 21 &&
              totP < totalCrupier.innerHTML &&
              totalCrupier.innerHTML <= 21
            ) {
              console.log(`juego 2 es mayor que 21 y pierdo`);
              ganadorSplit(crupierSplit, mazo1, pasasteSplit, mazo2);
              estiloLose(totalPlayer);
              clearInterval(intSplit);
            } else if (totP2 > 21 && totP > totalCrupier.innerHTML) {
              console.log(`juego 2 es mayor que 21 y gano`);
              ganadorSplit(playerSplit, mazo1, pasasteSplit, mazo2);
              estiloWin(totalPlayer);
              clearInterval(intSplit);
            } else if (
              totP2 > 21 &&
              totP === totalCrupier.innerHTML &&
              totP <= 21
            ) {
              console.log(`juego 2 es mayor que 21 y empato`);
              ganadorSplit(empateSplit, mazo1, pasasteSplit, mazo2);
              estiloPush(totalPlayer);
              clearInterval(intSplit);
            } else if (
              totP <= 21 &&
              totP2 > 21 &&
              totP > totalCrupier.innerHTML
            ) {
              console.log(`juego 2 es mayor que 21`);
              ganadorSplit(playerSplit, mazo1, pasasteSplit, mazo2);
              estiloWin(totalPlayer);
              clearInterval(intSplit);
            } else if (
              totalCrupier.innerHTML > 21 &&
              totP <= 21 &&
              totP2 <= 21
            ) {
              console.log(`el crupier es mayor que 21`);
              ganadorSplitAmbos(playerSplit, ambos);
              estiloWin(totalPlayer);
              estiloWin(totalPlayer2);
              clearInterval(intSplit);
            } else if (
              totalCrupier.innerHTML > totP &&
              totalCrupier.innerHTML > totP2
            ) {
              console.log(`pierdo y pierdo`);
              ganadorSplitAmbos(crupierSplit, ambos);
              estiloLose(totalPlayer);
              estiloLose(totalPlayer2);
              clearInterval(intSplit);
            } else if (
              totalCrupier.innerHTML > totP &&
              totalCrupier.innerHTML < totP2
            ) {
              console.log(`pierdo y gano`);
              ganadorSplit(crupierSplit, mazo1, playerSplit, mazo2);
              estiloLose(totalPlayer);
              estiloWin(totalPlayer2);
              clearInterval(intSplit);
            } else if (
              totalCrupier.innerHTML > totP &&
              totalCrupier.innerHTML === totP2 &&
              totP2 <= 21
            ) {
              console.log(`pierdo y empato`);
              ganadorSplit(crupierSplit, mazo1, empateSplit, mazo2);
              estiloLose(totalPlayer);
              estiloPush(totalPlayer2);
              clearInterval(intSplit);
            } else if (
              totalCrupier.innerHTML < totP &&
              totalCrupier.innerHTML < totP2
            ) {
              console.log(`gano y gano`);
              ganadorSplitAmbos(playerSplit, ambos);
              estiloWin(totalPlayer);
              estiloWin(totalPlayer2);
              clearInterval(intSplit);
            } else if (
              totalCrupier.innerHTML < totP &&
              totalCrupier.innerHTML > totP2
            ) {
              console.log(`gano y pierdo`);
              ganadorSplit(playerSplit, mazo1, crupierSplit, mazo2);
              estiloWin(totalPlayer);
              estiloLose(totalPlayer2);
              clearInterval(intSplit);
            } else if (
              totalCrupier.innerHTML < totP &&
              totalCrupier.innerHTML === totP2 &&
              totP2 <= 21
            ) {
              console.log(`gano y empato`);
              ganadorSplit(playerSplit, mazo1, empateSplit, mazo2);
              estiloWin(totalPlayer);
              estiloPush(totalPlayer2);
              clearInterval(intSplit);
            } else if (
              totalCrupier.innerHTML === totP &&
              totalCrupier.innerHTML === totP2
            ) {
              console.log(`empato y empato`);
              ganadorSplitAmbos(empateSplit, ambos);
              estiloPush(totalPlayer);
              estiloPush(totalPlayer2);
              clearInterval(intSplit);
            } else if (
              totalCrupier.innerHTML === totP &&
              totalCrupier.innerHTML > totP2 &&
              totP <= 21
            ) {
              console.log(`empato y pierdo`);
              ganadorSplit(empateSplit, mazo1, crupierSplit, mazo2);
              estiloPush(totalPlayer);
              estiloLose(totalPlayer2);
              clearInterval(intSplit);
            } else if (
              totalCrupier.innerHTML === totP &&
              totalCrupier.innerHTML < totP2 &&
              totP <= 21
            ) {
              console.log(`empato y gano`);
              ganadorSplit(empateSplit, mazo1, playerSplit, mazo2);
              estiloPush(totalPlayer);
              estiloWin(totalPlayer2);
              clearInterval(intSplit);
            } else {
              clearInterval(intSplit);
              console.log("Hubo un error");
            }
          }, 1000);
        }
      });

      let contadorCrupierSplit = 3;
      inputStandSplit2.addEventListener("click", () => {
        remover(inputHitSplit2, inputStandSplit2);
        createCardCrupier(2);
        hayAs(totalCrupier, valorDeCartaCrupier);
        if (totalCrupier.innerHTML === 21) {
          ganadorSplitAmbos(crupierSplit, ambos);
        }
        if (totP === undefined) {
          totP = totalPlayer.innerHTML;
        }
        if (totP2 === undefined) {
          totP2 = totalPlayer2.innerHTML;
        }
        let intSplit = setInterval(() => {
          while (
            totalCrupier.innerHTML != 17 &&
            totalCrupier.innerHTML != 18 &&
            totalCrupier.innerHTML != 19 &&
            totalCrupier.innerHTML != 20 &&
            totalCrupier.innerHTML != 21 &&
            totalCrupier.innerHTML < 22
          ) {
            createCardCrupier(contadorCrupierSplit);
            contadorCrupierSplit += 1;
            AsPasa21(totalCrupier, valorDeCartaCrupier);
          }
          if (totalCrupier.innerHTML === 21) {
            if (totP === totalCrupier.innerHTML) {
              ganador(empate);
              clearInterval(intSplit);
            } else {
              ganador(crupier);
              clearInterval(intSplit);
            }
          }
          if (totP > 21 && totP2 > 21) {
            console.log(`los dos son mayor que 21`);
            ganadorSplitAmbos(pasasteSplit, ambos);
            clearInterval(intSplit);
          } else if (
            totP > 21 &&
            totP2 < totalCrupier.innerHTML &&
            totalCrupier.innerHTML <= 21
          ) {
            console.log(`juego 1 es mayor que 21 y pierdo`);
            ganadorSplit(pasasteSplit, mazo1, crupierSplit, mazo2);
            estiloLose(totalPlayer2);
            clearInterval(intSplit);
          } else if (totP > 21 && totP2 > totalCrupier.innerHTML) {
            console.log(`juego 1 es mayor que 21 y gano`);
            ganadorSplit(pasasteSplit, mazo1, playerSplit, mazo2);
            estiloWin(totalPlayer2);
            clearInterval(intSplit);
          } else if (totP > 21 && totalCrupier.innerHTML > 21) {
            console.log(
              `juego 1 es mayor que 21 y gano porq se pasa el crupier`
            );
            ganadorSplit(pasasteSplit, mazo1, playerSplit, mazo2);
            estiloWin(totalPlayer2);
            clearInterval(intSplit);
          } else if (
            totP > 21 &&
            totP2 === totalCrupier.innerHTML &&
            totP2 <= 21
          ) {
            console.log(`juego 1 es mayor que 21 y empato`);
            ganadorSplit(pasasteSplit, mazo1, empateSplit, mazo2);
            estiloPush(totalPlayer2);
            clearInterval(intSplit);
          } else if (
            totP <= 21 &&
            totP2 > 21 &&
            totP > totalCrupier.innerHTML
          ) {
            console.log(`juego 2 es mayor que 21`);
            ganadorSplit(playerSplit, mazo1, pasasteSplit, mazo2);
            estiloWin(totalPlayer);
            clearInterval(intSplit);
          } else if (totalCrupier.innerHTML > 21 && totP <= 21 && totP2 <= 21) {
            console.log(`el crupier es mayor que 21`);
            ganadorSplitAmbos(playerSplit, ambos);
            estiloWin(totalPlayer);
            estiloWin(totalPlayer2);
            clearInterval(intSplit);
          } else if (
            totalCrupier.innerHTML > totP &&
            totalCrupier.innerHTML > totP2 &&
            totalCrupier.innerHTML <= 21
          ) {
            console.log(`pierdo y pierdo`);
            ganadorSplitAmbos(crupierSplit, ambos);
            estiloLose(totalPlayer);
            estiloLose(totalPlayer2);
            clearInterval(intSplit);
          } else if (
            totalCrupier.innerHTML > totP &&
            totalCrupier.innerHTML < totP2
          ) {
            console.log(`pierdo y gano`);
            ganadorSplit(crupierSplit, mazo1, playerSplit, mazo2);
            estiloLose(totalPlayer);
            estiloWin(totalPlayer2);
            clearInterval(intSplit);
          } else if (
            totalCrupier.innerHTML > totP &&
            totalCrupier.innerHTML === totP2 &&
            totP2 <= 21
          ) {
            console.log(`pierdo y empato`);
            ganadorSplit(crupierSplit, mazo1, empateSplit, mazo2);
            estiloLose(totalPlayer);
            estiloPush(totalPlayer2);
            clearInterval(intSplit);
          } else if (
            totalCrupier.innerHTML < totP &&
            totalCrupier.innerHTML < totP2 &&
            totP <= 21 &&
            totP2 <= 21
          ) {
            console.log(`gano y gano`);
            ganadorSplitAmbos(playerSplit, ambos);
            estiloWin(totalPlayer);
            estiloWin(totalPlayer2);
            clearInterval(intSplit);
          } else if (
            totalCrupier.innerHTML < totP &&
            totalCrupier.innerHTML > totP2 &&
            totP <= 21
          ) {
            console.log(`gano y pierdo`);
            ganadorSplit(playerSplit, mazo1, crupierSplit, mazo2);
            estiloWin(totalPlayer);
            estiloLose(totalPlayer2);
            clearInterval(intSplit);
          } else if (
            totalCrupier.innerHTML < totP &&
            totalCrupier.innerHTML === totP2 &&
            totP2 <= 21
          ) {
            console.log(`gano y empato`);
            ganadorSplit(playerSplit, mazo1, empateSplit, mazo2);
            estiloWin(totalPlayer);
            estiloPush(totalPlayer2);
            clearInterval(intSplit);
          } else if (
            totalCrupier.innerHTML === totP &&
            totalCrupier.innerHTML === totP2
          ) {
            console.log(`empato y empato`);
            ganadorSplitAmbos(empateSplit, ambos);
            estiloPush(totalPlayer);
            estiloPush(totalPlayer2);
            clearInterval(intSplit);
          } else if (
            totalCrupier.innerHTML === totP &&
            totalCrupier.innerHTML > totP2 &&
            totP <= 21
          ) {
            console.log(`empato y pierdo`);
            ganadorSplit(empateSplit, mazo1, crupierSplit, mazo2);
            estiloPush(totalPlayer);
            estiloLose(totalPlayer2);
            clearInterval(intSplit);
          } else if (
            totalCrupier.innerHTML === totP &&
            totalCrupier.innerHTML < totP2 &&
            totP <= 21
          ) {
            console.log(`empato y gano`);
            ganadorSplit(empateSplit, mazo1, playerSplit, mazo2);
            estiloPush(totalPlayer);
            estiloWin(totalPlayer2);
            clearInterval(intSplit);
          } else {
            clearInterval(intSplit);
            console.log("Hubo un error");
          }
        }, 1000);
      });
    });

    // NO SPLIT
    // hit si no split
    let contadorPlayer = 3;
    let inputHit = document.getElementById("hit");
    inputHit.addEventListener("click", () => {
      if (
        buttons.innerHTML ===
        `<input type="button" value="Hit" id="hit"><input type="button" value="Stand" id="stand"><input type="button" value="Split" class="input-split">`
      ) {
        inputSplit.classList.replace("input-split", "input-split-escondido");
      }
      createCardPlayer(contadorPlayer);
      contadorPlayer += 1;
      if (totalPlayer.innerHTML > 21) {
        ganador(pasaste);
        remover(inputHit, inputStand);
      }
    });

    let titleCrupier = document.createElement("H2");
    divTitleCrupier.appendChild(titleCrupier);
    titleCrupier.classList.add("title");
    titleCrupier.innerHTML = "Crupier";
    createCardCrupier(1);

    let card0 = document.createElement("DIV");
    placeCrupier.appendChild(card0);
    card0.classList.add(`card-0-crupier`);
    card0.setAttribute("id", "card-0");
    placeCrupier.appendChild(totalCrupier);

    // stand si no split
    let inputStand = document.getElementById("stand");
    inputStand.addEventListener("click", () => {
      if (
        buttons.innerHTML ===
        `<input type="button" value="Hit" id="hit"><input type="button" value="Stand" id="stand"><input type="button" value="Split" class="input-split">`
      ) {
        buttons.removeChild(inputSplit);
      }
      remover(inputHit, inputStand);
      intervaloDeCartas();
    });
  } else {
    hayAs(totalPlayer, valorDeCartaPlayer);
    buttons.innerHTML = `<input type="button" value="Hit" id="hit"><input type="button" value="Stand" id="stand">`;
    let contadorPlayer = 3;
    let inputHit = document.getElementById("hit");
    inputHit.addEventListener("click", () => {
      createCardPlayer(contadorPlayer);
      contadorPlayer += 1;
      AsPasa21(totalPlayer, valorDeCartaPlayer);
      if (totalPlayer.innerHTML > 21) {
        ganador(pasaste);
        remover(inputHit, inputStand);
      }
    });

    let titleCrupier = document.createElement("H2");
    divTitleCrupier.appendChild(titleCrupier);
    titleCrupier.classList.add("title");
    titleCrupier.innerHTML = "Crupier";
    createCardCrupier(1);

    let card0 = document.createElement("DIV");
    placeCrupier.appendChild(card0);
    card0.classList.add(`card-0-crupier`);
    card0.setAttribute("id", "card-0");
    placeCrupier.appendChild(totalCrupier);

    let inputStand = document.getElementById("stand");
    inputStand.addEventListener("click", () => {
      remover(inputHit, inputStand);
      intervaloDeCartas();
    });
    if (totalPlayer.innerHTML === "21") {
      ganadorBlackJack(player);
      remover(inputHit, inputStand);
    }
  }
}); //fin del play
