const winningPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
export const isMatchWinner = (gameArr,setGameArr)=>{
  const emptyCount = gameArr.filter((element) => element.value !== "").length;
  if(emptyCount>4) winChecker(gameArr,setGameArr)
}
const winChecker = (gameArr,setGameArr) => {
    for (const pattern of winningPatterns) {
      const [a, b, c] = pattern;
      if (gameArr[a].value && gameArr[a].value === gameArr[b].value && gameArr[a].value === gameArr[c].value) {
        console.log(`Winner: ${gameArr[a].value}`);
        console.log(gameArr[a].value);
        resetDisabled(gameArr,setGameArr)
        return gameArr[a].value;
      }
    }
    return null
};

const resetDisabled = (gameArr,setGameArr) => {
  const updatedGameArr = gameArr.map((element) => ({
    ...element, 
    disabled: true,
  }));
  setGameArr(updatedGameArr)
};
