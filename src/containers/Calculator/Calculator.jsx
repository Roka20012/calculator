import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { workerInstance } from '../../App';

import CalculatorPanel from '../../components/CalculatorPanel';
import ResultsOutput from '../../components/ResultsOutput';
import HistoryPanel from '../../components/HistoryPanel';

const useStyles = makeStyles((theme) => ({
	calculatorContainerGrid: {
		width: 620,
		margin: '0 auto',
		marginTop: 200,
		marginBottom: 200,
		padding: 20,
		backgroundColor: '#9e9e9e',
		boxShadow: '0px 0px 20px -10px black',
		alignSelf: 'center',
		justifyContent: 'space-between',
	},
	calculatorGrid: {
		marginBottom: 10,
	},
	calculatorContainer: {
		display: 'flex',
		width: 620,
		margin: '0 auto',
	},
}));

const Calculator = () => {
	const classes = useStyles();
	const [value, setValue] = useState('');
	const [history, setHistory] = useState([]);

	workerInstance.onmessage = ({ data }) => {
		if (data?.result?.value || data?.result?.history) {
			const { value, history } = data?.result;
			setValue(value);
			setHistory(history);
		}
	};

	const onChangeValue = (nextValue) => {
		workerInstance.calculate(value, nextValue, history);
	};

	return (
		<Grid
			className={classes.calculatorContainerGrid}
			container
			direction='row'
			justify='center'
			alignItems='center'
		>
			<Grid className={classes.calculatorGrid} item xs={12}>
				<ResultsOutput value={value} />
			</Grid>
			<Grid item xs={6}>
				<CalculatorPanel onChangeValue={onChangeValue} />
			</Grid>
			<HistoryPanel history={history} onChangeValue={setValue} />
		</Grid>
	);
};

export default Calculator;
