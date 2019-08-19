import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import RootReducer from "./../Reducers/RootReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const middleware = applyMiddleware(thunkMiddleware);
const store =createStore(RootReducer, composeWithDevTools(middleware))

export default store;