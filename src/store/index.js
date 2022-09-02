import { configureStore } from "@reduxjs/toolkit";
import game from "./game";

const store = configureStore({
	reducer: {
		game,
	},
});

export default store;
