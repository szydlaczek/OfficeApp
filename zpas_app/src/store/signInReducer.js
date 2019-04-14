
const initialState = {
    user : {
        userName : "empty",
        password : "empty"
    }
}

const signInReducer = (state = initialState, action) => {
    switch (action.type) {
        default: 
            console.log("unknow" + action.type);
            return state;
    }
}
export default signInReducer;