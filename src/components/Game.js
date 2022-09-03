import { useEffect } from "react";
import {
	closeOpenedCardsDispatch,
	correctDispatch,
	endDispatch,
	fixOpenedCardsDispatch,
	flipCardsDispatch,
	wrongDispatch,
} from "../store/dispatch";
import { useGame } from "../store/game";
import Item from "./Item";
import TheEnd from "./TheEnd";

export default function Game() {
	const { initialItems, items, openedItems, trueItems, end } = useGame();

	useEffect(() => {
		flipCardsDispatch();

		if (openedItems.length === 2) {
			if (openedItems[0].name === openedItems[1].name) {
				setTimeout(() => {
					correctDispatch();
					fixOpenedCardsDispatch();
				}, 1000);
			} else {
				setTimeout(() => {
					wrongDispatch();
					closeOpenedCardsDispatch();
				}, 1000);
			}
		}
		// eslint-disable-next-line
	}, [openedItems]);

	useEffect(() => {
		if (initialItems.length === trueItems.length) {
			endDispatch();
		}
		// eslint-disable-next-line
	}, [trueItems]);

	return (
		<>
			<div className="grid grid-cols-5 gap-2">
				{items.map((item) => (
					<Item key={item.id} item={item} />
				))}
			</div>
			{end && <TheEnd />}
		</>
	);
}
