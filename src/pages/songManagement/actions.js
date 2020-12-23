export const GET_LIST_SONGS = 'HOME/GET_LIST_SONGS';
export const GET_LIST_SONGS_SUCCESS = 'HOME/GET_LIST_SONGS_SUCCESS';
export const GET_LIST_SONGS_FAIL = 'HOME/GET_LIST_SONGS_FAIL';

export const getListSong = () => {
	return {
		type: GET_LIST_SONGS,
	};
};
