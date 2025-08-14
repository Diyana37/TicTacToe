import { printWinner, printDraw } from "./printController.js";

const boxes = Array.from(document.querySelectorAll(".box"));

const checkIfPlayerWon = function (playerTurn) {
  const filteredBoxes = boxes.filter((box) => box.textContent === playerTurn);

  if (
    filteredBoxes.some((box) => box.id === "box-0") &&
    filteredBoxes.some((box) => box.id === "box-1") &&
    filteredBoxes.some((box) => box.id === "box-2")
  ) {
    printWinner(playerTurn);
    return true;
  } else if (
    filteredBoxes.some((box) => box.id === "box-3") &&
    filteredBoxes.some((box) => box.id === "box-4") &&
    filteredBoxes.some((box) => box.id === "box-5")
  ) {
    printWinner(playerTurn);
    return true;
  } else if (
    filteredBoxes.some((box) => box.id === "box-6") &&
    filteredBoxes.some((box) => box.id === "box-7") &&
    filteredBoxes.some((box) => box.id === "box-8")
  ) {
    printWinner(playerTurn);
    return true;
  } else if (
    filteredBoxes.some((box) => box.id === "box-0") &&
    filteredBoxes.some((box) => box.id === "box-3") &&
    filteredBoxes.some((box) => box.id === "box-6")
  ) {
    printWinner(playerTurn);
    return true;
  } else if (
    filteredBoxes.some((box) => box.id === "box-1") &&
    filteredBoxes.some((box) => box.id === "box-4") &&
    filteredBoxes.some((box) => box.id === "box-7")
  ) {
    printWinner(playerTurn);
    return true;
  } else if (
    filteredBoxes.some((box) => box.id === "box-2") &&
    filteredBoxes.some((box) => box.id === "box-5") &&
    filteredBoxes.some((box) => box.id === "box-8")
  ) {
    printWinner(playerTurn);
    return true;
  } else if (
    filteredBoxes.some((box) => box.id === "box-0") &&
    filteredBoxes.some((box) => box.id === "box-4") &&
    filteredBoxes.some((box) => box.id === "box-8")
  ) {
    printWinner(playerTurn);
    return true;
  } else if (
    filteredBoxes.some((box) => box.id === "box-2") &&
    filteredBoxes.some((box) => box.id === "box-4") &&
    filteredBoxes.some((box) => box.id === "box-6")
  ) {
    printWinner(playerTurn);
    return true;
  }

  return false;
};

const checkIfDraw = function () {
  const isDraw = boxes.every((box) => box.textContent);

  if (isDraw) {
    printDraw();
    return true;
  }

  return false;
};

export { checkIfPlayerWon, checkIfDraw };
