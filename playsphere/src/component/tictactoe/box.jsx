
import PropTypes from 'prop-types'
import { useState ,useEffect} from 'react';

function BoxComponent({sizeValue}) {
    const [boxFill, setBoxFill] = useState([]);

    useEffect(() => {
        // Initialize boxFill state whenever sizeValue changes
        setBoxFill(Array(9).fill(""));
    }, [sizeValue]);
    const  renderBoxes = ()=>{
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
BoxComponent.propTypes = {
    sizeValue: PropTypes.number.isRequired,
};

export default BoxComponent;
