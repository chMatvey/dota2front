import {combineReducers} from  'redux';
import {routerReducer} from 'react-router-redux';
import hero from './hero'

export default combineReducers({
    routing: routerReducer,
    hero,
})
