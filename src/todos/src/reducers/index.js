import {combineReducers} from 'redux';
// import {addTodo, setVisibilityFilter, toggleTodo} from '../actions';
import todoReducer from './todoReducer';
import visibilityFilterReducer from './visibilityFilterReducer';

export default combineReducers({
    todos: todoReducer,
    visibilityFilter: visibilityFilterReducer
});