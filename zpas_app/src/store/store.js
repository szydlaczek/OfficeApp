import {createStore} from 'redux';
import signInReducer from './signInReducer';

const store = createStore(signInReducer);

export default store;