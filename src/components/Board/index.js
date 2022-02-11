import Square from "../Square";
import styles from "./Board.module.css";
import Stats from "../Stats";

function Board(props) {
  const {
    board,
    makeAMove,
    isPlayerOneTurn,
    darkToggle,
    playerOneWins,
    playerTwoWins,
  } = props;

  return (
    <div
      className={styles.board}
      id={darkToggle ? styles.boardnormal : styles.boardalt}
    >
      <Stats
        playerOneWins={playerOneWins}
        playerTwoWins={playerTwoWins}
        darkToggle={darkToggle}
      />
      {board.map((square, index) => (
        <Square
          square={square}
          index={index}
          makeAMove={makeAMove}
          key={index}
          isPlayerOneTurn={isPlayerOneTurn}
          darkToggle={darkToggle}
        />
      ))}
    </div>
  );
}

export default Board;
