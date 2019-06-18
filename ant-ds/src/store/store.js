import {createStore} from 'redux'
import reducers from './../reducers/usersReducer';

const store = createStore(reducers);

export default store;