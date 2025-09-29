let boxes = document.querySelectorAll(".box");
let resetButton = document.querySelector(".reset-button");
let newButton = document.querySelector(".new-button");
let winnerText = document.querySelector(".winnerText");
const msg = document.querySelector(".message");
const heading = document.querySelector(".heading");
let playerO = true;
let moves = 0;
let gameActive = true;

const winningPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const disableButtons = () => {
  console.log("inside diable buttons");

  boxes.forEach((box) => {
    box.disabled = true;
  });
};

const checkWinner = () => {
  console.log("inside check patterns");

  winningPatterns.forEach((pattern) => {
    const tex1 = boxes[pattern[0]].innerText;
    const tex2 = boxes[pattern[1]].innerText;
    const tex3 = boxes[pattern[2]].innerText;

    if (tex1 != "" && tex2 != "" && tex3 != "") {
      if (tex1 === tex2 && tex2 === tex3) {
        console.log("inside in");
        
        winnerText.classList.remove("hide");
        heading.innerText = `Congratulations!\n ${tex1} has won`;
        disableButtons();
        return;
      }else if (moves == 9) {
        heading.innerText = `It's a Draw`;
        return;
      }
    }
  });
};

const resetButtons = () => {
  heading.innerText = `Play Now !!`;
  playerO = true;
  moves = 0;
  boxes.forEach((box) => {
    box.innerText = "";
    box.disabled = false;
  });
};

const handleClick = boxes.forEach((box) => {
  if (!gameActive || box.innerText != "") {
    return;
  }

  box.addEventListener("click", () => {
    box.innerText = playerO ? "O" : "X";
    playerO = !playerO;
    box.disabled = true;
    moves++;
    checkWinner();
  });
});

[resetButton, newButton].forEach((button) => {
  button.addEventListener("click", resetButtons);
});
