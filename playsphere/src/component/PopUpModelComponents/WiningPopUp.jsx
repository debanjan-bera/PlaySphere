import PropTypes from 'prop-types'
export const PopUpModel = ({isWinner,setPopUp,onHandleMatchContinue})=>{
    const showWinner = ()=>{
        if(isWinner === 'draw') return 'Match is Draw!!!!'
        else return `${isWinner} is Winner!!! `;
    }
    const isContinueMatch = ()=>{
        setPopUp(false)
        onHandleMatchContinue()
    }

    return (
      <>
        <section className="absolute top-0 left-0 h-full w-full flex items-center justify-center bg-white/50">
          <div className="winning-card flex items-center justify-center flex-col bg-gradient-to-br scale-150 from-pink-500 to-yellow-400 text-white p-6 rounded-lg shadow-lg w-80 mx-auto animate-fadeIn">
            <h1 className="text-2xl font-bold mb-2">🎉 Congratulations! 🎉</h1>
            <p className="text-lg mb-4">{showWinner()}</p>
            <button className="bg-white text-pink-500 hover:bg-pink-500 hover:text-white font-semibold py-2 px-4 rounded transition duration-300 transform hover:scale-105"
            onClick={()=> isContinueMatch()}
            >
              Play Again
            </button>
          </div>
        </section>
      </>
    );
}
PopUpModel.propTypes = {
    isWinner: PropTypes.string.isRequired,
    setPopUp: PropTypes.func.isRequired,
    onHandleMatchContinue: PropTypes.func.isRequired,
}