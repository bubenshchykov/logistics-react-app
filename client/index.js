import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import About from './components/About.jsx';
import Logistics from './containers/Logistics.jsx';
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { persistStore, persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { AppContainer } from 'react-hot-loader';
import appReducer from './reducers';

const reducer = persistCombineReducers({key: 'v0', storage}, appReducer);

const store = createStore(reducer,
	window.__REDUX_DEVTOOLS_EXTENSION__
	&& window.__REDUX_DEVTOOLS_EXTENSION__()
);

let persistor = persistStore(store);

const root = document.getElementById('root');

const render = () => ReactDOM.render(
	<Provider store={store}>
		<AppContainer>
			<Router>
				<App>
					<Route path="/stocks/:stock?" component={Logistics} />
			    	<Route path="/about" component={About} />
			    </App>
			 </Router>
    	</AppContainer>
	</Provider>,
	root);

render();

if (module.hot) {
	module.hot.accept('./components/App.jsx', () => {
	  render(require('./components/App.jsx').default);
	});
	module.hot.accept('./reducers', () => {
      store.replaceReducer(reducer);
    });
}