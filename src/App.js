import React from 'react';
import './App.css';
import dotenv from 'dotenv';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import rootReducer from './modules';

dotenv.config();

const middleware = [createLogger()];
const store = createStore(
	rootReducer,
	/* preloadState, */ composeWithDevTools(applyMiddleware(...middleware)),
);

function App() {
	return (
		<Provider store={store}>
			<div className="App">Economic-statistics</div>
		</Provider>
	);
}

export default App;
