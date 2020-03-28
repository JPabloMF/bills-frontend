import { createStore, combineReducers } from 'redux';
import {loginReducer} from "./reducers/index";

const REDUX_DEVTOOLS = 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(combineReducers({login:loginReducer}), REDUX_DEVTOOLS);

export default store;
