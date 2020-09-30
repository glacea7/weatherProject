import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getData } from '../actions/weatherActions';

class WeatherNew extends React.Component {
	state = {
		userInput: '',
		isSearching: false,
	};
	onChange = (event) => {
		let { userInput } = this.state;
		userInput = event.target.value;
		console.log(userInput);
		this.setState({ userInput: userInput });
	};
	searchSubmit = async (event) => {
		const { userInput } = this.state;
		const { triggerGetData } = this.props;
		event.preventDefault();
		this.setState({ isSearching: true });
		await triggerGetData(userInput);
		this.setState({ userInput: '', isSearching: false });
	};
	render() {
		let handleWeather = 'AppDefault';
		const { isSearching, userInput } = this.state;
		const { weather } = this.props;

		if (isSearching && !weather.weather) {
			return <div>Loading...</div>;
		}

		if (weather.weather && weather.weather[0] && weather.weather[0].main && weather.weather[0].main === 'Clear') {
			handleWeather = 'AppClear';
		}
		if (weather.weather && weather.weather[0] && weather.weather[0].main && weather.weather[0].main === 'Clouds') {
			handleWeather = 'AppCloudy';
		}
		if (weather.weather && weather.weather[0] && weather.weather[0].main && weather.weather[0].main === 'Thunderstorm') {
			handleWeather = 'AppThunderStorm';
		}
		if (weather.weather && weather.weather[0] && weather.weather[0].main && weather.weather[0].main === 'Clear') {
			handleWeather = 'AppClear';
		}
		if (weather.weather && weather.weather[0] && weather.weather[0].main && weather.weather[0].main === 'Rain') {
			handleWeather = 'AppRainy';
		}
		if (weather.weather && weather.weather[0] && weather.weather[0].main && weather.weather[0].main === 'Drizzle') {
			handleWeather = 'AppRainy';
		}
		return (
			<div>
				<div className={handleWeather}>
					<div className="search-box">
						<form className="search-bar" onSubmit={this.searchSubmit}>
							<input type="text" placeholder="search city" value={userInput} onChange={this.onChange} />
						</form>
					</div>
					{weather.main != 'undefined' ? (
						<div className="location-box">
							<div className="location">{weather.weather}</div>
						</div>
					) : (
						' '
					)}
				</div>
			</div>
		);
	}
}
const mapStateToProps = (state) => {
	return { weather: state.weatherData.weather };
};
const mapDispatchToProps = (dispatch) => {
	return { triggerGetData: bindActionCreators(getData, dispatch) };
};
export default connect(mapStateToProps, mapDispatchToProps)(WeatherNew);
