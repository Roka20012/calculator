import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import worker from 'workerize-loader!./worker'; // eslint-disable-line import/no-webpack-loader-syntax

import Calculator from './containers/Calculator';

import storeData from './store';

const { store, persistor } = storeData;

const workerInstance = worker();

const App = () => {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<Calculator />
			</PersistGate>
		</Provider>
	);
};

export default App;
export { workerInstance };
