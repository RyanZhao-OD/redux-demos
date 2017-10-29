import React from 'react';
import { connect } from 'react-redux';

import TodoList from '../components/TodoList';
import {toggleTodoAction} from '../actions';


import {FILTER_SHOW_ALL, FILTER_SHOW_COMPLETED, FILTER_SHOW_ACTIVE} from '../constants';

const getVisibleTodoList = (todos, filter) => {
    switch (filter) {
        case FILTER_SHOW_ALL:
            return todos;
            break;
        case FILTER_SHOW_COMPLETED:
            return todos.filter(item => item.completed);
            break;
        case FILTER_SHOW_ACTIVE:
            return todos.filter(item => !item.completed);
            break;
        default:
            return todos;
    }


};
const mapStateToProps = (state, ownProps) => ({
    todos: getVisibleTodoList(state.todos, state.visibilityFilter)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onToggleTodo(id) {
        dispatch(toggleTodoAction(id));
    }
});


export default connect(mapStateToProps, mapDispatchToProps)(TodoList);