import "./square.css";
const Square = (props: { value: string; onSquareClick: VoidFunction }) => {
  return (
    <>
      <button
        onClick={props.onSquareClick}
        className="square btn text-8xl min-w-[180px] min-h-[180px] rounded-none  hover:border-current"
      >
        {props.value}
      </button>
    </>
  );
};

export default Square;
