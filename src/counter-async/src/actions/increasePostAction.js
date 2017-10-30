import fetch from 'isomorphic-fetch';
import {
    INCREASE_POSTS_REQUEST, INCREASE_POSTS_SUCCESS, INCREASE_POSTS_FAILURE
} from '../constants';

export const increasePostRequestAction = currentVal => (dispatch, getState) => {
    dispatch({
        type: INCREASE_POSTS_REQUEST
    });
    return fetch('http://localhost:8090/calculate', {
        method: 'POST',
        body: JSON.stringify({
            currentVal
        })
    }).then(response => response.json()).then(json => {
        const {errno, errmsg} = json;
        const currentState = getState();
        if (errno) {
            const {errmsg} = json;
            dispatch({
                type: INCREASE_POSTS_FAILURE,
                errmsg: errmsg,
                val: currentState.val
            });
        } else {
            const {data} = json;
            dispatch({
                type: INCREASE_POSTS_SUCCESS,
                val: data.valueFromServer
            });
        }
    });
};

export const increasePostSuccessAction = val => ({
    type: INCREASE_POSTS_SUCCESS,
    val
});

export const increasePostFailureAction = errmsg => ({
    type: INCREASE_POSTS_FAILURE,
    errmsg
});
