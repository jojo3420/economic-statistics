/**
 * Redux Thunk Middleware Common Request creator
 * @param actionType
 * @param requestFn
 * @returns {function(*=): function(...[*]=)}
 */
export default function createRequestThunk(actionType, requestFn) {
	return params => async dispatch => {
		const SUCCESS = `${actionType}_SUCCESS`;
		const FAILURE = `${actionType}_FAILURE`;
		dispatch({ type: actionType });
		try {
			const response = await requestFn(params);
			dispatch({ type: SUCCESS, payload: response.data });
		} catch (e) {
			dispatch({ type: FAILURE, payload: e, error: true });
			throw e;
		}
	};
}
