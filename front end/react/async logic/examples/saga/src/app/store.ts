import { configureStore } from "@reduxjs/toolkit";
import numberReducer from "../features/numberSlice";
import createSagaMiddleware from "@redux-saga/core";
import numberSaga from "../features/numberSaga";

const saga = createSagaMiddleware();

export const store = configureStore({
	reducer: {
		number: numberReducer,
	},
	middleware: [saga],
});

saga.run(numberSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
