const playerTurnHeading = document.querySelector("#player-turn-heading");

const print = function (playerTurn) {
  playerTurnHeading.textContent = `Player ${playerTurn}'s turn`;
};

const printWinner = function (winner) {
  playerTurnHeading.textContent = `Player ${winner} won!`;
};

const printDraw = function () {
  playerTurnHeading.textContent = `It's a Draw!`;
};

export { print, printWinner, printDraw };
