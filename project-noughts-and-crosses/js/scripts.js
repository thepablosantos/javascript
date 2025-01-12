// Seleciona símbolos X e O “ocultos” para clonar
let x = document.querySelector(".x");
let o = document.querySelector(".o");

// Seleciona TODAS as boxes
let boxes = document.querySelectorAll(".box");

// Botões do menu inicial
const twoPlayersBtn = document.getElementById("two-players");
const aiPlayersBtn = document.getElementById("ai-players");

// Seção de formulário de nomes
const nameFormSection = document.getElementById("name-form");
const twoPlayersInputs = document.getElementById("two-players-inputs");
const aiInputs = document.getElementById("ai-inputs");
const startGameBtn = document.getElementById("start-game-btn");

// Inputs
const player1Input = document.getElementById("player1-input");
const player2Input = document.getElementById("player2-input");
const player1AiInput = document.getElementById("player1-ai-input");

// Container do jogo
const containerSection = document.getElementById("container");

// Placar
let player1NameElem = document.getElementById("player1-name");
let player2NameElem = document.getElementById("player2-name");
let xScoreDisplay = document.getElementById("x-scoreboard-1");
let oScoreDisplay = document.getElementById("o-scoreboard-1");
let xScore = 0;
let oScore = 0;

// Mensagem (modal)
const modal = document.getElementById("message-modal");
const modalText = document.getElementById("modal-text");
const closeModalBtn = document.getElementById("close-modal-btn");

// Variáveis de estado
let secondPlayer = "";       // "human" ou "ai"
let player1 = 0;            // contagem de jogadas X
let player2 = 0;            // contagem de jogadas O
let playerOneName = "Player 1";
let playerTwoName = "Player 2";

/* =========================
   EVENTOS DE ESCOLHA DE MODO
   ========================= */
twoPlayersBtn.addEventListener("click", function () {
  // Modo 2 players
  secondPlayer = "human";
  // Mostra formulário de nomes
  nameFormSection.classList.remove("hide");
  // Mostra inputs de 2 players
  twoPlayersInputs.classList.remove("hide");
  aiInputs.classList.add("hide");
});

aiPlayersBtn.addEventListener("click", function () {
  // Modo AI
  secondPlayer = "ai";
  // Mostra formulário de nomes
  nameFormSection.classList.remove("hide");
  // Mostra inputs de AI
  aiInputs.classList.remove("hide");
  twoPlayersInputs.classList.add("hide");
});

/* =========================
   EVENTO DE "START GAME"
   ========================= */
startGameBtn.addEventListener("click", function () {
  // Lê os nomes do(s) campo(s)
  if (secondPlayer === "human") {
    playerOneName = player1Input.value.trim() || "Player 1";
    playerTwoName = player2Input.value.trim() || "Player 2";
  } else {
    playerOneName = player1AiInput.value.trim() || "Player 1";
    playerTwoName = "AI"; // Nome fixo para AI
  }

  // Atualiza placar com nomes
  player1NameElem.textContent = playerOneName;
  player2NameElem.textContent = playerTwoName;

  // Esconde o formulário e tela inicial
  nameFormSection.classList.add("hide");
  
  // Exibe container do jogo
  containerSection.classList.remove("hide");
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

  // Função auxiliar para pegar 'x' ou 'o'
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
  let filled = 0;
  for (let i = 0; i < boxes.length; i++) {
    if (boxes[i].childNodes.length > 0) {
      filled++;
    }
  }
  if (filled === 9) {
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
    showMessage(`${playerOneName} venceu!`);
  } else if (winner === 'o') {
    oScore++;
    oScoreDisplay.textContent = oScore;
    showMessage(`${playerTwoName} venceu!`);
  } else {
    showMessage("Empate!");
  }
}

/* =========================
   MOSTRA MENSAGEM (USANDO MODAL)
   ========================= */
function showMessage(msg) {
  modalText.textContent = msg;
  // Exibe o modal
  modal.classList.remove("hide");
}

/* =========================
   FECHAR MODAL
   ========================= */
closeModalBtn.addEventListener("click", function () {
  // Fecha modal
  modal.classList.add("hide");
  // Limpa o tabuleiro para a próxima partida
  resetBoard();
});

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