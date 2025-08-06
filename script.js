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
  const playerTurnHeading = document.querySelector("#player-turn-heading");

  const print = function (turn) {
    playerTurnHeading.textContent = `Player ${turn}'s turn`;
  };

  const printWinner = function (winner) {
    playerTurnHeading.textContent = `Player ${winner} won!`;
  };

  const printDraw = function () {
    playerTurnHeading.textContent = `It's a Draw!`;
  };

  return { print, printWinner, printDraw };
})();

const gameController = (function () {
  let turn = "O";
  let isGameOver = false;

  const playerTurn = function (boxId) {
    const box = document.querySelector(`#${boxId}`);

    if (!isGameOver) {
      if (!box.textContent) {
        if (turn === "O") {
          box.textContent = "O";

          if (gameStatusController.checkIfPlayerWon("O")) {
            isGameOver = true;
            return;
          }

          turn = "X";
          printController.print(turn);
        } else if (turn === "X") {
          box.textContent = "X";

          if (gameStatusController.checkIfPlayerWon("X")) {
            isGameOver = true;
            return;
          }

          turn = "O";
          printController.print(turn);
        }

        if (gameStatusController.checkIfDraw()) {
          isGameOver = true;
          return;
        }
      }
    }
  };

  return { playerTurn };
})();

const gameStatusController = (function () {
  const boxes = Array.from(document.querySelectorAll(".box"));

  const checkIfPlayerWon = function (player) {
    const filteredBoxes = boxes.filter((box) => box.textContent === player);

    if (
      filteredBoxes.some((box) => box.id === "box-0") &&
      filteredBoxes.some((box) => box.id === "box-1") &&
      filteredBoxes.some((box) => box.id === "box-2")
    ) {
      printController.printWinner(player);
      return true;
    } else if (
      filteredBoxes.some((box) => box.id === "box-3") &&
      filteredBoxes.some((box) => box.id === "box-4") &&
      filteredBoxes.some((box) => box.id === "box-5")
    ) {
      printController.printWinner(player);
      return true;
    } else if (
      filteredBoxes.some((box) => box.id === "box-6") &&
      filteredBoxes.some((box) => box.id === "box-7") &&
      filteredBoxes.some((box) => box.id === "box-8")
    ) {
      printController.printWinner(player);
      return true;
    } else if (
      filteredBoxes.some((box) => box.id === "box-0") &&
      filteredBoxes.some((box) => box.id === "box-3") &&
      filteredBoxes.some((box) => box.id === "box-6")
    ) {
      printController.printWinner(player);
      return true;
    } else if (
      filteredBoxes.some((box) => box.id === "box-1") &&
      filteredBoxes.some((box) => box.id === "box-4") &&
      filteredBoxes.some((box) => box.id === "box-7")
    ) {
      printController.printWinner(player);
      return true;
    } else if (
      filteredBoxes.some((box) => box.id === "box-2") &&
      filteredBoxes.some((box) => box.id === "box-5") &&
      filteredBoxes.some((box) => box.id === "box-8")
    ) {
      printController.printWinner(player);
      return true;
    } else if (
      filteredBoxes.some((box) => box.id === "box-0") &&
      filteredBoxes.some((box) => box.id === "box-4") &&
      filteredBoxes.some((box) => box.id === "box-8")
    ) {
      printController.printWinner(player);
      return true;
    } else if (
      filteredBoxes.some((box) => box.id === "box-2") &&
      filteredBoxes.some((box) => box.id === "box-4") &&
      filteredBoxes.some((box) => box.id === "box-6")
    ) {
      printController.printWinner(player);
      return true;
    }

    return false;
  };

  const checkIfDraw = function () {
    const isDraw = boxes.every((box) => box.textContent);

    if (isDraw) {
      printController.printDraw();
      return true;
    }

    return false;
  };

  return { checkIfPlayerWon, checkIfDraw };
})();
