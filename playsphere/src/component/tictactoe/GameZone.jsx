// // /*eslint-disable*/
// import BoxComponent from "./box.jsx";
import "./game.css";

import BoxComponent from './box';

const MainGameFun = () => {
  let i = 'X'
  let cross = false
  const handleEvent = () => {
    hello()

  };
  function hello(){
    i = cross ? "X" : "O"
    cross = !cross 
    console.log(i,cross);
    return i
}
  return (
    <div id="cont" className="contBox grid gap-1 grid-cols-3 grid-rows-3 rounded-md overflow-hidden">
      
      <BoxComponent onEvent={handleEvent} valuuofValue={{i}}/>
      <BoxComponent onEvent={handleEvent} valuuofValue={{i}}/>
      <BoxComponent onEvent={handleEvent} valuuofValue={{i}}/>

    </div>
  );
};

export default MainGameFun;
