import {LoginActionTypes, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT} from './../../Actions/Login/Types'
import LoginUserState from './../Interfaces/LoginUserState';

const initialState: LoginUserState = {
    user: {
        userName: "",
        firstName: "",
        lastName: ""
    },
    loggedIn: false,
    error: ""
}

export function UserLoginReducer(state: LoginUserState  = initialState, action: LoginActionTypes) : LoginUserState {
    
    switch(action.type) {
        case LOGIN_SUCCESS:
            return {
                loggedIn: true, 
                user: action.payload,
                error: "",                
            }

        case LOGIN_FAILURE:
                console.log(action)
            return {...state,
                loggedIn: false,                
                error: action.error
            }
        case LOGOUT:
            return {
                loggedIn: false,
                user: {
                    userName: "",
                    lastName: "",
                    firstName: ""
                },
                error: ""
            }    

        default:
            return state;    

    }
}