/**
 * Create the store with dynamic reducers
 */

import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
// import { persistStore, persistReducer, createMigrate } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import immutableTransform from 'redux-persist-transform-immutable';
// import createFilter from 'redux-persist-transform-filter-immutable';
// import appReducer, { REHYDRATE_COMPLETE } from '../reducers';
import reducer from '../reducers';
import rootSaga from '../sagas';
// import migrations from './migration';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore(initialState = {}) {
	// Create the store with two middlewares
	// 1. sagaMiddleware: Makes redux-sagas work
	// 2. routerMiddleware: Syncs the location/URL path to the state
	const middlewares = [sagaMiddleware];

	const enhancers = [applyMiddleware(...middlewares)];

	// If Redux DevTools Extension is installed use it, otherwise use Redux compose
	/* eslint-disable no-underscore-dangle, indent */
	const composeEnhancers =
		process.env.NODE_ENV !== 'production' &&
		typeof window === 'object' &&
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
			? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
					shouldHotReload: false,
			  })
			: compose;
	/* eslint-enable */

	const store = createStore(
		reducer,
		initialState,
		composeEnhancers(...enhancers)
	);

	// start sagas
	sagaMiddleware.run(rootSaga);

	// Extensions
	store.runSaga = sagaMiddleware.run;
	store.injectedReducers = {}; // Reducer registry
	store.injectedSagas = {}; // Saga registry

	// Make reducers hot reloadable, see http://mxs.is/googmo
	/* istanbul ignore next */

	return { store };
}
