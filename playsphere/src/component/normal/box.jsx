
import PropTypes from 'prop-types';
import { useState } from 'react';



const BoxComponent = ({ onEvent,valuOfBlock}) => {
  const [value,setValue ] = useState('X')
  setValue(()=>{
    value = valuOfBlock
  })
    console.log(valuOfBlock);
  return (
    <>
    <button className="bg-black/30 backdrop-blur-xl flex items-center justify-center rounded-md border-4 border-solid border-blue-700" 
    onClick={onEvent}
    >
        {value}
    </button>

    </>

  );
};

BoxComponent.propTypes = {
  onEvent: PropTypes.func.isRequired,
  
};

export default BoxComponent;

