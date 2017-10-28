const ageReducer = require('./ageReducer');
const nameReducer = require('./nameReducer');
const {combineReducers} = require('redux');


console.log(combineReducers);
module.exports = combineReducers({
    name: nameReducer,
    age: ageReducer
});