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
    console.log(id);
    if (isTaken(id, board) === false) {
      if (isPlayerOneTurn) {
        setPlayerOneTurn(!isPlayerOneTurn);
        setBoard(replaceItem(board, "X", id));
        checkWinner(board, "X");
        return;
      }
      setPlayerOneTurn(!isPlayerOneTurn);
      setBoard(replaceItem(board, "O", id));
      checkWinner(board, "O");
      return;
    }
  }

  function replaceItem(array, item, index) {
    return [...array.slice(0, index), item, ...array.slice(index + 1)];
  }

  function isTaken(id, board) {
    if (board[id] === null) {
      return false;
    }
    return true;
  }

  function checkWinner(board, symbol) {
    if (
      (board[0] === symbol && board[1] === symbol && board[2] === symbol) ||
      (board[3] === symbol && board[4] === symbol && board[5] === symbol) ||
      (board[6] === symbol && board[7] === symbol && board[8] === symbol) ||
      (board[0] === symbol && board[3] === symbol && board[6] === symbol) ||
      (board[1] === symbol && board[4] === symbol && board[7] === symbol) ||
      (board[2] === symbol && board[5] === symbol && board[8] === symbol)
    ) {
      console.log(symbol + "Wins!");
      return true;
    }
  }

  return (
    <div>
      <Board board={board} makeAMove={makeAMove} />
    </div>
  );
}

export default Game;
