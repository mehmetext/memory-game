import { useEffect } from "react";
import {
	closeOpenedCardsDispatch,
	correctDispatch,
	fixOpenedCardsDispatch,
	flipCardsDispatch,
	wrongDispatch,
} from "../store/dispatch";
import { useGame } from "../store/game";
import Item from "./Item";

export default function Game() {
	const { items, openedItems, trueItems } = useGame();

	useEffect(() => {
		flipCardsDispatch();

		if (openedItems.length === 2) {
			if (openedItems[0].name === openedItems[1].name) {
				correctDispatch();
				setTimeout(() => {
					fixOpenedCardsDispatch();
				}, 1000);
			} else {
				wrongDispatch();
				setTimeout(() => {
					closeOpenedCardsDispatch();
				}, 1000);
			}
		}
	}, [openedItems, trueItems]);

	return (
		<div className="mt-8 grid grid-cols-5 gap-2">
			{items.map((item) => (
				<Item key={item.id} item={item} />
			))}
		</div>
	);
}
