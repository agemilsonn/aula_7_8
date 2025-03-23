import { useState } from "react";

let x = "X";

function Square() {
  const [value, setValue] = useState(x);

  function handleClick() {
    x = "O";
    console.log("clicou!");
  }
  return (
    <button onClick={handleClick} className="square">
      {value}
    </button>
  );
}

export default function Board() {
  return (
    <>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
}
