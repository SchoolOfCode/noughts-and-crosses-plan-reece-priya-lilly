import Square from "../Square";
import styles from "./Board.module.css";

function Board(props) {
  const { board, makeAMove, isPlayerOneTurn, darkToggle } = props;

  return (
    <div
      className={styles.backboard}
      id={darkToggle ? styles.boardnormal : styles.boardalt}
    >
      <div className={styles.tiles}>
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
    </div>
  );
}

export default Board;
