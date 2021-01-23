import { GET_LOGIN, GET_LOGIN_SUCCESS, GET_LOGIN_FAIL } from './actions';

const initialState = {
	data: [],
	loading: false,
	userToken: '',
	error: '',
	authenticated: false,
	test: true,
};

const reducerLogin = (state = initialState, action) => {
	switch (action.type) {
		case GET_LOGIN: {
			return { ...state, loading: true, error: '' };
		}
		case GET_LOGIN_SUCCESS: {
			console.log('hello');
			localStorage.setItem('@userToken', action.data);
			return {
				...state,
				data: action.data,
				userToken: action.data,
				loading: false,
				authenticated: true,
			};
		}
		case GET_LOGIN_FAIL: {
			console.log('hello fail');
			return { ...state, test: false, error: action.error };
		}
		default:
			return state;
	}
};
export default reducerLogin;
