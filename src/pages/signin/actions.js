export const GET_LOGIN = 'USER/GET_LOGIN';
export const GET_LOGIN_SUCCESS = 'USER/GET_LOGIN_SUCCESS';
export const GET_LOGIN_FAIL = 'USER/GET_LOGIN_FAIL';

export const getLogin = (user, password) => {
	return {
		type: GET_LOGIN,
		payload: {
			user,
			password,
		},
	};
};
