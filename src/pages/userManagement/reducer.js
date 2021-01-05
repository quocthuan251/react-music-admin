import {
	GET_LIST_USERS,
	GET_LIST_USERS_SUCCESS,
	GET_LIST_USERS_FAIL,
} from './action';

const initialState = {
	data: [],
	loading: false,
	error: '',
};

const reducerUser = (state = initialState, action) => {
	switch (action.type) {
		case GET_LIST_USERS: {
			return { ...state, loading: true, error: '' };
		}
		case GET_LIST_USERS_SUCCESS: {
			return { ...state, data: action.data, loading: false };
		}
		case GET_LIST_USERS_FAIL: {
			return { ...state, loading: false, error: action.error };
		}
		default:
			return state;
	}
};
export default reducerUser;
