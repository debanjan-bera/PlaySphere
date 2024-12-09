import MainGameFun from "./GameZone";
const TictactoeGame = () => {
  return (
    <>
      <main className=" h-dvh w-dvw  grid grid-cols-1 grid-rows-custom">
        <div className="scroeBox" ></div>
        <div className="flex items-center justify-center">
        <MainGameFun/>
        </div>
        <div className="btn ">{1+2+3}</div>
      </main>
    </>
  );
};
export default TictactoeGame;
