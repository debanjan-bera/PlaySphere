
import PropTypes from 'prop-types';

const BoxComponent = ({ onEvent,helloFun}) => {
    
  return (
    <>
    <button className="bg-black/30 backdrop-blur-xl flex items-center justify-center rounded-md border-4 border-solid border-blue-700" 
    onClick={onEvent}
    >
        {helloFun}
    </button>

    </>

  );
};

BoxComponent.propTypes = {
  onEvent: PropTypes.func.isRequired,
  
};

export default BoxComponent;

