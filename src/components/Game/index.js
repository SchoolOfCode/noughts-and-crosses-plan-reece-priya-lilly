import { useState, useEffect } from "react";
import Board from "../Board";
import SubHeading from "../SubHeading";

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
      console.log(isPlayerOneTurn);
      if (isPlayerOneTurn) {
        setPlayerOneTurn(!isPlayerOneTurn);
        setBoard(replaceItem(board, "X", id));
        return;
      }
      setPlayerOneTurn(!isPlayerOneTurn);
      setBoard(replaceItem(board, "O", id));
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

  function checkWinner(board, isPlayerOneTurn) {
    console.log("Check winner function fired!");
    if (
      (board[0] && board[0] === board[1] && board[0] === board[2]) ||
      (board[3] && board[3] === board[4] && board[3] === board[5]) ||
      (board[6] && board[6] === board[7] && board[6] === board[8]) ||
      (board[0] && board[0] === board[3] && board[0] === board[6]) ||
      (board[1] && board[1] === board[4] && board[1] === board[7]) ||
      (board[2] && board[2] === board[6] && board[3] === board[9]) ||
      (board[0] && board[0] === board[4] && board[0] === board[8]) ||
      (board[2] && board[2] === board[4] && board[2] === board[6])
    ) {
      console.log("Winenr check!");
      if (!isPlayerOneTurn) {
        return console.log("X wins");
      }
      return console.log("O wins!");
    }
    return;
  }

  useEffect(() => {
    checkWinner(board, isPlayerOneTurn);
    //eslint-disable-next-line
  }, [board]);
  //   (board[0] === symbol && board[1] === symbol && board[2] === symbol) ||
  //   (board[3] === symbol && board[4] === symbol && board[5] === symbol) ||
  //   (board[6] === symbol && board[7] === symbol && board[8] === symbol) ||
  //   (board[0] === symbol && board[3] === symbol && board[6] === symbol) ||
  //   (board[1] === symbol && board[4] === symbol && board[7] === symbol) ||
  //   (board[2] === symbol && board[5] === symbol && board[8] === symbol)

  return (
    <div>
      <Board board={board} makeAMove={makeAMove} />
      <SubHeading winner />
    </div>
  );
}

export default Game;
