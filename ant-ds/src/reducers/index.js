import { combineReducers } from "redux";
import {rootReducer} from './rootReducer'
import { signInReducer } from './/signInReducer';

export default combineReducers( {
    rootReducer,
    signInReducer
})