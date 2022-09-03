import { playAgainDispatch } from "../store/dispatch";
import { useGame } from "../store/game";

export default function TheEnd() {
	const { score } = useGame();

	const handlePlayAgain = () => {
		playAgainDispatch();
	};

	return (
		<div className="fixed w-full h-full left-0 top-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
			<div className="bg-white container sm:max-w-xl p-5 rounded-lg shadow-xl flex flex-col justify-center items-center text-gray-500">
				<h1 className="font-bold text-3xl mb-5">The End!</h1>
				<h3 className="text-xl">Your Score:</h3>
				<h2 className="text-5xl font-bold mb-5">{score}</h2>

				<button
					onClick={handlePlayAgain}
					className="w-full p-3 bg-green-500 text-white font-bold rounded-full scale-100 hover:scale-105 active:scale-95 transition-transform"
				>
					Play Again
				</button>
			</div>
		</div>
	);
}
