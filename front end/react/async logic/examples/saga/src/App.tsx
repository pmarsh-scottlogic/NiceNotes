import React from "react";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { getRandomFetch } from "./features/numberSlice";
function App() {
	const number = useAppSelector((state) => state.number.value);
	const dispatch = useAppDispatch();
	return (
		<div className="App">
			<button
				onClick={() => {
					dispatch(getRandomFetch());
				}}>
				press me
			</button>
			{"\n" + number}
		</div>
	);
}

export default App;
