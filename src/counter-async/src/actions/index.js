import fetch from 'isomorphic-fetch';
import {
    ADD_POSTS_REQUEST, ADD_POSTS_SUCCESS, ADD_POSTS_FAILURE,
    MINUS_POSTS_REQUEST, MINUS_POSTS_SUCCESS, MINUS_POSTS_FAILURE,
    INCREASE_POSTS_REQUEST, INCREASE_POSTS_SUCCESS, INCREASE_POSTS_FAILURE,
    DECREASE_POSTS_REQUEST, DECREASE_POSTS_SUCCESS, DECREASE_POSTS_FAILURE
} from '../constants';

export const addPostRequestAction = () => {
    console.log('addPostRequestAction----');
    console.log(11111);
    return (dispatch, getState) => {
        console.log(2222);
        return fetch('http://localhost:8090/').then(response => response.json()).then(json => {
            dispatch({
                type: ADD_POSTS_SUCCESS,
                payload: json
            });
        });
    };

};

export const addPostSuccessAction = val => ({
    type: ADD_POSTS_SUCCESS,
    val
});

export const addPostFailureAction = errmsg => ({
    type: ADD_POSTS_FAILURE,
    errmsg
});

export const minusPostRequestAction = () => ({
    type: MINUS_POSTS_REQUEST
});

export const minusPostSuccessAction = val => ({
    type: MINUS_POSTS_SUCCESS,
    val
});

export const minusPostFailureAction = errmsg => ({
    type: MINUS_POSTS_FAILURE,
    errmsg
});



export const decreasePostRequestAction = () => ({
    type: DECREASE_POSTS_REQUEST
});

export const decreasePostSuccessAction = val => ({
    type: DECREASE_POSTS_SUCCESS,
    val
});

export const decreasePostFailureAction = errmsg => ({
    type: DECREASE_POSTS_FAILURE,
    errmsg
});
