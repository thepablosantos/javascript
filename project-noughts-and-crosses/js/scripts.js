// Clones for X and O
const x = document.querySelector(".x");
const o = document.querySelector(".o");

// All board boxes
const boxes = document.querySelectorAll(".box");

// Mode selection buttons
const twoPlayersBtn = document.getElementById("two-players");
const aiPlayersBtn = document.getElementById("ai-players");

// Difficulty container (only shown for AI)
const difficultyContainer = document.getElementById("difficulty-container");
const difficultySelect = document.getElementById("difficulty");

// Name form
const nameFormSection = document.getElementById("name-form");
const twoPlayersInputs = document.getElementById("two-players-inputs");
const aiInputs = document.getElementById("ai-inputs");
const startGameBtn = document.getElementById("start-game-btn");

// Name inputs
const player1Input = document.getElementById("player1-input");
const player2Input = document.getElementById("player2-input");
const player1AiInput = document.getElementById("player1-ai-input");

// Game container
const containerSection = document.getElementById("container");

// Scoreboard
const player1NameElem = document.getElementById("player1-name");
const player2NameElem = document.getElementById("player2-name");
const xScoreDisplay = document.getElementById("x-scoreboard-1");
const oScoreDisplay = document.getElementById("o-scoreboard-1");
let xScore = 0;
let oScore = 0;

// Best of X
const bestOfSelect = document.getElementById("bestOfSelect");
const bestOfDisplay = document.getElementById("bestOfDisplay");
let bestOf = 3;
let roundsNeeded = Math.ceil(bestOf / 2);

// Modal
const modal = document.getElementById("message-modal");
const modalText = document.getElementById("modal-text");
const rematchBtn = document.getElementById("rematch-btn");

// Theme toggle
const themeToggleBtn = document.getElementById("theme-toggle-btn");

// State
let secondPlayer = ""; // 'human' or 'ai'
let difficulty = "easy";
let player1 = 0; // moves count for X
let player2 = 0; // moves count for O
let playerOneName = "Player 1";
let playerTwoName = "Player 2";

/* Toggle fade-in: hide => show (with .fade-transition) */
function fadeIn(element) {
  element.classList.remove("hide");
  element.classList.add("show");
}
function fadeOut(element) {
  element.classList.remove("show");
  element.classList.add("hide");
}

// Event: click "2 Players"
twoPlayersBtn.addEventListener("click", () => {
  secondPlayer = "human";

  fadeOut(difficultyContainer);
  fadeIn(nameFormSection);
  fadeIn(twoPlayersInputs);
  fadeOut(aiInputs);
});

// Event: click "Play vs AI"
aiPlayersBtn.addEventListener("click", () => {
  secondPlayer = "ai";

  fadeIn(difficultyContainer);
  fadeIn(nameFormSection);
  fadeIn(aiInputs);
  fadeOut(twoPlayersInputs);
});

/* Best of selection */
bestOfSelect.addEventListener("change", () => {
  bestOf = parseInt(bestOfSelect.value);
  roundsNeeded = Math.ceil(bestOf / 2);
});

/* Start game */
startGameBtn.addEventListener("click", () => {
  if (secondPlayer === "human") {
    playerOneName = player1Input.value.trim() || "Player 1";
    playerTwoName = player2Input.value.trim() || "Player 2";
  } else {
    playerOneName = player1AiInput.value.trim() || "Player 1";
    playerTwoName = "AI";
  }
  difficulty = difficultySelect.value;

  player1NameElem.textContent = playerOneName;
  player2NameElem.textContent = playerTwoName;
  bestOfDisplay.textContent = bestOf;

  loadScore();

  fadeOut(nameFormSection);
  fadeIn(containerSection);
});

