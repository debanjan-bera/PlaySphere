const btnRef = document.querySelectorAll(".game-opt-btn"),
  resetBtn = document.querySelector(".reset-bnt"),
  newGameBtn = document.querySelector(".new-game"),
  popUpMass = document.querySelector(".start-popup"),
  msRef = document.querySelector(".message"),
  turnSlider = document.querySelector(".slider-X");
let isTurn = "X";
let xTurn = true;

let winningPattern = [
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
  if (xTurn === true) {
    ele.innerText = "X";
    xTurn = false
    turnSlider.classList.toggle("slider-X")
  } else {
    ele.innerText = "O";
    xTurn = true;
    turnSlider.classList.toggle("slider-X")
  }
}

let win = false;
function winChecker(ele){
    for(let i of winningPattern){
    let [ele1, ele2, ele3] = [btnRef[i[0]].innerText,btnRef[i[1]].innerText,btnRef[i[2]].innerText]
    
    if(ele1 != "" & ele2 != "" & ele3 !=""){
        if(ele1 == ele2 && ele2 == ele3){
            // console.log(ele.innerText);
            console.log("Winner is",ele.innerText);
            win = true
        }
    }
    }
};
btnRef.forEach((ele) => {
  ele.addEventListener("click", () => {
    if (ele.innerText === "") {
        if(win !== true){
            let turn = changeTurn(ele);
        }
      winChecker(ele)
      console.log(win);
    }
  });
});
