import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: 0 } as { value: number };

export const numberSlice = createSlice({
	name: "number",
	initialState,
	reducers: {
		setValue: (state, action) => {
			state.value = action.payload;
		},
	},
});

export const { setValue } = numberSlice.actions;
export default numberSlice.reducer;
