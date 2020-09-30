import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import { MulThemeProvider, createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { purple, red, yellow } from '@material-ui/core/colors';

const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

const theme = createMuiTheme({
	palette: {
		primary: { main: '#ffcdd2' },
		secondary: {
			main: '#f44336',
		},
	},
});
console.log(theme);
ReactDOM.render(
	<Provider store={store}>
		<MuiThemeProvider theme={theme}>
			<React.StrictMode>
				<App />
			</React.StrictMode>
			,
		</MuiThemeProvider>
		,
	</Provider>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
