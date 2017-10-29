const {NAME} = require('../actions/nameAction');

module.exports = (state = 'od', action) => {
    switch (action.type) {
        case NAME:
            return action.name;
            break;
        default:
            return state;
    }
};