/* Theme toggle: dark => light => dark */
themeToggleBtn.addEventListener("click", () => {
  const bodyElem = document.body;
  if (bodyElem.classList.contains("dark-mode")) {
    bodyElem.classList.remove("dark-mode");
    bodyElem.classList.add("light-mode");
    themeToggleBtn.textContent = "Dark Mode";
  } else if (bodyElem.classList.contains("light-mode")) {
    bodyElem.classList.remove("light-mode");
    bodyElem.classList.add("dark-mode");
    themeToggleBtn.textContent = "Light Mode";
  } else {
    // default if none is set
    bodyElem.classList.add("light-mode");
    themeToggleBtn.textContent = "Dark Mode";
  }
});

/* Box click events */
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (box.childNodes.length === 0) {
      let el = checkEl(player1, player2);
      let cloneEl = el.cloneNode(true);
      box.appendChild(cloneEl);

      if (player1 === player2) {
        player1++;
      } else {
        player2++;
      }

      checkWinCondition();

      if (secondPlayer === "ai" && (player1 > player2)) {
        setTimeout(aiPlay, 300);
      }
    }
  });
});

/* Decide if next is X or O */
function checkEl(p1, p2) {
  return p1 === p2 ? x : o;
}

/* AI logic */
function aiPlay() {
  if (difficulty === "easy") {
    aiEasy();
  } else if (difficulty === "medium") {
    aiMedium();
  } else {
    aiHard();
  }
  checkWinCondition();
}

/* AI - easy */
function aiEasy() {
  let empty = Array.from(boxes).filter(b => b.childNodes.length === 0);
  if (empty.length > 0) {
    let rnd = Math.floor(Math.random() * empty.length);
    empty[rnd].appendChild(o.cloneNode(true));
    player2++;
  }
}

/* AI - medium */
function aiMedium() {
  if (tryBlockWin()) {
    player2++;
  } else {
    aiEasy();
  }
}

/* Try to block two X in a row */
function tryBlockWin() {
  let combos = getCombos();
  for (let i = 0; i < combos.length; i++) {
    let combo = combos[i];
    let countX = combo.filter(c => c === "x").length;
    let countO = combo.filter(c => c === "o").length;
    if (countX === 2 && countO === 0) {
      let emptyIndex = combo.indexOf("");
      if (emptyIndex >= 0) {
        let blockId = getComboBlockIds(i)[emptyIndex];
        let blockElem = document.getElementById(blockId);
        if (blockElem && blockElem.childNodes.length === 0) {
          blockElem.appendChild(o.cloneNode(true));
          return true;
        }
      }
    }
  }
  return false;
}

/* AI - hard (simple minimax) */
function aiHard() {
  let bestScore = -Infinity;
  let moveIndex = null;

  for (let i = 0; i < boxes.length; i++) {
    if (boxes[i].childNodes.length === 0) {
      boxes[i].appendChild(o.cloneNode(true));
      let score = miniMax(false);
      boxes[i].innerHTML = "";
      if (score > bestScore) {
        bestScore = score;
        moveIndex = i;
      }
    }
  }

  if (moveIndex !== null) {
    boxes[moveIndex].appendChild(o.cloneNode(true));
    player2++;
  }
}

/* Simple minimax */
function miniMax(isMaximizing) {
  let result = checkImmediateWin();
  if (result !== null) {
    if (result === "o") return 10;
    if (result === "x") return -10;
    if (result === "draw") return 0;
  }

  if (isMaximizing) {
    let bestScore = -Infinity;
    for (let i = 0; i < boxes.length; i++) {
      if (boxes[i].childNodes.length === 0) {
        boxes[i].appendChild(o.cloneNode(true));
        let score = miniMax(false);
        boxes[i].innerHTML = "";
        if (score > bestScore) bestScore = score;
      }
    }
    return bestScore;
  } else {
    let bestScore = Infinity;
    for (let i = 0; i < boxes.length; i++) {
      if (boxes[i].childNodes.length === 0) {
        boxes[i].appendChild(x.cloneNode(true));
        let score = miniMax(true);
        boxes[i].innerHTML = "";
        if (score < bestScore) bestScore = score;
      }
    }
    return bestScore;
  }
}

