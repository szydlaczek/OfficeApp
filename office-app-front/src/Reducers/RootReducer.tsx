import { combineReducers } from "redux";
import {UserLoginReducer} from './Login/LoginReducer'

const rootReducer = combineReducers({
    loginReducer: UserLoginReducer
});

export default rootReducer;