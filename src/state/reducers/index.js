import { combineReducers } from 'redux';
import weatherReducer from './weatherReducer';
import scaleReducer from './scaleReducer';

const reducers = combineReducers({
    weather: weatherReducer,
    scale: scaleReducer
});

export default reducers;