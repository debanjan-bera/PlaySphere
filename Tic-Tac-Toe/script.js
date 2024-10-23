const btnRef = document.querySelectorAll(".game-opt-btn"),
  resetBtn = document.querySelector(".reset-bnt"),
  newGameBtn = document.querySelector(".new-game"),
  popUpMass = document.querySelector(".start-popup"),
  msRef = document.querySelector(".message"),
  turnSlider = document.querySelector(".slider-X"),
  isX = document.querySelector(".user-point"),
  isO = document.querySelector(".cpu-point"),
  changeSlider = document.querySelector(".turn-opt");

let storeArr = Array(9).fill("");
let xTurn = true,
  drawMatch = 0,
  xScoreCount = 0,
  oScoreCount = 0,
  roundCount = 0;
  win = false;
  // count = 0;

const winningPatterns = [
  [0, 1, 2],
  [0, 4, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

function changeTurn(ele) {
  ele.innerText = xTurn ?  ele.style.color = "#0068a5": ele.style.color = "rgb(255 153 0)";
  ele.innerText = xTurn ? "X" : "O";
  xTurn = !xTurn;
  turnSlider.classList.toggle("slider-X");
}

function winChecker() {
  for (let pattern of winningPatterns) {
    const [a, b, c] = pattern.map((index) => btnRef[index].innerText);
    if (a && a === b && a === c) {
      highlightWinningCombination(pattern);
      updateScore(a);
      return true; // A win has occurred
    }
  }
  
  return false; // No win found
}

function highlightWinningCombination(pattern) {
  pattern.forEach((index) => {
    btnRef[index].style.backgroundColor = "#ff4b4b";
  });
  msRef.innerText = `Winner is ${btnRef[pattern[0]].innerText}`;
  changeSlider.innerHTML = `<div class="winning-part">Winner is ${
    btnRef[pattern[0]].innerText
  }</div>`;

  changeSlider.style.backgroundColor = " rgb(114, 255, 114)";
  popUpMass.classList.toggle("hide");
}

function updateScore(winner) {
  roundCount++;
  
  document.querySelector(".round-mes-scroe").innerText=roundCount;
  if (winner === "X") {
    isX.innerText = ++xScoreCount;
  } else if (winner === "O") {
    isO.innerText = ++oScoreCount;
  }
}

btnRef.forEach((ele, index) => {
  ele.addEventListener("click", () => {
    if (ele.innerText === "" && !win) {
      changeTurn(ele);
      console.log(ele.innerText);
      storeArr[index] = ele.innerText;
      win = winChecker();
      if (!win) {
        drawMatch++;
        if (drawMatch >= 9) {
          msRef.innerText = "Draw";
          popUpMass.classList.remove("hide");
          changeSlider.innerHTML = `<div class="winning-part">Draw</div>`;
        }
      }
    }
  });
});

newGameBtn.addEventListener("click", () => {
  btnRef.forEach((ele) => {
    ele.innerText = "";
    ele.style.backgroundColor = "";
  });
  
  ContinueGame();
});

function ContinueGame() {
  popUpMass.classList.toggle("hide");
  win = false;
  xTurn = true;
  drawMatch = 0;
  storeArr.fill("");
  changeSlider.innerHTML = `<div class="text">X</div>
            <div class="text">O</div>
            <div class="slider slider-X slider-O"></div>`;
  changeSlider.style.backgroundColor = " rgba(255, 255, 255, 0.318)";
  turnSlider.classList.add("slider-X");
  document.querySelector(".round-scroe").innerText=roundCount;

}

// btnRef.forEach((e,index)=>{
//   // storeArr.fill("");
//   e.innerText = storeArr[index]
//   console.log(index);
// })
resetBtn.addEventListener("click", () => {
  btnRef.forEach((ele) => {
    ele.innerText = "";
  });
  win = false;
  xTurn = true;
  drawMatch = 0;
  storeArr.fill("");
  turnSlider.classList.add("slider-X");
  xScoreCount = oScoreCount = isO.innerText = isX.innerText = 0;
});
