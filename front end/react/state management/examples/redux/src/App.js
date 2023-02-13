import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeName } from "./nameSlice";

function App() {
	const name = useSelector((state) => state.name.chosenName);
	const dispatch = useDispatch();
	console.log(name + " " + typeof name);
	return (
		<div>
			{"" + name}
			<button onClick={() => dispatch(changeName("William"))}>
				William
			</button>
			<button onClick={() => dispatch(changeName("Arnold"))}>
				Arnold
			</button>
			<button onClick={() => dispatch(changeName("Joe"))}>Joe</button>
		</div>
	);
}

export default App;
