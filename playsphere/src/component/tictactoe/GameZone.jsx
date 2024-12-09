// /*eslint-disable*/
import BoxComponent from "./box.jsx";
import './game.css';

const MainGameFun = () => {



  const handelClick = ()=>{
    console.log('hello');
  }



  return (
    <div
      id="cont"
      className="contBox grid gap-1 grid-cols-3 grid-rows-3 rounded-md overflow-hidden"
    >
    <BoxComponent onClick={()=>handelClick()} />
    <BoxComponent onClick={handelClick} />
    <BoxComponent onClick={handelClick} />
    <BoxComponent onClick={handelClick} />
    <BoxComponent onClick={handelClick} />
    <BoxComponent onClick={handelClick} />
    <BoxComponent onClick={handelClick} />
    <BoxComponent onClick={handelClick} />
    <div className="bg-black/30 backdrop-blur-xl flex items-center justify-center rounded-md border-4 border-solid border-blue-700"
    onClick={()=>handelClick()}
    >
        </div> 
    </div>
  );
};

export default MainGameFun;
