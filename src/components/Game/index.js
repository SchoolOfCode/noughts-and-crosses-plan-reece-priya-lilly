import { useState } from "react";
import Board from "../Board";

function Game() {
  const intitialState = [null, null, null, null, null, null, null, null, null];

  const [board, setBoard] = useState(intitialState);
  const [isPlayerOneTurn, setPlayerOneTurn] = useState(true);

  //Make a move function
  //If it player one turn is ture we put a nought, else cross.
  //Take in a ID, update the board respective of the ID, with
  //the symbol.

  function makeAMove() {
    console.log("I HAVE BEEN CLICKED! :)");
  }

  return (
    <div>
      <Board board={board} makeAMove={makeAMove} />
    </div>
  );
}

export default Game;
