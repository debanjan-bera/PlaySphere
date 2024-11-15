const btnGameBox = document.querySelectorAll(".game-box-btn"),
  resetBtn = document.querySelector(".reset-bnt"),
  isXScore = document.querySelector(".scoreX"),
  isYScore = document.querySelector(".scoreO"),
  palyerScoreBox = document.querySelectorAll(".playerBox"),
  conituneMatch = document.querySelector(".continueBtn"),
  popUpMassage = document.querySelector(".popUpMss"),
  winnerMassage = document.querySelector(".isWinMas"),
  // isXScore = document.querySelector(".scoreX"),
  winningPatterns = [
    [0, 1, 2],
    [0, 4, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
  ];
let tempArr = Array(9).fill("");
let win = xTurn = false;
let count = xScoreCount = oScoreCount = roundCount = 0;

const playGame = () => {
  btnGameBox.forEach((ele, index) => {
    ele.addEventListener("click", () => {
      if (!win && ele.innerText === "") {
        changeOptTurn(ele);
        win = winChecker();
      }});
  });
  conituneMatch.addEventListener("click", (ele) => {
    conituneMatchFun();
  });
};

const changeOptTurn = (ele) => {
  ele.innerText = xTurn ? "O" : "X";
  ele.style.color = xTurn ? "#ffab2d" : "#0fa6ff";
  xTurn = !xTurn;
  count++;
};

const winChecker = () => {
  for (let pattern of winningPatterns) {
    const [a, b, c] = pattern.map((index) => btnGameBox[index].innerText);
    if (a && a === b && a === c) {
      isWinner(a, true);
      popUpMassage.classList.toggle("hide");
      return true;
    } else {
      if (count === 9) {
        isWinner("draw", false);
        console.log("draw");
        popUpMassage.classList.toggle("hide");
        return true;
      }}}
  return false;
};

const conituneMatchFun = () => {
  popUpMassage.classList.toggle("hide");
  btnGameBox.forEach((ele) => {
    ele.innerText = "";
  });
  win = false;
  count = 0;
};

const resetGame = () => {
  resetBtn.addEventListener("click", (ele) => {
    console.log("hello");
  });
};

playGame();

resetGame();

const isWinner = (winner, winCheck) => {
  winnerMassage.innerHTML = winCheck
    ? `<h3>${winner} is winner</h3>`
    : `<h3>Match is ${winner}</h3>`;

  if (winCheck) {
    isXScore.innerHTML = winner === "X" ? ++xScoreCount : ++oScoreCount;
    isYScore.innerHTML = oScoreCount;
  }
  roundCount++;
  console.log(`x is ${xScoreCount} and O is ${oScoreCount}`);
};
