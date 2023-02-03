import React, { useState } from "react";

function App() {
	const [growString, setGrowstring] = useState(":)");
	return (
		<div>
			<button onClick={() => setGrowstring(growString + ")")}>
				grow
			</button>
			{growString}
		</div>
	);
}

export default App;
