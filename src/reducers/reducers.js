import { combineReducers } from 'redux';
import { auth } from './authReducers';
import { articles } from './articleReducers';
import { users } from './userReducers';

const reducers = combineReducers({ auth, articles, users })

export default reducers;