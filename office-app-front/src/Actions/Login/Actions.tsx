import {LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT ,LoginActionTypes} from './Types';
import LoggedUser from './../../Reducers/Interfaces/LoggedUser'

export function loginSuccess(user: LoggedUser) : LoginActionTypes {
    return {
        type: LOGIN_SUCCESS,
        payload: user
    }
}

export function loginFailure(errorMessage: string) : LoginActionTypes {
    return {
        type: LOGIN_FAILURE,
        error: errorMessage
    }
}

export function logOut() : LoginActionTypes {
    return {
        type: LOGOUT
    }

}