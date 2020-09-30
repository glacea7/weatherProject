const initialState = {
	weather: [],
};

function weatherReducer(state = initialState, action) {
	switch (action.type) {
		case 'GET_DATA': {
			const { weather } = action.payload;
			return {
				...state,
				weather: weather,
			};
		}
		default:
			return state;
	}
}
export default weatherReducer;
