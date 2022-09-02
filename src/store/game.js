import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const slice = createSlice({
	name: "game",
	initialState: {
		items: [],
	},
	reducers: (state, actions) => {},
});

export const useGame = () => useSelector((state) => state.game);

export const {} = slice.actions;

export default slice.reducer;
