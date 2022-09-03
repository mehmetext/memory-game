import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

import { items, shuffled } from "../utils";

const initialState = {
	initialItems: items,
	items: shuffled(),
	openedItems: [],
	trueItems: [],
	disabled: false,
	score: 100,
	end: false,
};

const slice = createSlice({
	name: "game",
	initialState: initialState,
	reducers: {
		flipCards: (state, action) => {
			state.items.map((item) => {
				const existOpened = state.openedItems.find(
					(openedItem) => openedItem.id === item.id
				);

				if (existOpened) {
					item.opened = true;
				} else {
					item.opened = false;
				}

				const existTrue = state.trueItems.find(
					(trueItem) => trueItem === item.name
				);

				if (existTrue) {
					item.true = true;
				} else {
					item.true = false;
				}

				return item;
			});
		},
		toggleItem: (state, action) => {
			const existsID = state.openedItems.find(
				(item) => item.id === action.payload.id
			);
			if (!existsID) {
				state.openedItems.push(action.payload);

				if (state.openedItems.length === 2) {
					state.disabled = true;
				}
			} else {
				state.openedItems = state.openedItems.filter(
					(item) => item.id !== action.payload.id
				);
			}
		},
		correct: (state, action) => {
			state.score += 50;
		},
		wrong: (state, action) => {
			state.score -= 10;
		},
		closeOpenedCards: (state, action) => {
			state.openedItems = [];
			state.disabled = false;
		},
		fixOpenedCards: (state, action) => {
			state.trueItems.push(state.openedItems[0].name);
			state.openedItems = [];
			state.disabled = false;
		},
		end: (state, action) => {
			state.end = true;
		},
		playAgain: (state, action) => {
			state.items = shuffled();
			state.openedItems = [];
			state.trueItems = [];
			state.disabled = false;
			state.score = 100;
			state.end = false;
		},
	},
});

export const useGame = () => useSelector((state) => state.game);

export const {
	toggleItem,
	flipCards,
	correct,
	wrong,
	closeOpenedCards,
	fixOpenedCards,
	end,
	playAgain,
} = slice.actions;

export default slice.reducer;
