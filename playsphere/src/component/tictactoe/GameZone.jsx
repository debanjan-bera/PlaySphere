// /*eslint-disable*/
// import { useState } from "react";
// import BoxComponent from "./box.jsx";
// import './game.css'

// const MainGameFun = () => {

//   const [boxFill, SetBoxFill] = useState(Array(9).fill("")); // Array to track box states
//   const toggleFunction = (ele,index)=>{
//     // ele.innerHTML = 'X'
//     // boxFill[index] = 'X'
//     // SetBoxFill(boxFill[index])
//   }
//   return (
//     <div id="cont" className="contBox  grid gap-1 grid-cols-3 grid-rows-3 rounded-md overflow-hidden">
//       {boxFill.map((value, index) => (
//         <BoxComponent key={index} value={value} onClick={(ele)=>{toggleFunction(ele,index)}}/>
//       ))}
//     </div>
//   );
// };

// export default MainGameFun;
import { useState } from "react";
import BoxComponent from "./box.jsx";
import './game.css';

const MainGameFun = () => {
  const [boxFill, setBoxFill] = useState(Array(9).fill("")); 
  // Array to track box states

  const toggleFunction = (index) => {
    // Prevent overwriting an already filled box
    if (boxFill[index] === "") {
      const updatedBoxFill = [...boxFill]; // Create a new copy of the state array
      updatedBoxFill[index] = "X"; // Update the specific box
      setBoxFill(updatedBoxFill); // Set the updated state
    }
  };

  return (
    <div
      id="cont"
      className="contBox grid gap-1 grid-cols-3 grid-rows-3 rounded-md overflow-hidden"
    >
      {boxFill.map((value, index) => (
        <BoxComponent
          key={index}
          value={value}
          onClick={() => toggleFunction(index)} // Pass only the index
        />
      ))}
    </div>
  );
};

export default MainGameFun;
