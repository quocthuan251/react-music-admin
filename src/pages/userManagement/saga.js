import { put, call, takeEvery } from 'redux-saga/effects';
import {
	GET_LIST_USERS,
	GET_LIST_USERS_SUCCESS,
	GET_LIST_USERS_FAIL,
} from './action';
import * as Api from './service';

function* getDataUser() {
	try {
		const { response, error } = yield call(Api.getListUser);
		yield put({
			type: GET_LIST_USERS_SUCCESS,
			data: response.data,
		});
	} catch (error) {
		console.log('ERROR: ', error);
		yield put({ type: GET_LIST_USERS_FAIL, error: error });
	}
}

// Config API to call once or many
function* usersFlow() {
	yield takeEvery(GET_LIST_USERS, getDataUser);
}

export default usersFlow;
