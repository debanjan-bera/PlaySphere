// /*eslint-disable*/
import { useState } from "react";
import BoxComponent from "./box.jsx";
import './game.css'

const MainGameFun = () => {

  const [boxFill, SetBoxFil] = useState(Array(9).fill("")); // Array to track box states



  return (
    <div id="cont" className="contBox  grid gap-1 grid-cols-3 grid-rows-3 rounded-md overflow-hidden">
      {boxFill.map((value, index) => (
        <BoxComponent key={index} value={value}/>
      ))}
    </div>
  );
};

export default MainGameFun;
