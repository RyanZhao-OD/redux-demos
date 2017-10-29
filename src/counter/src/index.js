import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import reducer from './reducers';
import CounterContainer from './container/CounterContainer';
import { Provider } from 'react-redux';

import registerServiceWorker from './registerServiceWorker';
import './index.css';

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <CounterContainer />
    </Provider>,
    document.getElementById('root')
);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});


registerServiceWorker();
