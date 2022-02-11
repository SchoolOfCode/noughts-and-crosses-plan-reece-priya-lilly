import styles from "./Square.module.css";

function Square(props) {
  const { square, makeAMove, index, isPlayerOneTurn, darkToggle } = props;
  return (
    <div
      className={
        square === null ? (isPlayerOneTurn ? styles.X : styles.Y) : styles.taken
      }
      id={darkToggle ? styles.normal : styles.alt}
      onClick={() => {
        makeAMove(index);
      }}
    >
      <h1 className={styles.letter}>{square}</h1>
    </div>
  );
}

export default Square;
