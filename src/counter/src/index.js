import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';
import {createStore} from 'redux';
import reducer from './reducers';
import {increaseAction, decreaseAction, addAction, minusAction} from './actions';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

console.log(createStore);
const store = createStore(reducer);

const render = () => {
    ReactDOM.render(
        <Counter
            val={store.getState()}
            onIncrease={() => {
                store.dispatch(increaseAction())
            }}
            onDecrease={() => {
                store.dispatch(decreaseAction())
            }}
        />,
        document.getElementById('root')
    );
};

render();

const unsubscribe = store.subscribe(() => {
    render();
    console.log(store.getState());
});


registerServiceWorker();
