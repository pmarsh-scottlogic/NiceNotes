// A mock function to mimic making an async request for data
export function generateRandom() {
	return new Promise<{ data: number }>((resolve, reject) =>
		setTimeout(() => {
			const num = Math.random() * 100;
			if (num < 80) {
				resolve({ data: num });
			} else {
				reject("too large");
			}
		}, 500)
	);
}
