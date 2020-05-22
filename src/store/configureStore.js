import thunkMiddleware from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import storage from 'redux-persist/lib/storage';

import { rootReducer } from './rootReducer';

const persistConfig = {
	key: 'root',
	storage: storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default function configureStore() {
	const store = createStore(
		persistedReducer,
		composeWithDevTools(applyMiddleware(thunkMiddleware))
	);
	const persistor = persistStore(store);
	return { store, persistor };
}
