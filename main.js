import playerTurn from "./gameController.js";

const gameBoxes = Array.from(document.querySelectorAll(".box"));
const resetButton = document.querySelector("#reset-button");

gameBoxes.forEach((box) => {
  box.addEventListener("click", function (e) {
    playerTurn(e.target.getAttribute("id"));
  });
});

resetButton.addEventListener("click", function (e) {
  location.reload();
});