/* Check immediate win or draw */
function checkImmediateWin() {
  let combos = getCombos();
  for (let c of combos) {
    if (c.every(v => v === "x")) return "x";
    if (c.every(v => v === "o")) return "o";
  }
  let filled = Array.from(boxes).filter(b => b.childNodes.length > 0).length;
  if (filled === 9) return "draw";
  return null;
}

/* Generate combos (3x3) */
function getCombos() {
  let b = [...Array(9)].map((_, i) => getChildClass(document.getElementById(`block-${i+1}`)));
  return [
    [b[0], b[1], b[2]],
    [b[3], b[4], b[5]],
    [b[6], b[7], b[8]],
    [b[0], b[3], b[6]],
    [b[1], b[4], b[7]],
    [b[2], b[5], b[8]],
    [b[0], b[4], b[8]],
    [b[2], b[4], b[6]],
  ];
}

/* Map combo index to actual block IDs */
function getComboBlockIds(i) {
  let combosIds = [
    ["block-1","block-2","block-3"],
    ["block-4","block-5","block-6"],
    ["block-7","block-8","block-9"],
    ["block-1","block-4","block-7"],
    ["block-2","block-5","block-8"],
    ["block-3","block-6","block-9"],
    ["block-1","block-5","block-9"],
    ["block-3","block-5","block-7"],
  ];
  return combosIds[i];
}

function getChildClass(elem) {
  if (elem.childNodes.length > 0) {
    return elem.childNodes[0].className;
  }
  return "";
}

/* Check if there's a winner */
function checkWinCondition() {
  let combos = getCombos();
  for (let combo of combos) {
    if (combo.every(c => c === "x")) {
      declareWinner("x");
      return;
    } else if (combo.every(c => c === "o")) {
      declareWinner("o");
      return;
    }
  }
  let filled = Array.from(boxes).filter(b => b.childNodes.length > 0).length;
  if (filled === 9) {
    declareWinner("draw");
  }
}

/* Declare winner or draw */
function declareWinner(winner) {
  let msg = "";
  if (winner === "x") {
    xScore++;
    xScoreDisplay.textContent = xScore;
    msg = `${playerOneName} venceu!`;
  } else if (winner === "o") {
    oScore++;
    oScoreDisplay.textContent = oScore;
    msg = `${playerTwoName} venceu!`;
  } else {
    msg = "Empate!";
  }
  modalText.textContent = msg;
  modal.classList.remove("hide");
  saveScore();

  if (xScore >= roundsNeeded || oScore >= roundsNeeded) {
    // match over if needed
  }
}

/* Rematch click */
rematchBtn.addEventListener("click", () => {
  modal.classList.add("hide");
  resetBoard();
});

/* Reset the board for next round */
function resetBoard() {
  boxes.forEach(b => b.innerHTML = "");
  player1 = 0;
  player2 = 0;
}

/* Save/Load scoreboard from localStorage */
function saveScore() {
  let data = {
    playerOneName: playerOneName,
    playerTwoName: playerTwoName,
    xScore: xScore,
    oScore: oScore,
    bestOf: bestOf
  };
  localStorage.setItem("tictactoeScore", JSON.stringify(data));
}

function loadScore() {
  let saved = localStorage.getItem("tictactoeScore");
  if (saved) {
    let data = JSON.parse(saved);
    if (
      data.playerOneName === playerOneName &&
      data.playerTwoName === playerTwoName &&
      data.bestOf === bestOf
    ) {
      xScore = data.xScore;
      oScore = data.oScore;
      xScoreDisplay.textContent = xScore;
      oScoreDisplay.textContent = oScore;
    } else {
      xScore = 0;
      oScore = 0;
      xScoreDisplay.textContent = 0;
      oScoreDisplay.textContent = 0;
    }
  }
}