import { call, put, takeEvery } from "redux-saga/effects";
import { getRandomFailure, getRandomSuccess } from "./numberSlice";
import { generateRandom } from "./randomAPI";

function* workGetRandomFetch(): any {
	const { response, error } = yield call(() => generateRandom());
	if (response) {
		const number = response.data;
		yield put(getRandomSuccess(number));
	} else {
		yield put(getRandomFailure(error));
	}
}

export default function* numberSaga() {
	yield takeEvery("number/getRandomFetch", workGetRandomFetch);
}
