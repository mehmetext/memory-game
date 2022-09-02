import { useEffect, useState } from "react";
import Item from "./Item";
import { shuffle, frameworks } from "../utils";

export default function Game() {
	const [cards, setCards] = useState([...frameworks, ...frameworks]);

	useEffect(() => {
		setCards(shuffle(cards));
	}, [cards]);

	return (
		<div className="mt-8 grid grid-cols-5 gap-2">
			{cards.map((name, i) => (
				<Item key={i} item={{ name }} />
			))}
		</div>
	);
}
