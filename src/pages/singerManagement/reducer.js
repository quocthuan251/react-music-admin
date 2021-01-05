import {
	GET_LIST_SINGERS,
	GET_LIST_SINGERS_SUCCESS,
	GET_LIST_SINGERS_FAIL,
} from './action';

const initialState = {
	data: [],
	loading: false,
	error: '',
};

const reducerSinger = (state = initialState, action) => {
	switch (action.type) {
		case GET_LIST_SINGERS: {
			return { ...state, loading: true, error: '' };
		}
		case GET_LIST_SINGERS_SUCCESS: {
			return { ...state, data: action.data, loading: false };
		}
		case GET_LIST_SINGERS_FAIL: {
			return { ...state, loading: false, error: action.error };
		}
		default:
			return state;
	}
};
export default reducerSinger;
