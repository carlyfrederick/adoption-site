import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import './index.css';
import App from './App';
import configureStore from './store/configureStore';
import registerServiceWorker from './registerServiceWorker';

var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

const store = configureStore();

render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
