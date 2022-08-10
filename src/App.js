import { TextField } from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getData } from './actions/weatherActions';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';

class App extends React.Component {
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
	dateToday = (d) => {
		let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

		let month = months[d.getMonth()];
		let year = d.getFullYear();
		let date = d.getDate();

		return `${month} ${date} ${year}`;
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
			<div className={handleWeather}>
				<main>
					<div>
						<form className="search-box" noValidate autoComplete="off" onSubmit={this.searchSubmit}>
							<TextField id="filled-basic" className="search-bar" variant="filled" label="Search US City" onChange={this.onChange}  value={userInput}>
								{/* <input type="text" value={userInput} onChange={this.onChange} /> */}
							</TextField>
						</form>
						{typeof weather.main != 'undefined' ? (
							<div>
								<div className="date">{this.dateToday(new Date())}</div>
								<div className="location-box">
									<div className="location">
										{weather.name}, {weather.sys.country}
									</div>
									<div className="weather">
										{weather.weather[0].main}, {weather.weather[0].description}
									</div>
								</div>
								<div className="temp-box">
									<br />
									<h2 className="temp1">{Math.round(weather.main.temp)}° F</h2>
									<div className="temp2">
										Hi {Math.round(weather.main.temp_max)}° F Lo {Math.round(weather.main.temp_min)}° F
									</div>
								</div>
							</div>
						) : (
							<br />
						)}
					</div>
				</main>
				<footer>Made with OpenWeather Current Weather Data API</footer>
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
export default connect(mapStateToProps, mapDispatchToProps)(App);
