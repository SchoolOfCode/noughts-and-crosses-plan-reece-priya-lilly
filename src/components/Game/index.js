import { useState } from "react";
import Board from "../Board";

function Game() {
	const intitialState = [null, null, null, null, null, null, null, null, null];

	const [board, setBoard] = useState(intitialState);

	return (
		<div>
			<Board board={board} />
		</div>
	);
}

export default Game;
