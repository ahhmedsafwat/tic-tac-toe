import Square from "./Square";
import calcluateWinnder from "../utils/clacluateWinners";

interface board {
  xIsNext: boolean;
  squares: string[];
  onPlay: CallableFunction;
}

const Board = ({ xIsNext, squares, onPlay }: board) => {
  const handleClick = (i: number): void => {
    if (squares[i] || calcluateWinnder(squares)) return;
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares);
  };

  const winner = calcluateWinnder(squares);
  const isBoardFull = squares.every((square) => square !== null);
  let status, turn;
  if (winner) {
    status = `winner: ${winner}`;
  } else if (isBoardFull) {
    status = `Draw play again`;
  } else {
    turn = xIsNext ? "X" : "O";
  }
  return (
    <div>
      {(winner || isBoardFull) && (
        <div className="grid h-20 card bg-base-300 rounded-box place-items-center absolute px-20 top-6 left-6">
          {status}
        </div>
      )}

      {winner || isBoardFull ? (
        ""
      ) : (
        <>
          <div className="w-fit px-6 p-4 bg-base-300 rounded-box absolute top-6 left-6">
            Next Player Is
          </div>
          <div className="relative">
            <div
              className={`card ${
                turn == "X" ? "bg-green-500 text-white " : "bg-base-300"
              } px-6 p-4 w-fit rounded-box absolute left-44 top-6`}
            >
              X
            </div>
            <div className="divider divider-horizontal absolute left-56 top-10 before:absolute after:absolute after:top-[-18px] after:h-4  before:top-7 before:h-4">
              Or
            </div>
            <div
              className={`card bg-base-300 px-6 p-4 w-fit rounded-box absolute left-[264px] top-6 ${
                turn == "O" ? "bg-green-500 text-white" : "bg-base-300"
              }`}
            >
              O
            </div>
          </div>
        </>
      )}
      <div className="grid h-screen place-content-center">
        <div className="grid grid-cols-3  ">
          {squares.map((square: string, index) => (
            <Square
              key={index}
              value={square}
              onSquareClick={() => {
                handleClick(index);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Board;
