import { useState } from "react";

function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i) {
    const nextSquares = squares.slice();
    nextSquares[i] = "X";
    setSquares(nextSquares);
  }

  function handleFirstClick() {
    handleClick(0);
  }

  return (
    <>
      <div className="board-row">
        <Square value={[squares[0]]} onSquareClick={handleFirstClick} />
        <Square value={[squares[1]]} />
        <Square value={[squares[2]]} />
      </div>
      <div className="board-row">
        <Square value={[squares[3]]} />
        <Square value={[squares[4]]} />
        <Square value={[squares[5]]} />
      </div>
      <div className="board-row">
        <Square value={[squares[6]]} />
        <Square value={[squares[7]]} />
        <Square value={[squares[8]]} />
      </div>
    </>
  );
}
