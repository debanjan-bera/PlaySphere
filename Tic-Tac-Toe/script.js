const btnRef = document.querySelectorAll(".game-opt-btn"),
resetBtn = document.querySelector(".reset-bnt"),
newGameBtn = document.querySelector(".new-game"),
popUpMass = document.querySelector(".start-popup"),
msRef = document.querySelector(".message");

let winningPattern = [
    [0,1,2],
    [0,4,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
]
let xTurn = true;
let count = 0;

let winchecker = () =>{
    for(let i of winningPattern){
        let [ele1, ele2, ele3] = [btnRef[i[0]].innerText,btnRef[i[1]].innerText,btnRef[i[2]].innerText]
    }
    if(ele1 != "" & ele2 != "" & ele3 !=""){
        if(ele1 == ele2 && ele2 == ele3){

        }
    }
}
btnRef.forEach((ele)=>{
    ele.addEventListener("click", ()=>{
        if(xTurn){
            xTurn = false
            ele.innerText = "X";
            ele.disbled = true
        }
        else{
            xTurn = true;
            ele.innerText = "O"
            ele.disbled = true
        }
        count++;
       
    })
})