export const GET_LIST_ALBUMS = 'HOME/GET_LIST_ALBUMS';
export const GET_LIST_ALBUMS_SUCCESS = 'HOME/GET_LIST_ALBUMS_SUCCESS';
export const GET_LIST_ALBUMS_FAIL = 'HOME/GET_LIST_ALBUMS_FAIL';

export const getListAlbum = () => {
	return {
		type: GET_LIST_ALBUMS,
	};
};
