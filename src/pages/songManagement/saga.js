import { put, call, takeEvery } from 'redux-saga/effects';
import {
	GET_LIST_SONGS,
	GET_LIST_SONGS_SUCCESS,
	GET_LIST_SONGS_FAIL,
} from './actions';
import * as Api from './service';

function* getDataSong() {
	try {
		const { response, error } = yield call(Api.getListSong);
		yield put({
			type: GET_LIST_SONGS_SUCCESS,
			data: response.data,
		});
	
	} catch (error) {
		console.log('ERROR: ', error);
		yield put({ type: GET_LIST_SONGS_FAIL, error: error });
	}
}

// Config API to call once or many
function* songFlow() {
	yield takeEvery(GET_LIST_SONGS, getDataSong);
}

export default songFlow;
