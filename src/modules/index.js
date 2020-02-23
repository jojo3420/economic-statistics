import { combineReducers } from 'redux';
import sampleReducer, { sagaSampleHandler } from './sample';
import { all } from 'redux-saga/effects';

const rootReducer = combineReducers({
	sample: sampleReducer,
});

export function* rootSaga() {
	yield all([sagaSampleHandler()]);
}

export default rootReducer;
