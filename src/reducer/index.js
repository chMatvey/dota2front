import {combineReducers} from  'redux';
import {routerReducer} from 'react-router-redux';
import heroes from './hero'

export default combineReducers({
    routing: routerReducer,
    heroes,
})
