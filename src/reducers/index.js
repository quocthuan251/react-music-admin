//main redux
import { combineReducers } from 'redux';
import reducerSong from '../pages/songManagement/reducer';
import reducerSinger from '../pages/singerManagement/reducer';
import reducerUser from '../pages/userManagement/reducer';

const reducer = combineReducers({
	reducerSinger,
	reducerSong,
	reducerUser,
});
export default reducer;
