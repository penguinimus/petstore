import { combineReducers } from 'redux';
import catTreats from './test';

const rootReducer = combineReducers({
    item: catTreats
});

export default rootReducer;