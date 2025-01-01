import { useState } from "react";
import { TicTacToeGameEngine } from "./GameZone"
import { handleGameReset } from "./LogialComponent";
const TictactoeGame = () => {
  const [gameState, setGameState] = useState(Array(9).fill({ value: "", color: "", disabled: false }));
  const [gameResult, setGameResult] = useState('')
  const [isPlayerTurn, setIsPlayerTurn] = useState(false);


  return (
    <>
      <main className=" h-dvh w-dvw grid grid-cols-1 grid-rows-custom">
        <div className="scroeBox bg-pink-300 flex items-center justify-center content-center">{gameResult}</div>
        <div className="flex items-center justify-center bg-yellow-300">
        <TicTacToeGameEngine gameState={gameState} gameFunction={setGameState} isPlayerTurn={isPlayerTurn} setIsPlayerTurn={setIsPlayerTurn} checkResult={setGameResult}/>
        </div>
        <div className="btn bg-blue-300">
          <button onClick={()=>handleGameReset(setGameState,setGameResult,setIsPlayerTurn)}>Reset</button>
        </div>
      </main>
    </>
  );
};
export default TictactoeGame;
