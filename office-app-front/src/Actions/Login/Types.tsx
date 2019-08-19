import LoggedUser from './../../Reducers/Interfaces/LoggedUser'
export const LOGIN_SUCCESS='LOGIN_SUCCESS'
export const LOGIN_FAILURE='LOGIN_FAILURE'
export const LOGOUT = "LOGOUT"

interface LoginSuccessAction {
    type: typeof LOGIN_SUCCESS,
    payload: LoggedUser
}

interface LoginFailureAction {
    type: typeof LOGIN_FAILURE
    error: string
}

interface LogOut {
    type: typeof LOGOUT
}

export type LoginActionTypes = LoginSuccessAction | LoginFailureAction | LogOut