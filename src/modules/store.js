import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import rootReducer, { rootSaga } from './index';
import { composeWithDevTools } from 'redux-devtools-extension';

const sagaMiddleware = createSagaMiddleware();
const middleware = [createLogger(), ReduxThunk, sagaMiddleware];
const store = preloadedState => {
	const instance = createStore(
		rootReducer,
		preloadedState,
		composeWithDevTools(applyMiddleware(...middleware)),
	);
	sagaMiddleware.run(rootSaga);
	return instance;
};

export default store;
