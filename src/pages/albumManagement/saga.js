import { put, call, takeEvery } from 'redux-saga/effects';
import {
	GET_LIST_ALBUMS,
	GET_LIST_ALBUMS_SUCCESS,
	GET_LIST_ALBUMS_FAIL,
} from './action';
import * as Api from './service';

function* getDataAlbum() {
	try {
		const { response, error } = yield call(Api.getListAlbum);
		yield put({
			type: GET_LIST_ALBUMS_SUCCESS,
			data: response.data,
		});
	} catch (error) {
		console.log('ERROR: ', error);
		yield put({ type: GET_LIST_ALBUMS_FAIL, error: error });
	}
}

// Config API to call once or many
function* albumFlow() {
	yield takeEvery(GET_LIST_ALBUMS, getDataAlbum);
}

export default albumFlow;
