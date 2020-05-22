import { createRoutine } from 'redux-routines';

export const calculateActions = createRoutine('CALCULATION/ADD');
export const exponentiationActions = createRoutine(
	'CALCULATION/EXPONENTIATION'
);
export const toDecimalActions = createRoutine('CALCULATION/TO_DECIMAL');
export const toBinaryActions = createRoutine('CALCULATION/TO_BINARY');

// If you want add something, that need to be saved in Storage, add it also in whitelist of these arrays
export const calculationStorePersisterWhiteList = [];
export const calculationStorePersisterBlackList = [];

const initialState = {
	history: null,
	result: null,
};

const gameStore = (state = initialState, { type, payload }) => {
	switch (type) {
		// SET THE CURRENT GAME STEP
		case calculateActions.SUCCESS:
			return {
				...state,
				// eslint-disable-next-line
				result: eval(payload),
				history: payload,
			};
		case exponentiationActions.SUCCESS:
			return {
				...state,
				// eslint-disable-next-line
				result: eval(payload),
				history: payload,
			};
		default:
			return state;
	}
};

export default gameStore;

//ACTIONS
export const calculate = (expression) => calculateActions.success;
export const exponentiation = (expression) => exponentiationActions.success;
