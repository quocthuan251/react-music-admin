//main redux
import { combineReducers } from 'redux';
import reducerSong from '../pages/songManagement/reducer';
import reducerSinger from '../pages/singerManagement/reducer';
import reducerUser from '../pages/userManagement/reducer';
import reducerAlbum from '../pages/albumManagement/reducer';
import reducerLogin from '../pages/signin/reducer';

const reducer = combineReducers({
	reducerSinger,
	reducerSong,
	reducerUser,
	reducerAlbum,
	reducerLogin,
});
export default reducer;
