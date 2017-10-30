import {createStore, applyMiddleware} from 'redux';
import reducer from '../reducers';
import thunk from 'redux-thunk';

const initialState = {
    val: 0,
    status: 'loaded'
}
let store = createStore(
    reducer,
    initialState,
    applyMiddleware(thunk)
);
const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

export default store;
