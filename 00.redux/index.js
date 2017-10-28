const {createStore} = require('redux');
const reducer = require('./reducers');
const {ageAction} = require('./actions/ageAction');
const {nameAction} = require('./actions/nameAction');


const store = createStore(reducer);

console.log(store.getState());

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(ageAction(25));
store.dispatch(nameAction('ryan'));