// // /*eslint-disable*/
// import BoxComponent from "./box.jsx";
import "./game.css";

// const MainGameFun = () => {
//   const handelClick = () => {
//     console.log("hello");
//   };

//   return (
//     <div id="cont" className="contBox grid gap-1 grid-cols-3 grid-rows-3 rounded-md overflow-hidden"
//     >

//       <BoxComponent />
//       <div
//         className="bg-black/30 backdrop-blur-xl flex items-center justify-center rounded-md border-4 border-solid border-blue-700"
//         onClick={() => handelClick()}
//       ></div>
//     </div>
//   );
// };

// export default MainGameFun;
// import React from 'react';
import BoxComponent from './box';

const MainGameFun = () => {
  let i = 'X'
  let cross = false
  const handleEvent = (event) => {
    console.log('Event triggered:', event);
    console.log('Event type:', event.type); // e.g., 'click'
    // console.log(i,cross);
    hello()

  };
  function hello(){
    i = cross ? "X" : "O"
    cross = !cross 
    console.log(i,cross);
    return <h2>{i}</h2>

}
  return (
    <div id="cont" className="contBox grid gap-1 grid-cols-3 grid-rows-3 rounded-md overflow-hidden">
      
      <BoxComponent onEvent={handleEvent} valuuofValue={<h2>{i}</h2>}/>
      <BoxComponent onEvent={handleEvent} valuuofValue={<h2>{i}</h2>}/>
      <BoxComponent onEvent={handleEvent} valuuofValue={<h2>{i}</h2>}/>

    </div>
  );
};

export default MainGameFun;
