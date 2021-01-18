import {
	GET_LIST_ALBUMS,
	GET_LIST_ALBUMS_SUCCESS,
	GET_LIST_ALBUMS_FAIL,
} from './action';
import { openNotificationWithIcon } from '../../utils/index';
import { STATUS } from '../../common/enums/status';
const initialState = {
	data: [],
	loading: false,
	error: '',
};

const reducerAlbum = (state = initialState, action) => {
	switch (action.type) {
		case GET_LIST_ALBUMS: {
			return { ...state, loading: true, error: '' };
		}
		case GET_LIST_ALBUMS_SUCCESS: {
			openNotificationWithIcon(STATUS.SUCCESS, 'Update Succeeded', 3);
			return { ...state, data: action.data, loading: false };
		}
		case GET_LIST_ALBUMS_FAIL: {
			return { ...state, loading: false, error: action.error };
		}
		default:
			return state;
	}
};
export default reducerAlbum;
