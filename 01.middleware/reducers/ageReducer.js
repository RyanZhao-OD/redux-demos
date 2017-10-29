const {AGE} = require('../actions/ageAction');

module.exports = (state = 0, action) => {
    switch (action.type) {
        case AGE:
            return action.age;
            break;
        default:
            return state;
    }
};