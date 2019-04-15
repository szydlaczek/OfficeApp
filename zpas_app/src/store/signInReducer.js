
const initialState = {
    user : {
        userName : "empty",
        password : "empty"
    }
}

const signInReducer = (state = initialState, action) => {
    console.log("unknowgg" + action.type);
    switch (action.type) {
        case 'SignInUser':
        const user = action.payload;
        return {...state, user};
        default: 
            console.log("unknow" + action.type);
            return state;
    }
}
export default signInReducer;