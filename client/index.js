import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import { AppContainer } from 'react-hot-loader';

function render(Root) {
    ReactDOM.render(<AppContainer><App/></AppContainer>, document.getElementById('root'));
}

render();

if(module.hot) {
    module.hot.accept('./components/App.jsx', () => {
        render(require('./components/App.jsx').default);
    });
}