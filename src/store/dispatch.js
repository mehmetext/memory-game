import store from ".";
import {
	toggleItem,
	flipCards,
	correct,
	wrong,
	closeOpenedCards,
	fixOpenedCards,
	end,
	playAgain,
} from "./game";

export const toggleItemDispatch = (payload) => {
	store.dispatch(toggleItem(payload));
};

export const flipCardsDispatch = () => {
	store.dispatch(flipCards());
};

export const correctDispatch = () => {
	store.dispatch(correct());
};

export const wrongDispatch = () => {
	store.dispatch(wrong());
};

export const closeOpenedCardsDispatch = () => {
	store.dispatch(closeOpenedCards());
};

export const fixOpenedCardsDispatch = () => {
	store.dispatch(fixOpenedCards());
};

export const endDispatch = () => {
	store.dispatch(end());
};

export const playAgainDispatch = () => {
	store.dispatch(playAgain());
};
