const {createStore} = require('redux');
const reducer = require('./reducers');
const {ageAction} = require('./actions/ageAction');
const {nameAction} = require('./actions/nameAction');
const {createLogger} = require('redux-logger');

const logger = createLogger();

const {applyMiddleware} = require('redux');
const store = createStore(
    reducer,
    applyMiddleware(logger)
);


const unsubscribe = store.subscribe(() => {
    // console.log(store.getState());
});

store.dispatch(ageAction(25));
store.dispatch(nameAction('ryan'));