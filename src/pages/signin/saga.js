import { put, call, takeEvery } from 'redux-saga/effects';
import { GET_LOGIN, GET_LOGIN_SUCCESS, GET_LOGIN_FAIL } from './actions';
import * as songApi from './service';

function* getLoginUser({ payload }) {
	try {
		// console.log('lò 2222');
		console.log(payload);
		const { response, error } = yield call(
			songApi.getAPILoginUser,
			payload
		);
		// console.log(response);
		yield put({
			type: GET_LOGIN_SUCCESS,
			data: response.data,
		});
	} catch (error) {
		console.log('ERROR: ', error);
		yield put({ type: GET_LOGIN_FAIL, error: error });
	}
}

// Config API to call once or many
function* loginFlow() {
	yield takeEvery(GET_LOGIN, getLoginUser);
}

export default loginFlow;
