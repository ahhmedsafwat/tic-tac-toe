import { useState } from "react";
import Board from "./Board";

const Game = () => {
  const [history, setHistory] = useState<string[][]>([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares: string[]): void {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = `Go to Move ${move}`;
    } else {
      description = "Start the game";
    }

    return (
      <div key={move}>
        <button
          onClick={() => {
            jumpTo(move);
          }}
          className="btn btn-outline mb-3"
        >
          {description}
        </button>
      </div>
    );
  });

  return (
    <div className="relative">
      <Board
        xIsNext={xIsNext}
        onPlay={handlePlay}
        squares={currentSquares}
      ></Board>
      <div className="absolute w-72 right-0 top-20">{moves}</div>
    </div>
  );
};

export default Game;
