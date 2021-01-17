export const GET_LIST_SINGERS = 'HOME/GET_LIST_SINGERS';
export const GET_LIST_SINGERS_SUCCESS = 'HOME/GET_LIST_SINGERS_SUCCESS';
export const GET_LIST_SINGERS_FAIL = 'HOME/GET_LIST_SINGERS_FAIL';

export const getListSingerManager = () => {
	return {
		type: GET_LIST_SINGERS,
	};
};
