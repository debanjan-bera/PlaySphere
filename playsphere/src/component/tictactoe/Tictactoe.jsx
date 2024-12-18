import MainGameFun from "./GameZone";
const TictactoeGame = () => {
  return (
    <>
      <main className=" h-dvh w-dvw grid grid-cols-1 grid-rows-custom">
        <div className="scroeBox bg-pink-300" ></div>
        <div className="flex items-center justify-center bg-yellow-300">
        <MainGameFun/>
        </div>
        <div className="btn bg-blue-300">
          <button>Bye Bye</button>
        </div>
      </main>
    </>
  );
};
export default TictactoeGame;
