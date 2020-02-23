import React from 'react';
import './App.css';
import dotenv from 'dotenv';
import { Provider } from 'react-redux';
import store from './modules/store';
import Home from './components/Home';

dotenv.config();

function App() {
	return (
		<Provider store={store()}>
			<Home />
		</Provider>
	);
}

export default App;
