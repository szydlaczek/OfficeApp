import { combineReducers } from "redux";
import {rootReducer} from './rootReducer'
import { loginReducer } from './loginReducer';

export default combineReducers( {
    rootReducer,
    loginReducer
})