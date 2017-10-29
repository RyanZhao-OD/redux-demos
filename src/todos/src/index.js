import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './reducers';
import {FILTER_SHOW_ALL} from './constants';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const initialState = {
    todos: [
        {
            id: -1,
            completed: false,
            text: 'initialTodo1'
        },
        {
            id: -2,
            completed: false,
            text: 'initialTodo2'
        }

    ],
    visibilityFilter: FILTER_SHOW_ALL

};
const store = createStore(reducer, initialState);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});
registerServiceWorker();
