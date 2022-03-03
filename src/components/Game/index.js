import { useState, useEffect } from "react";
import Board from "../Board";
import SubHeading from "../SubHeading";
import styles from "./Game.module.css";
import Stats from "../Stats";
import "../../index.css";

function Game({ darkToggle }) {
  const intitialState = [null, null, null, null, null, null, null, null, null];
  const [board, setBoard] = useState(intitialState);
  const [isPlayerOneTurn, setPlayerOneTurn] = useState(true);
  const [winner, setWinner] = useState("");
  const [playerOneWins, setPlayerOneWins] = useState(0);
  const [playerTwoWins, setPlayerTwoWins] = useState(0);

  //Make a move function
  //If it player one turn is ture we put a nought, else cross.
  //Take in a ID, update the board respective of the ID, with
  //the symbol.

  function makeAMove(id) {
    if (isTaken(id, board) === false && winner === "") {
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
    if (
      (board[0] && board[0] === board[1] && board[0] === board[2]) ||
      (board[3] && board[3] === board[4] && board[3] === board[5]) ||
      (board[6] && board[6] === board[7] && board[6] === board[8]) ||
      (board[0] && board[0] === board[3] && board[0] === board[6]) ||
      (board[1] && board[1] === board[4] && board[1] === board[7]) ||
      (board[2] && board[2] === board[5] && board[2] === board[8]) ||
      (board[0] && board[0] === board[4] && board[0] === board[8]) ||
      (board[2] && board[2] === board[4] && board[2] === board[6])
    ) {
      if (!isPlayerOneTurn) {
        setWinner("Player 1 (X)");
        setPlayerOneWins(playerOneWins + 1);
        console.log(playerOneWins);
        return;
      }
      setWinner("Player 2 (O)");
      setPlayerTwoWins(playerTwoWins + 1);

      return;
    }
    if (board.every(checkDraw)) {
      setWinner("Game is a draw! Nobody");
    }
  }
  function resetGame() {
    setBoard(intitialState);
    setWinner("");
  }

  useEffect(() => {
    checkWinner(board, isPlayerOneTurn);
    //eslint-disable-next-line
  }, [board]);

  function checkDraw(e) {
    return e !== null;
  }

  return (
    <div>
      <div
        className={styles.board}
        id={darkToggle ? styles.boardnormal : styles.boardalt}
      >
        <Stats
          playerOneWins={playerOneWins}
          playerTwoWins={playerTwoWins}
          darkToggle={darkToggle}
        />
        <div className={styles.grid}>
          <Board
            board={board}
            makeAMove={makeAMove}
            isPlayerOneTurn={isPlayerOneTurn}
            darkToggle={darkToggle}
          />
        </div>
      </div>
      <div className={styles.heading}>
        <SubHeading winner={winner} darkToggle={darkToggle} />
      </div>
      <div className={styles.buttonscontainer}>
        {winner ? (
          <button onClick={resetGame} className={styles.buttons}>
            Play again?
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default Game;
