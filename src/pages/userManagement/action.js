export const GET_LIST_USERS = 'HOME/GET_LIST_USERS';
export const GET_LIST_USERS_SUCCESS = 'HOME/GET_LIST_USERS_SUCCESS';
export const GET_LIST_USERS_FAIL = 'HOME/GET_LIST_USERS_FAIL';

export const getListUser = () => {
	return {
		type: GET_LIST_USERS,
	};
};
