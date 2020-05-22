import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import Calculator from './containers/Calculator';

import storeData from './store';

const { store, persistor } = storeData;

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
