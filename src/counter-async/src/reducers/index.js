import {
    ADD_POSTS_REQUEST, ADD_POSTS_SUCCESS, ADD_POSTS_FAILURE,
    MINUS_POSTS_REQUEST, MINUS_POSTS_SUCCESS, MINUS_POSTS_FAILURE,
    INCREASE_POSTS_REQUEST, INCREASE_POSTS_SUCCESS, INCREASE_POSTS_FAILURE,
    DECREASE_POSTS_REQUEST, DECREASE_POSTS_SUCCESS, DECREASE_POSTS_FAILURE
} from '../constants';

export default (state = {}, action) => {
    switch (action.type) {
        case INCREASE_POSTS_REQUEST:
            return Object.assign({}, state, {
                status: 'loading'
            });
            break;
        case INCREASE_POSTS_SUCCESS:
            return Object.assign({}, state, {
                status: 'load success',
                val: action.val
            });
            break;
        case INCREASE_POSTS_FAILURE:
            return Object.assign({}, {
                status: 'load fail',
                errmsg: action.errmsg,
                val: action.val
            });
            break;
        default:
            return state;
    }
}
