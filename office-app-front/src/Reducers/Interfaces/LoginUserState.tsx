import LoggedUser from './LoggedUser';

export default interface LoginUserState {
    loggedIn: boolean,
    user: LoggedUser,
    error: string    
}