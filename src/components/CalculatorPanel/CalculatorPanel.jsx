import React from 'react';
import { Paper, makeStyles } from '@material-ui/core';

import Button from '../Button';

const useStyles = makeStyles((theme) => ({
	calculatorPanelContainer: {
		width: 280,
		backgroundColor: '#616161',
	},
	doubleButton: {
		fontWeight: 'bold',
		width: 270,
	},
	convertingButton: {
		width: 130,
	},
	primaryButton: {
		fontWeight: 'bold',
		backgroundColor: '#ffb300',
		'&:hover': {
			backgroundColor: '#ffa000',
		},
	},
	simpleButton: {
		fontWeight: 'bold',
		backgroundColor: '#9e9e9e',
		color: 'white',
		'&:hover': {
			backgroundColor: '#bdbdbd',
		},
	},
}));

const BUTTONS = [
	'1',
	'2',
	'3',
	'+',
	'4',
	'5',
	'6',
	'-',
	'7',
	'8',
	'9',
	'*',
	{ label: 'x²', text: '^2' },
	'0',
	'.',
	'/',
	'(',
	')',
	'←',
	{ label: 'C', secondary: true },
	{ label: 'dec', converting: true },
	{ label: 'bin', converting: true },
	{ label: '=', double: true, primary: true },
];

const CalculatorPanel = ({ onChangeValue }) => {
	const classes = useStyles();

	const setValue = (buttonSign) => () => {
		onChangeValue(buttonSign);
	};

	return (
		<Paper className={classes.calculatorPanelContainer}>
			{BUTTONS.map((buttonSign, id) => (
				<Button
					className={[
						buttonSign?.converting && classes.convertingButton,
						buttonSign?.double && classes.doubleButton,
						buttonSign?.primary && classes.primaryButton,
						buttonSign?.secondary && classes.secondaryButton,
						!buttonSign?.double &&
							!buttonSign?.primary &&
							!buttonSign?.secondary &&
							classes.simpleButton,
					]}
					key={id}
					sign={buttonSign?.label || buttonSign}
					onClick={setValue(
						buttonSign?.text || buttonSign?.label || buttonSign
					)}
				/>
			))}
		</Paper>
	);
};

export default CalculatorPanel;
