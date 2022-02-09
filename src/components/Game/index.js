import { replace } from "lodash";
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

  function makeAMove(id) {
    if (isTaken(id, board) === false) {
      if (isPlayerOneTurn) {
        setPlayerOneTurn(!isPlayerOneTurn);
        return setBoard(replaceItem(board, "X", id));
      }
      setPlayerOneTurn(!isPlayerOneTurn);
      return setBoard(replaceItem(board, "O", id));
    }
  }

  function replaceItem(array, item, index) {
    return [...array.slice(0, index - 1), item, ...array.slice(index)];
  }

  function isTaken(id, board) {
    if (board[id] === null) {
      return false;
    }
    return true;
  }

  return (
    <div>
      <Board board={board} makeAMove={makeAMove} />
    </div>
  );
}

export default Game;
