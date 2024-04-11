import { call, put, takeEvery } from "redux-saga/effects";
import { getRandomFailure, getRandomSuccess } from "./numberSlice";
import { generateRandom } from "./randomAPI";

function* workGetRandomFetch(): any {
	try {
		const response = yield call(() => generateRandom());
		yield put(getRandomSuccess(response.data));
	} catch (err) {
		yield put(getRandomFailure());
	}
}

export default function* numberSaga() {
	yield takeEvery("number/getRandomFetch", workGetRandomFetch);
}
