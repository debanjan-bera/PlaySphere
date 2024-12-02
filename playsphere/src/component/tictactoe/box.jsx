import PropTypes from 'prop-types';
function BoxComponent(index,value,onClick){
    return(
        <div
        className="bg-black/30 backdrop-blur-xl flex items-center justify-center rounded-md border-4 border-solid border-blue-700" onClick={onClick({index})}>
            {value}
        </div>
    )
}
BoxComponent.propTypes = PropTypes

export default BoxComponent
