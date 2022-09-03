import { useGame } from "../store/game";

export default function Logo() {
	const { score } = useGame();

	return (
		<div className="bg-white mb-5 sticky top-0 z-50 shadow-md text-gray-500">
			<div className="container md:max-w-3xl py-5 mx-auto flex justify-between items-center">
				<h1 className="text-4xl font-bold">Memory Game</h1>
				<h3 className="text-xs flex justify-center items-center">
					Score: <b className="ml-1 text-xl">{score}</b>
				</h3>
			</div>
		</div>
	);
}
