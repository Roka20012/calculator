export const calculate = (value, nextValue, prevHistory) => {
	const newValue = value === 'Error' ? nextValue : value + nextValue;
	switch (nextValue) {
		case '=':
			try {
				const isInvalid = ~value.indexOf('**');
				if (/^\d+$/.test(value)) break;
				if (isInvalid) {
					return { value: 'Error', history: prevHistory };
				}
				const expression = value.replace(/\^/g, '**');
				if (expression === 'Error') break;
				// eslint-disable-next-line
				const result = eval(expression);
				if (!result && result !== 0) {
					return { value: 'Error', history: prevHistory };
				} else {
					return {
						value: result,
						history: [...prevHistory, { expression: value }],
					};
				}
			} catch (err) {
				return { value: 'Error', history: prevHistory };
			}
		case 'C':
			return { value: '', history: prevHistory };
		case '←':
			return { value: value.slice(0, -1), history: prevHistory };
		case 'dec':
			const decValue = parseInt(value, 2);
			const newVal = isNaN(decValue) ? 'Error' : decValue;
			return { value: newVal, history: prevHistory };
		case 'bin':
			const binValue = +value;
			const newVale = isNaN(binValue) ? 'Error' : binValue.toString(2);
			return { value: newVale, history: prevHistory };
		default:
			return { value: newValue, history: prevHistory };
	}
};
