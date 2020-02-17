import { handleActions, createAction } from 'redux-actions';

// Action Type
const SAMPLE = 'sample/SAMPLE';

// Action Creator Function
const sample = createAction(SAMPLE);

const INITIAL_STATE = {
	sample: 0,
};

const sampleReducer = () =>
	handleActions(
		{
			[SAMPLE]: (state, action) => {
				return state;
			},
		},
		INITIAL_STATE,
	);

export default sampleReducer;
