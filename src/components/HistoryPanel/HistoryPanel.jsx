import React from 'react';
import {
	Paper,
	Typography,
	makeStyles,
	List,
	ListItem,
	ListItemText,
	Button,
} from '@material-ui/core';
import { FixedSizeList } from 'react-window';

const useStyles = makeStyles((theme) => ({
	historyPanel: {
		width: 280,
		height: 490,
		flex: 1,
		textWeight: 'bold',
		alignSelf: 'flex-start',
		textAlign: 'center',
		backgroundColor: '#616161',
		color: 'white',
		overflow: 'scroll',
	},
	root: {
		width: '100%',
	},
	historyItem: {
		width: '100%',
		color: 'white',
	},
	historyTitle: {
		marginTop: 10,
		fontWeight: 'bold',
		color: 'white',
		userSelect: 'none',
	},
}));

const RenderHistoryItem = ({ historyItem, onChangeValue, id }) => {
	const classes = useStyles();
	const setHistoryExpression = () => {
		onChangeValue(historyItem);
	};

	return (
		<Button className={classes.historyItem} onClick={setHistoryExpression}>
			<Typography variant='subtitle2'>{historyItem}</Typography>
		</Button>
	);
};

const HistoryPanel = ({ history, onChangeValue }) => {
	const classes = useStyles();
	return (
		<Paper className={classes.historyPanel}>
			<Typography className={classes.historyTitle}>History</Typography>
			<div className={classes.root}>
				<List>
					{history.length !== 0 &&
						history.map(({ expression }, id) => (
							<RenderHistoryItem
								key={id}
								id={id}
								historyItem={expression}
								onChangeValue={onChangeValue}
							/>
						))}
				</List>
			</div>
		</Paper>
	);
};

export default HistoryPanel;
