const ageReducer = require('./ageReducer');
const nameReducer = require('./nameReducer');
const {combineReducers} = require('redux');

module.exports = combineReducers({
    name: nameReducer,
    age: ageReducer
});

