// /*eslint-disable*/
import BoxComponent from "./box.jsx";
import './game.css';

const MainGameFun = () => {
  return (
    <div
      id="cont"
      className="contBox grid gap-1 grid-cols-3 grid-rows-3 rounded-md overflow-hidden"
    >
    <BoxComponent boxSize= {9}/>
    </div>
  );
};

export default MainGameFun;
