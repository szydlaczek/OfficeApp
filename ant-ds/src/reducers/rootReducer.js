import * as actions from '../actions/action_types'

const initialState = {
    isLoading: false
}

export const rootReducer = (state= initialState,  action)=> {
    switch(action.type) {
        case actions.REQUEST_STARTED:
            return { ...state, isLoading: true };
        
            case actions.REQUEST_ENDED:
                   
                    return { ...state, isLoading: false};  

        
            

        default: 
            console.log(action)
            return state;
    }
}

