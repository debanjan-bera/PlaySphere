// import PropTypes from 'prop-types';
// import { useState } from "react";
// function BoxComponent(index){
//     const [boxFill, setBoxFill] = useState(Array(9).fill("")); 
//     function myfunc(){
//         boxFill.map(()=>{
//             return(
//             <div className="bg-black/30 backdrop-blur-xl flex items-center justify-center rounded-md border-4 border-solid border-blue-700" key={index}>
//             </div>
//         )})
//     }
//     setBoxFill({myfunc})
//     return(
//         {myfunc}    
//     )
// }
// BoxComponent.propTypes = PropTypes

// export default BoxComponent

import { useState } from 'react';

function BoxComponent() {
    const [boxFill, setBoxFill] = useState(Array(9).fill(""));

    function renderBoxes() {
        return boxFill.map((value, index) => (
            <div key={index} className="bg-black/30 backdrop-blur-xl flex items-center justify-center rounded-md border-4 border-solid border-blue-700">
                {value}
            </div>
        ));
    }

    return (
        <>{renderBoxes()}</>
            
        
    );
}

export default BoxComponent;
