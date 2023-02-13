import { configureStore } from "@reduxjs/toolkit";
import numberReducer from "../features/numberSlice";

export const store = configureStore({
	reducer: {
		number: numberReducer,
	},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
