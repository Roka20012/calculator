import React, { useState } from 'react';
import { Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

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
		backgroundColor: '#fafafa',
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

	const onChangeValue = (nextValue) => {
		const newValue = value === 'Error' ? nextValue : value + nextValue;
		switch (nextValue) {
			case '=':
				try {
					const isInvalid = ~value.indexOf('**');
					if (/^\d+$/.test(value)) break;
					if (isInvalid) {
						setValue('Error');
					}
					const expression = value.replace(/\^/g, '**');
					if (expression === 'Error') break;
					const result = eval(expression);
					if (!result && result !== 0) {
						setValue('Error');
					} else {
						setValue(result);
						setHistory((prevHistory) => [
							...prevHistory,
							{ expression: value },
						]);
					}
				} catch (err) {
					setValue('Error');
				}
				break;
			case 'C':
				setValue('');
				break;
			case '←':
				setValue(value.slice(0, -1));
				break;
			case 'dec':
				const decValue = parseInt(value, 2);
				const newVal = isNaN(decValue) ? 'Error' : decValue;
				setValue(newVal);
				break;
			case 'bin':
				const binValue = +value;
				const newVale = isNaN(binValue) ? 'Error' : binValue;
				setValue(newVale.toString(2));
				break;
			default:
				setValue(newValue);
				break;
		}
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
