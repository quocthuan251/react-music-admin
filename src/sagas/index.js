import { all } from 'redux-saga/effects';
import songFlow from '../pages/songManagement/saga';
import singerFlow from '../pages/singerManagement/saga';
// import artistFlow from '../components/singer/saga';
// import usersFlow from '../pages/userProfile/saga';
export default function* rootSaga() {
	yield all([songFlow(), singerFlow()]);

}
