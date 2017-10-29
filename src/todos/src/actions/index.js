let nextTodoId = 0;
export const ADD_TODO = 'add_todo';
export const TOGGLE_TODO = 'toggle_todo';
export const SET_VISIBILITY_FILTER = 'set_visibility_filter';

export const addTodoAction = text => ({
    type: ADD_TODO,
    id: nextTodoId++,
    text
});

export const toggleTodoAction = id => ({
    type: TOGGLE_TODO,
    id
});

export const setVisibilityFilterAction = filter => ({
    type: SET_VISIBILITY_FILTER,
    filter
});