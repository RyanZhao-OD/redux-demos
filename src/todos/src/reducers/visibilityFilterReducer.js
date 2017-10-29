import {SET_VISIBILITY_FILTER} from '../actions';
import {FILTER_SHOW_ALL, FILTER_SHOW_COMPLETED, FILTER_SHOW_ACTIVE} from '../constants';

export default (state = FILTER_SHOW_ALL, action) => {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter;
            break;
        default:
            return state;
    }
};