import weatherReducer from './weatherReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
	weatherData: weatherReducer,
});

export default rootReducer;
