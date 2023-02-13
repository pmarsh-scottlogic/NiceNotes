import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: 0 } as { value: number };

export const numberSlice = createSlice({
	name: "number",
	initialState,
	reducers: {
		getRandomFetch: (state) => {
			console.log("fetch");
			state.value = -1;
		},
		getRandomSuccess: (state, action) => {
			console.log("success");
			state.value = action.payload;
		},
		getRandomFailure: (state) => {
			console.log("failure");
			state.value = -10;
		},
	},
});

export const { getRandomFetch, getRandomSuccess, getRandomFailure } =
	numberSlice.actions;
export default numberSlice.reducer;
