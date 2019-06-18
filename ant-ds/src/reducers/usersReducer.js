
const initialState = {
    user : {}
}

const usersReducer = (state = initialState, action)=> {
    switch(action.type) {
        default: 
            console.log("Unknow action" + action.type)
            return state;
    }
}

export default usersReducer;