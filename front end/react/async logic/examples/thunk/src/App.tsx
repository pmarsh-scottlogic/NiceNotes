import React from "react";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { fetchRandom } from "./features/numberSlice";
function App() {
	const number = useAppSelector((state) => state.number.value);
	const dispatch = useAppDispatch();
	return (
		<div className="App">
			<button
				onClick={() => {
					dispatch(fetchRandom());
				}}>
				press me
			</button>
			{"\n" + number}
		</div>
	);
}

export default App;
