import {combineReducers} from  'redux';
import {routerReducer} from 'react-router-redux';
import heroes from './hero'
import sections from './section'

export default combineReducers({
    routing: routerReducer,
    heroes,
    sections,
})
