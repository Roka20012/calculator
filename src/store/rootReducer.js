import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import calculationStore, {
	calculationStorePersisterWhiteList,
	calculationStorePersisterBlackList,
} from './calculation/duck';

// example of persist config white list
const calculationStorePersistConfig = {
	key: 'calculationStore',
	storage: storage,
	whitelist: calculationStorePersisterWhiteList,
	blacklist: calculationStorePersisterBlackList,
};

const appReducer = combineReducers({
	calculationStore: persistReducer(
		calculationStorePersistConfig,
		calculationStore
	),
});

export const rootReducer = (state, action) => {
	return appReducer(state, action);
};
