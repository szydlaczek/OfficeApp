import * as actions from '../actions/action_types';
const initialState = {
    errorMessage : ""
}
export const signInReducer = (state = initialState ,  action)=> {
    switch(action.type) {        
        case actions.USER_SIGNIN_SUCCESS:            
            return { ...state, loggedIn: true, user: action.payload };

         case actions.USER_SIGNIN_FAILED:            
            return { ...state, loggedIn: false, errorMessage: action.payload };

        default:             
            return state;
    }
}

