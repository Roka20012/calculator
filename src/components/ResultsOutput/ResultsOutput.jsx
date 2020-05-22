import React from 'react';
import { makeStyles, Card, CardContent, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	titleContainer: {
		backgroundColor: '#616161',
	},
	title: {
		height: 15,
		textAlign: 'right',
		fontWeight: 'bold',
		color: 'white',
	},
}));

const ResultsOutput = ({ value }) => {
	const classes = useStyles();
	return (
		<Card className={classes.titleContainer}>
			<CardContent>
				<Typography className={classes.title}>{value}</Typography>
			</CardContent>
		</Card>
	);
};

export default ResultsOutput;
