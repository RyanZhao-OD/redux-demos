import {ADD_TODO, TOGGLE_TODO} from '../actions';

export default (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ];
            break;
        case TOGGLE_TODO:
            return state.map(item => {
                return action.id === item.id
                    ? {...item, completed: !item.completed}
                    : item;
            });
            break;
        default:
            return state;
    }
};