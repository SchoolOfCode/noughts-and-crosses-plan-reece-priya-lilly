import styles from "./Square.module.css";

function Square(props) {
  const { square, makeAMove, index } = props;
  return (
    <div
      className={styles.square}
      onClick={() => {
        makeAMove(index);
      }}
    >
      {square}
    </div>
  );
}

export default Square;
