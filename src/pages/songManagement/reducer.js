import {
	GET_LIST_SONGS,
	GET_LIST_SONGS_SUCCESS,
	GET_LIST_SONGS_FAIL,
} from './actions';
const initialState = {
	data: [],
	loading: false,
	error: '',
};

const reducerSong = (state = initialState, action) => {
	switch (action.type) {
		case GET_LIST_SONGS: {
			return { ...state, loading: true, error: '' };
		}
		case GET_LIST_SONGS_SUCCESS: {
			return { ...state, data: action.data, loading: false };
		}
		case GET_LIST_SONGS_FAIL: {
			return { ...state, loading: false, error: action.error };
		}
		default:
			return state;
	}
};
export default reducerSong;
