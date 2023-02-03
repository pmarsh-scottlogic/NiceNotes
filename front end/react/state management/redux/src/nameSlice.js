import { createSlice } from "@reduxjs/toolkit";

export const nameSlice = createSlice({
	name: "name",
	initialState: {
		chosenName: "",
	},
	reducers: {
		changeName: (state, action) => {
			state.chosenName = action.payload;
		},
	},
});
export const { changeName } = nameSlice.actions;
export default nameSlice.reducer;
