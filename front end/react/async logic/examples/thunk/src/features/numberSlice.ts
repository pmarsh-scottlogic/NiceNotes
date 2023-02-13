import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { generateRandom } from "./randomAPI";

export const fetchRandom = createAsyncThunk("counter/fetchRandom", async () => {
	console.log("randomAsync");
	const response = await generateRandom();
	return response.data;
});

const initialState = { value: 0 } as { value: number };

export const numberSlice = createSlice({
	name: "number",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchRandom.pending, (state) => {
				state.value = -1;
			})
			.addCase(fetchRandom.fulfilled, (state, action) => {
				state.value = action.payload;
			})
			.addCase(fetchRandom.rejected, (state) => {
				state.value = -10;
			});
	},
});

export default numberSlice.reducer;
