// Seleciona símbolos X e O “ocultos” para clonar
let x = document.querySelector(".x");
let o = document.querySelector(".o");

// Seleciona TODAS as boxes (NodeList)
let boxes = document.querySelectorAll(".box");

// Botões do menu
const twoPlayersBtn = document.getElementById("two-players");
const aiPlayersBtn = document.getElementById("ai-players");

// Mensagem de resultado
let messageContainer = document.getElementById("message");
let messageText = document.querySelector("#message p");

// Placar
let xScoreDisplay = document.getElementById("x-scoreboard-1");
let oScoreDisplay = document.getElementById("o-scoreboard-1");
let xScore = 0;
let oScore = 0;

// Controla se o segundo player é humano ou AI
let secondPlayer = "";

// Contador de jogadas
let player1 = 0;
let player2 = 0;

/* =========================
   EVENTOS DE ESCOLHA DE MODO
   ========================= */
twoPlayersBtn.addEventListener("click", function () {
  secondPlayer = "human";

  // Mostra container do jogo, remove a classe .hide
  document.getElementById("container").classList.remove("hide");
});

aiPlayersBtn.addEventListener("click", function () {
  secondPlayer = "ai";

  // Mostra container do jogo, remove a classe .hide
  document.getElementById("container").classList.remove("hide");
});

/* =========================
   EVENTOS DE CLIQUE NO TABULEIRO
   ========================= */
for (let i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener("click", function () {
    // Verifica se a box está vazia
    if (this.childNodes.length == 0) {
      let el = checkEl(player1, player2);
      let cloneEl = el.cloneNode(true);

      this.appendChild(cloneEl);

      // Incrementa contador para alternar jogador
      if (player1 == player2) {
        player1++;
      } else {
        player2++;
      }

      // Checa se alguém ganhou ou empatou
      checkWinCondition();

      // Se for modo AI e ainda não houve vitória, IA faz jogada
      if (secondPlayer === "ai" && (player1 > player2)) {
        aiPlay();
      }
    }
  });
}

/* =========================
   FUNÇÃO PARA DETERMINAR SE O PRÓXIMO SÍMBOLO É X OU O
   ========================= */
function checkEl(player1, player2) {
  if (player1 == player2) {
    // X
    return x;
  } else {
    // O
    return o;
  }
}

/* =========================
   FUNÇÃO DE LÓGICA PARA “IA” SIMPLES
   ========================= */
function aiPlay() {
  // Procura todas as boxes vazias
  let emptyBoxes = [];
  for (let i = 0; i < boxes.length; i++) {
    if (boxes[i].childNodes.length == 0) {
      emptyBoxes.push(boxes[i]);
    }
  }

  if (emptyBoxes.length > 0) {
    // Escolhe uma box aleatória
    let randomIndex = Math.floor(Math.random() * emptyBoxes.length);
    let box = emptyBoxes[randomIndex];

    // Clona o O
    let cloneO = o.cloneNode(true);
    box.appendChild(cloneO);

    // Contador de jogadas
    player2++;

    // Checa novamente vitória/empate
    checkWinCondition();
  }
}

/* =========================
   FUNÇÃO QUE VERIFICA VITÓRIA OU EMPATE
   ========================= */
function checkWinCondition() {
  // Obtém cada célula do tabuleiro
  let b1 = document.getElementById("block-1");
  let b2 = document.getElementById("block-2");
  let b3 = document.getElementById("block-3");
  let b4 = document.getElementById("block-4");
  let b5 = document.getElementById("block-5");
  let b6 = document.getElementById("block-6");
  let b7 = document.getElementById("block-7");
  let b8 = document.getElementById("block-8");
  let b9 = document.getElementById("block-9");

  // Função auxiliar para pegar 'x' ou 'o' de uma célula
  function getBoxClass(box) {
    if (box.childNodes.length > 0) {
      return box.childNodes[0].className;
    }
    return "";
  }

  let b1Child = getBoxClass(b1);
  let b2Child = getBoxClass(b2);
  let b3Child = getBoxClass(b3);
  let b4Child = getBoxClass(b4);
  let b5Child = getBoxClass(b5);
  let b6Child = getBoxClass(b6);
  let b7Child = getBoxClass(b7);
  let b8Child = getBoxClass(b8);
  let b9Child = getBoxClass(b9);

  // Array de possíveis combinações que geram vitória
  let combos = [
    // Linhas
    [b1Child, b2Child, b3Child],
    [b4Child, b5Child, b6Child],
    [b7Child, b8Child, b9Child],
    // Colunas
    [b1Child, b4Child, b7Child],
    [b2Child, b5Child, b8Child],
    [b3Child, b6Child, b9Child],
    // Diagonais
    [b1Child, b5Child, b9Child],
    [b3Child, b5Child, b7Child]
  ];

  // Verifica se alguma combinação é só 'x' ou só 'o'
  for (let combo of combos) {
    if (combo[0] === 'x' && combo[1] === 'x' && combo[2] === 'x') {
      // X venceu
      declareWinner('x');
      return;
    } else if (combo[0] === 'o' && combo[1] === 'o' && combo[2] === 'o') {
      // O venceu
      declareWinner('o');
      return;
    }
  }

  // Se ninguém ganhou, verifica se deu empate
  let counter = 0;
  for (let i = 0; i < boxes.length; i++) {
    if (boxes[i].childNodes.length > 0) {
      counter++;
    }
  }
  if (counter === 9) {
    // Empate
    declareWinner('draw');
  }
}

/* =========================
   TRATA VENCEDOR OU EMPATE
   ========================= */
function declareWinner(winner) {
  if (winner === 'x') {
    xScore++;
    xScoreDisplay.textContent = xScore;
    showMessage("X venceu!");
  } else if (winner === 'o') {
    oScore++;
    oScoreDisplay.textContent = oScore;
    showMessage("O venceu!");
  } else {
    showMessage("Empate!");
  }

  // Limpa o tabuleiro para a próxima partida
  resetBoard();
}

/* =========================
   MOSTRA MENSAGEM CENTRAL
   ========================= */
function showMessage(msg) {
  messageText.textContent = msg;
  // Exibe p dentro de #message
  messageText.style.display = "block";

  // Depois de 1.5s, esconde a mensagem novamente
  setTimeout(() => {
    messageText.style.display = "none";
  }, 1500);
}

/* =========================
   REINICIA O TABULEIRO
   ========================= */
function resetBoard() {
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].innerHTML = ""; // Remove X ou O
  }
  // Zera contadores de jogada
  player1 = 0;
  player2 = 0;
}