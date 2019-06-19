import * as actions from '../actions/action_types'

const initialState = {
    isLoading: false
}

export const rootReducer = (state= initialState,  action)=> {
    switch(action.type) {
        case actions.GET_DATA_REQUESTED:
            return { ...state, isLoading: true };
        
            case actions.END_DATA_REQUESTED:
                    return { ...state, isLoading: false};    

        case actions.GET_DATA_FAILED:
            return { ...state, isLoading: false, isError: true } 
            

        default: 
            console.log(action)
            return state;
    }
}

