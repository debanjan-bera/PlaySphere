
import PropTypes from 'prop-types'
// import { useState ,useEffect} from 'react';

function BoxComponent({function}) {
    
    // const [boxFill, setBoxFill] = useState([]);
    // useEffect(() => {
    //     // Initialize boxFill state whenever sizeValue changes
    //     setBoxFill(Array(9).fill(""));
    // }, [sizeValue]);
    // let value = 'X'
    // isValue = true
    // function

    // const  renderBoxes = ()=>{
    //     return boxFill.map((index) => (
    //         <div key={index} className="bg-black/30 backdrop-blur-xl flex items-center justify-center rounded-md border-4 border-solid border-blue-700">

    //         </div>
    //     ));
    // }
    const handelClick = ()=>{
        console.log('hello');
      }

    return (
        // <>{renderBoxes()}</>
        <>
        <div className="bg-black/30 backdrop-blur-xl flex items-center justify-center rounded-md border-4 border-solid border-blue-700" 
        onClick={()=>handelClick()}
        >
        </div>
        </>
    );
}
BoxComponent.propTypes = {
    sizeValue: PropTypes.number.isRequired,
};

export default BoxComponent;
