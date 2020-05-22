import React from 'react';
import { Button as MaterialButton, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	button: {
		minWidth: '60px',
		width: '60px',
		height: '60px',
		margin: '5px',
		color: 'white',
	},
}));

const Button = ({ sign, className, color, ...props }) => {
	const classes = useStyles();
	return (
		<MaterialButton
			className={[classes.button, className]}
			variant='contained'
			color={color}
			{...props}
		>
			<p>{sign}</p>
		</MaterialButton>
	);
};

export default Button;
