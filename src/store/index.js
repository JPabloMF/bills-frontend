import { createStore, combineReducers } from 'redux';
import {loginReducer} from "./reducers/index";
import REDUX_DEVTOOLS from '../constants';

const store = createStore(combineReducers({login:loginReducer}), REDUX_DEVTOOLS);

export default store;
