import React from 'react';
import ReactDOM from 'react-dom';
import CounterContainer from './container/CounterContainer';
import {Provider} from 'react-redux';
import store from './store';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
    <Provider store={store}>
        <CounterContainer />
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
