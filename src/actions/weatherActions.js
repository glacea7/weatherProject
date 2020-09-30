import axios from 'axios';

export const getData = (userInput) => {
	return async (dispatch, getState) => {
		try {
			const url = `https://api.openweathermap.org/data/2.5/weather?q=${userInput}&units=imperial&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;
			const result = await axios.get(url);
			const weather = result.data;
			console.log(result.data);

			dispatch({
				type: 'GET_DATA',
				payload: { weather: weather },
			});
		} catch (error) {
			console.log('ERROR 404:', error.message);
		}
	};
};
