import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App.jsx';
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import reducer from './reducers';

const store = createStore(reducer,
	window.__REDUX_DEVTOOLS_EXTENSION__
	&& window.__REDUX_DEVTOOLS_EXTENSION__()
);

const root = document.getElementById('root');

const render = () => ReactDOM.render(
	<Provider store={store}>
		<AppContainer><App/></AppContainer>
	</Provider>,
	root);

render();

if (module.hot) {
	module.hot.accept('./containers/App.jsx', () => {
	  render(require('./containers/App.jsx').default);
	});
	module.hot.accept('./reducers', () => {
      store.replaceReducer(reducer);
    });
}