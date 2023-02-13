import React from "react";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { setValue } from "./features/numberSlice";
import { generateRandom } from "./features/randomAPI";

function App() {
	const number = useAppSelector((state) => state.number.value);
	const dispatch = useAppDispatch();

	const handleClick = () => {
		// pending, rejected and eccpeted states are handled here, and the store is updated manually.
		dispatch(setValue(-1));
		generateRandom()
			.then((returnedValue) => dispatch(setValue(returnedValue.data)))
			.catch((message) => dispatch(setValue(-10)));
	};

	return (
		<div className="App">
			<button onClick={handleClick}>press me</button>
			{"\n" + number}
		</div>
	);
}

export default App;
