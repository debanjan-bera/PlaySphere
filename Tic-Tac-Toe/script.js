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
  roundCount = 1;
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

btnRef.forEach((ele, index) => {
  ele.addEventListener("click", () => {
    if (ele.innerText === "" && !win) {
      changeTurn(ele);
      console.log(ele.innerText);
      storeArr[index] = ele.innerText;
      win = winChecker();
      sliderGretting(win,ele);
    }
  });
});

ContinueGame(newGameBtn);
resetBtnFun(resetBtn);

function changeTurn(ele) {
  ele.innerText = xTurn
    ? (ele.style.color = "#0068a5")
    : (ele.style.color = "rgb(255 153 0)");
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
  popUpMass.classList.toggle("hide");
}


function popUpMess() {
  if ((roundCount = 2)) {
    msRef.innerText = `Winner is ${btnRef[pattern[0]].innerText}`;
    popUpMass.classList.toggle("hide");
  }
}//under construction



function updateScore(winner) {
  roundCount++;
  document.querySelector(".round-mes-scroe").innerText = roundCount;
  if (winner === "X") {
    isX.innerText = ++xScoreCount;
  } else if (winner === "O") {
    isO.innerText = ++oScoreCount;
  }
}


function sliderGretting(win,ele){
  if(win){
    changeSlider.innerHTML = `<div class="winning-part">Winner is ${
      ele.innerText
    }</div>`;
    changeSlider.style.backgroundColor = "rgb(114, 255, 114)";
  }else{
    drawMatch++;
    if (drawMatch >= 9) {
      msRef.innerText = "Draw";
      popUpMass.classList.remove("hide");
      changeSlider.innerHTML = `<div class="winning-part">Draw</div>`;
    }
  }
}//under construction




function ContinueGame(ele) {
  ele.addEventListener("click", () => {
    btnRef.forEach((e) => {
      e.innerText = "";
      e.style.backgroundColor = "";
    });
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
    document.querySelector(".round-scroe").innerText = roundCount;
  });
}
function resetBtnFun(ele) {
  ele.addEventListener("click", () => {
    btnRef.forEach((e) => {
      e.innerText = "";
    });
    win = false;
    xTurn = true;
    drawMatch = 0;
    storeArr.fill("");
    turnSlider.classList.add("slider-X");
    xScoreCount = oScoreCount = isO.innerText = isX.innerText = 0;
  });
}
