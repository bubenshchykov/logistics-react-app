import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { AppContainer } from 'react-hot-loader';

import App from './components/App';
import About from './components/About';
import Logistics from './containers/Logistics';
import devTools from './devTools';
import appReducer from './reducers';

const reducer = persistReducer({ key: 'v0', storage }, appReducer);
const store = createStore(reducer, devTools.storeEnhancer);
persistStore(store);
const root = document.getElementById('root');

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <AppContainer>
        <Router>
          <App>
            <Route path="/" exact component={Logistics} />
            <Route path="/stocks/:stock?" component={Logistics} />
            <Route path="/about" component={About} />
          </App>
        </Router>
      </AppContainer>
    </Provider>,
    root,
  );
};

render();

devTools.hotReload(render, reducer);
