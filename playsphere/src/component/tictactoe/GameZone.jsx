import { useState } from "react";
import "./game.css";
import {winChecker } from "./LogialComponent";
export const MainGameFun = () => {
  const [gameArr, setGameArr] = useState(Array(9).fill({ value: "", color: "", disabled: false }));
  const [isValue, setValue] = useState(false);
  const handleGameClick = (index) => {
    if (gameArr[index].disabled) return;
    const newGameArr = [...gameArr];
    const newValue = isValue ? "O" : "X";
    const newColor = isValue ? "text-pink-300" : "text-blue-300";
    newGameArr[index] = { value: newValue, color: newColor, disabled: true };
    setGameArr(newGameArr);
    const emptyCount = gameArr.filter((element) => element.value !== "").length;
    if(emptyCount > 4) winChecker(gameArr,setGameArr)
    setValue(!isValue);
  };
  const handleGameReset = ()=>{
    setGameArr(Array(9).fill({ value: "", color: "", disabled: false }))
    setValue(false);
  }
  return (
    <>
      <div id="cont" className="contBox h-[96%] w-[26rem] grid grid-cols-3 grid-rows-3 gap-3 justify-center items-center text-7xl font-semibold">
        {gameArr.map((value, index) => (
          <button className={`gameBox h-full w-full ${value.color}`} key={index} onClick={() => handleGameClick(index)}>
            {value.value}
          </button>
        ))}
      </div>
      <button onClick={handleGameReset}>Reset</button>
    </>
  );
};