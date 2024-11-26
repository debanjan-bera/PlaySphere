import BoxComponent from "./box.jsx";
const MainGameFun = () => {
  return (
    <div className="h-96 w-96 bg-blue-500 grid gap-2 grid-cols-3 grid-rows-3">
      <BoxComponent />
      <BoxComponent />
      <BoxComponent />
      <BoxComponent />
      <BoxComponent />
      <BoxComponent />
      <BoxComponent />
      <BoxComponent />
      <BoxComponent />
    </div>
  );
};
export default MainGameFun;
