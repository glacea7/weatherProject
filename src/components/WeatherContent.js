import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getData } from '../actions/weatherActions';
import '../App.css';

class WeatherContent extends React.Component {
	state = {
		currentWeather: null,
		userInput: '',
	};
	onChange = (event) => {
		let { userInput } = this.state;
		userInput = event.target.value;
		console.log(userInput);
		this.setState({ userInput: userInput });
	};
	searchSubmit = (event) => {
		const { userInput } = this.state;
		const { triggerGetData, weather } = this.props;
		event.preventDefault();
		triggerGetData(userInput);
		this.setState({ userInput: '' });
	};
	// handleWeather = () => {
	// 	const { weather } = this.props;
	// 	weather.weather[0].main != 'undefined' ? (weather.weather[0].main === 'Clear' ? 'AppClear' : 'AppDefault') : 'AppDefault';
	// };
	render() {
		const { userInput } = this.state;
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
				<main>
					<div className="search-box">
						<form className="search-bar" onSubmit={this.searchSubmit}>
							<input type="text" placeholder="Search City or ZIP" value={userInput} onChange={this.onChange} />
						</form>
					</div>
					
					{weather.main != 'undefined' ? (
						
								<div className="temp">
									<h1>{Math.round(weather.main.temp)}° F</h1>
									<div> {weather.weather.main} </div>
									<h2>
										Hi {weather.main.temp_max}° F Lo {weather.main.temp_min}° F
									</h2>
								</div>
							</div>
							<div></div>
						</div>
					) : (
					" "
					)}
				</main>
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
export default connect(mapStateToProps, mapDispatchToProps)(WeatherContent);
