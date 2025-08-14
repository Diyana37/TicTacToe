import { checkIfPlayerWon, checkIfDraw } from "./gameStatusController.js";
import { print } from "./printController.js";

let turn = "O";
let isGameOver = false;

const playerTurn = function (boxId) {
  const box = document.querySelector(`#${boxId}`);

  if (!isGameOver) {
    if (!box.textContent) {
      if (turn === "O") {
        box.textContent = "O";

        if (checkIfPlayerWon("O")) {
          isGameOver = true;
          return;
        }

        turn = "X";
        print(turn);
      } else if (turn === "X") {
        box.textContent = "X";

        if (checkIfPlayerWon("X")) {
          isGameOver = true;
          return;
        }

        turn = "O";
        print(turn);
      }

      if (checkIfDraw()) {
        isGameOver = true;
        return;
      }
    }
  }
};

export default playerTurn;
