import { skipPartiallyEmittedExpressions } from "typescript";
import Square from "../Square";
import styles from "./Board.module.css";

function Board(props) {
  const { board, makeAMove } = props;

  return (
    <div className={styles.board}>
      {board.map((square, index) => (
        <Square
          square={square}
          index={index}
          makeAMove={makeAMove}
          key={index}
        />
      ))}
    </div>
  );
}

export default Board;
