import { put, call, takeEvery } from 'redux-saga/effects';
import {
	GET_LIST_SINGERS,
	GET_LIST_SINGERS_SUCCESS,
	GET_LIST_SINGERS_FAIL,
} from './action';
import * as Api from './service';

function* getDataSinger() {
	try {
		const { response, error } = yield call(Api.getListSinger);
		console.log('haha');
		yield put({
			type: GET_LIST_SINGERS_SUCCESS,
			data: response.data,
		});
	} catch (error) {
		console.log('ERROR: ', error);
		yield put({ type: GET_LIST_SINGERS_FAIL, error: error });
	}
}

// Config API to call once or many
function* singerFlow() {
	yield takeEvery(GET_LIST_SINGERS, getDataSinger);
}

export default singerFlow;
