// import {useState } from "react";
import PropTypes from 'prop-types'
import "./game.css";
import {checkSize, winChecker } from "./LogialComponent";
export const TicTacToeGameEngine = ({gameState, gameFunction, isPlayerTurn, setIsPlayerTurn,checkResult,setPopUp}) => {

  const handleGameClick = (index) => {
    if (gameState[index].disabled) return;
    const newGameArr = [...gameState];
    const newValue = isPlayerTurn ? "O" : "X";
    const newColor = isPlayerTurn ? "text-pink-300" : "text-blue-300";
    newGameArr[index] = { value: newValue, color: newColor, disabled: true };
    gameFunction(newGameArr);
    setIsPlayerTurn(!isPlayerTurn);
    const findingFill = newGameArr.filter((match)=> match.value !== '')
    if(findingFill.length > 4){
      const winnerMatch = winChecker(newGameArr,gameFunction)
      if(winnerMatch){
        checkResult(()=>winnerMatch)
        setPopUp(true)
      } 
      else if(findingFill.length === 9 && !winnerMatch) checkResult(()=>'draw')
    }    
  };
  // console.log(checkSize(9));
  return (
    <>
      <div id="cont" className={`contBox h-[96%] w-[26rem] grid ${checkSize(9)} gap-2 justify-center items-center text-7xl font-semibold`}>
        {gameState.map((value, index) => (
          <button className={`gameBox h-full w-full ${value.color}`} key={index} onClick={() => handleGameClick(index)}>
            {value.value}
          </button>
        ))}
      </div>
    </>
  );
};

TicTacToeGameEngine.propTypes = {
  gameState:PropTypes.array.isRequired, 
  gameFunction:PropTypes.func.isRequired, 
  isPlayerTurn:PropTypes.bool.isRequired, 
  setIsPlayerTurn:PropTypes.func.isRequired,
  checkResult: PropTypes.func.isRequired,
  setPopUp: PropTypes.func.isRequired,
}

