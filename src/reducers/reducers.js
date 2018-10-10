import { combineReducers } from 'redux';
import { auth } from './authReducers';
import { articles } from './articleReducers';

const reducers = combineReducers({ auth, articles })

export default reducers;