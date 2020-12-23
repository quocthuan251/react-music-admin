//main redux
import { combineReducers } from 'redux';
import reducerSong from '../pages/songManagement/reducer';
const reducer = combineReducers({
	reducerSong,
});
export default reducer;
