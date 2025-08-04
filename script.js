const gameBoxes = Array.from(document.querySelectorAll(".box"));
const resetButton = document.querySelector("#reset-button");

gameBoxes.forEach((box) => {
  box.addEventListener("click", function (e) {
    gameController.playerTurn(e.target.getAttribute("id"));
  });
});

resetButton.addEventListener("click", function (e) {
  location.reload();
});

const printController = (function () {
  const print = function (turn) {
    const playerTurnHeading = document.querySelector("#player-turn-heading");
    playerTurnHeading.textContent = `Player ${turn}'s turn`;
  };

  return { print };
})();

const gameController = (function () {
  let turn = "O";

  const playerTurn = function (boxId) {
    const box = document.querySelector(`#${boxId}`);

    if (!box.textContent) {
      if (turn === "O") {
        box.textContent = "O";
        turn = "X";
        printController.print(turn);
      } else if (turn === "X") {
        box.textContent = "X";
        turn = "O";
        printController.print(turn);
      }
    }
  };

  return { playerTurn };
})();
