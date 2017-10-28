import {INCREASE, DECREASE, ADD, MINUS} from '../actions';

export default (state = 0, action) => {
    switch (action.type) {
        case INCREASE:
            return state + 1;
            break;
        case DECREASE:
            return state - 1;
            break;
        case ADD:
            return state + action.val;
            break;
        case MINUS:
            return state - action.val;
            break;
        default:
            return state;
    }
}