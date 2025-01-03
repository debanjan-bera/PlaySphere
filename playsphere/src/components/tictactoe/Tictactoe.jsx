import { useState } from "react";
import { TicTacToeGameEngine } from "./GameZone"
// import { handleGameReset } from "./LogialComponent";
import { PopUpModel } from "../PopUpModelComponents/WiningPopUp";
const TictactoeGame = () => {
  const [gameState, setGameState] = useState(Array(9).fill({ value: "", color: "", disabled: false }));
  const [gameResult, setGameResult] = useState('')
  const [isPlayerTurn, setIsPlayerTurn] = useState(false);
  const [popUpModel, setPopUp] = useState(false)
  const handleGameReset = ()=>{
    setGameState(Array(9).fill({ value: "", color: "", disabled: false }))
    setGameResult('')
    setIsPlayerTurn(false);
  }
  return (
    <>

      <main className=" h-dvh w-dvw grid grid-cols-1 grid-rows-custom relative">
        <div className="scroeBox bg-pink-300 flex items-center justify-center content-center">{gameResult}</div>
        <div className="flex items-center justify-center bg-yellow-300">
        <TicTacToeGameEngine gameState={gameState} gameFunction={setGameState} isPlayerTurn={isPlayerTurn} setIsPlayerTurn={setIsPlayerTurn} checkResult={setGameResult} setPopUp={setPopUp}/>
        </div>
        <div className="btn bg-blue-300">
          <button onClick={()=>handleGameReset()}>Reset</button>
        </div>
        {popUpModel && <PopUpModel isWinner={gameResult} setPopUp={setPopUp} onHandleMatchContinue={handleGameReset}/>}
      
      </main>
    </>
  );
};
export default TictactoeGame;
