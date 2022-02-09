import Square from "../Square";

function Board(props) {
  const { board, makeAMove } = props;

  return (
    <div>
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
