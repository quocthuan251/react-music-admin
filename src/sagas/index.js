import { all } from 'redux-saga/effects';
import songFlow from '../pages/songManagement/saga';
import singerFlow from '../pages/singerManagement/saga';
import albumFlow from '../pages/albumManagement/saga';
import loginFlow from '../pages/signin/saga';
// import artistFlow from '../components/singer/saga';
import usersFlow from '../pages/userManagement/saga';
export default function* rootSaga() {
	yield all([
		songFlow(),
		singerFlow(),
		albumFlow(),
		usersFlow(),
		loginFlow(),
	]);
}
